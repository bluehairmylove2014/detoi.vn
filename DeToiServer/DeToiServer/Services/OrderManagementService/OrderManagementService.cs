using AutoMapper;
using DeToiServer.Dtos;
using DeToiServer.Dtos.OrderDtos;
using DeToiServer.Dtos.ServiceTypeDtos;
using DeToiServerCore.Models.Accounts;
using DeToiServerCore.Models.Services;

namespace DeToiServer.Services.OrderManagementService
{
    public class OrderManagementService : IOrderManagementService
    {
        private readonly UnitOfWork _uow;
        private readonly IMapper _mapper;
        private const int MAX_SERVICE = 50;

        public OrderManagementService(UnitOfWork uow, IMapper mapper)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public T? AddService<T>(PostServiceDto? postService, Guid orderId, Order order) 
            where T : Service
        {
            if (postService == null) return null;
            var service = _mapper.Map<T>(postService);

            // Add service relationship
            var orderServiceList = new List<OrderService>(1)
            {
                new OrderService() { OrderId = orderId }
            };

            // Add service type relationship
            var newOrderServiceType = new OrderServiceType() { OrderId = orderId, ServiceTypeId = service.ServiceTypeId };
            if (order.OrderServiceTypes == null)
            {
                order.OrderServiceTypes = new List<OrderServiceType>(MAX_SERVICE)
                {
                    newOrderServiceType
                };
            }
            else
            {
                order.OrderServiceTypes.Add(newOrderServiceType);
            }

            service.OrderServices = orderServiceList;
            return service;
        }

        public async Task<Order?> Add(PostOrderDto postOrderDto)
        {
            var rawOrder = _mapper.Map<Order>(postOrderDto);
            rawOrder.Id = Guid.NewGuid();
            var searchAddress = await _uow.AddressRepo.GetByIdAsync(postOrderDto.Address.Id);
            if (searchAddress == null)
            {
                rawOrder.Address = _mapper.Map<Address>(rawOrder.Address);
                rawOrder.Address.CustomerAccountId = postOrderDto.CustomerId;
            }
            else
            {
                rawOrder.AddressId = postOrderDto.Address.Id ?? Guid.Empty;
                rawOrder.Address = null;
            }

            await _uow.OrderRepo.CreateAsync(rawOrder);

            var cleaningService = AddService<CleaningService>(postOrderDto.CleaningService, rawOrder.Id, rawOrder);
            var repairingService = AddService<RepairingService>(postOrderDto.RepairingService, rawOrder.Id, rawOrder);
            var shoppingService = AddService<ShoppingService>(postOrderDto.ShoppingService, rawOrder.Id, rawOrder);
            
            await _uow.CleaningRepo.CreateAsync(cleaningService);
            await _uow.RepairingRepo.CreateAsync(repairingService);
            await _uow.ShoppingRepo.CreateAsync(shoppingService);

            // Save changes within the transaction scope
            if (!await _uow.SaveChangesAsync()) return null;

            return rawOrder;
        }

        public async Task<IEnumerable<Order>> GetFreelancerMatchingOrders(Guid freelancerId)
        {
            var result = await _uow.OrderRepo.GetAllOrderAsync();

            return result;
        }

        public async Task<Order?> GetById(Guid orderId)
            => await _uow.OrderRepo.GetByIdAsync(orderId);

        public async Task<GetOrderDto?> GetOrderDetailById(Guid id)
        {
            var rawOrder = await _uow.OrderRepo.GetOrderDetailByIdAsync(id);
            var order = _mapper.Map<GetOrderDto>(rawOrder);

            order.ServiceTypes = rawOrder.OrderServiceTypes?.Select(ost => _mapper.Map<GetServiceTypeDto>(ost.ServiceType)).ToList();

            return order;
        }
    }
}

using AutoMapper;
using DeToiServer.Dtos;
using DeToiServer.Dtos.OrderDtos;
using DeToiServer.Dtos.ServiceTypeDtos;
using DeToiServerCore.Common.Constants;
using DeToiServerCore.Models;
using DeToiServerCore.Models.Accounts;
using DeToiServerCore.Models.Services;
using System.Collections.Generic;

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

            if (cleaningService != null) await _uow.CleaningRepo.CreateAsync(cleaningService);
            if (repairingService != null) await _uow.RepairingRepo.CreateAsync(repairingService);
            if (shoppingService != null) await _uow.ShoppingRepo.CreateAsync(shoppingService);

            // Save changes within the transaction scope
            if (!await _uow.SaveChangesAsync()) return null;

            return rawOrder;
        }

        public async Task<IEnumerable<Order>> GetFreelancerSuitableOrders(Guid freelancerId)
        {
            var result = await _uow.OrderRepo.GetFreelancerSuitableOrders(freelancerId);

            return result;
        }

        public async Task<Order?> GetById(Guid orderId)
            => await _uow.OrderRepo.GetByIdAsync(orderId);

        public async Task<GetOrderDto?> GetOrderDetailById(Guid id)
        {
            var rawOrder = await _uow.OrderRepo.GetOrderDetailByIdAsync(id);
            if (rawOrder == null) return null;

            var order = _mapper.Map<GetOrderDto>(rawOrder);
            order.ServiceTypes = rawOrder.OrderServiceTypes?.Select(ost => _mapper.Map<GetServiceTypeDto>(ost.ServiceType)).ToList();

            return order;
        }

        public async Task<IEnumerable<GetOrderDto>> GetAllCustomerOrders(Guid customerId)
        {
            var rawOrders = await _uow.OrderRepo.GetCustomerOrders(customerId);

            var result = new List<GetOrderDto>();
            foreach (var rawOrder in rawOrders)
            {
                var order = _mapper.Map<GetOrderDto>(rawOrder);
                order.ServiceTypes = rawOrder.OrderServiceTypes?.Select(ost => _mapper.Map<GetServiceTypeDto>(ost.ServiceType)).ToList();
                result.Add(order);
            }

            return result;
        }

        public async Task<GetOrderDto?> GetLatestCustomerOrders(Guid customerId)
        {
            var rawOrder = await _uow.OrderRepo.GetLatestCustomerOrders(customerId);

            if (rawOrder is null)
            {
                return null;
            }

            var order = _mapper.Map<GetOrderDto>(rawOrder);
            order.ServiceTypes = rawOrder.OrderServiceTypes?.Select(ost => _mapper.Map<GetServiceTypeDto>(ost.ServiceType)).ToList();
            
            return order;
        }

        public async Task<IEnumerable<Order>> GetAllOrderTest()
        {
            var res = await _uow.OrderRepo.GetAllOrderWithDetailAsync();
            return res;
        }

        public async Task<UpdateOrderResultDto> PostOrderReview(PostOrderCustomerReviewDto review, Guid customerId)
        {
            var order = await _uow.OrderRepo.GetByConditionsAsync(o => 
                o.Id.Equals(review.OrderId) 
                && o.CustomerId.Equals(customerId)
                && !o.ServiceStatusId.Equals(StatusConst.Canceled));
            
            if (order == null) {
                return new()
                {
                    Message = "Không tìm thấy đơn đặt hàng"
                };
            }
            if (order.FreelancerId == null)
            {
                return new()
                {
                    Message = "Đơn đặt hàng của bạn chưa được nhận bởi Freelancer"
                };
            }

            order.Rating = review.Rating;
            order.Comment = review.Comment;
            var orderNew = await _uow.OrderRepo.UpdateAsync(order);

            return new()
            {
                Order = orderNew,
                Message = "Đánh giá đơn hàng thành công",
            };
        }

        public async Task<UpdateOrderResultDto> PostCancelOrderCustomer(Guid orderId, Guid customerId)
        {
            var validStatusList = new List<Guid>()
            {
                StatusConst.Waiting, StatusConst.Canceled
            };

            var order = await _uow.OrderRepo.GetByConditionsAsync(o =>
                o.Id.Equals(orderId)
                && o.CustomerId.Equals(customerId)
                // && o.FreelancerId == null
                && validStatusList.Any(item => o.ServiceStatusId.Equals(item)));

            if (order == null)
            {
                return new()
                {
                    Message = "Không tìm thấy đơn đặt hàng cần hủy. Hãy kiểm tra lại trạng thái đơn"
                };
            }

            order.ServiceStatusId = StatusConst.Canceled;
            var orderNew = await _uow.OrderRepo.UpdateAsync(order);

            return new()
            {
                Order = orderNew,
                Message = "Hủy đơn hàng thành công"
            };
        }
    }
}

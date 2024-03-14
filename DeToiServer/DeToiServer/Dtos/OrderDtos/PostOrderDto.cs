using DeToiServer.Dtos.AddressDtos;
using DeToiServer.Dtos.ServiceRequirementDtos;

namespace DeToiServer.Dtos.OrderDtos
{
    public class PostOrderDto
    {
        public required PostOrderAddressDto Address { get; set; }
        public TimeOnly StartTime { get; set; }
        public DateOnly StartDate { get; set; }
        public Guid CustomerId { get; set; }
        public PostCleaningServiceDto? CleaningService { get; set; }
        public PostRepairingServiceDto? RepairingService { get; set; }
        public PostShoppingServiceDto? ShoppingService { get; set; }
        //public PostElectronicsCleaningServiceDto? ElectronicsCleaningService { get; set; }
        //public PostMovingServiceDto? MovingService { get; set; }
    }

    public class PutOrderPriceAndFreelancerDto
    {
        public Guid OrderId { get; set; }
        public Guid FreelancerId { get; set; }
        public double ActualPrice { get; set; }
    }

    public class PutOrderStatus
    {
        public Guid OrderId { get; set; }
    }
}

﻿using DeToiServer.Dtos.AddressDtos;
using DeToiServer.Dtos.CleaningServiceDtos;

namespace DeToiServer.Dtos.OrderDtos
{
    public class PostOrderDto
    {
        public required PostOrderAddressDto Address { get; set; }
        public TimeOnly StartTime { get; set; }
        public DateOnly StartDate { get; set; }
        public Guid CustomerId { get; set; }
        public Guid ServiceId { get; set; }
        public PostCleaningServiceDto? CleaningService { get; set; }
        //public PostRepairingServiceDto? RepairingService { get; set; }
        //public PostShoppingServiceDto? ShoppingService { get; set; }
    }

    public class PutOrderPriceAndFreelancerDto
    {
        public Guid OrderId { get; set; }
        public Guid FreelancerId { get; set; }
        public double ActualPrice { get; set; }
    }
}

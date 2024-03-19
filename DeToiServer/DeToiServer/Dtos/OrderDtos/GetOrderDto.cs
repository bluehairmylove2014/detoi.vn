using DeToiServer.Dtos.AddressDtos;
using DeToiServer.Dtos.FreelanceDtos;
using DeToiServer.Dtos.ServiceTypeDtos;
using System.Text.Json.Serialization;

namespace DeToiServer.Dtos.OrderDtos
{
    public class GetOrderDto
    {
        public Guid Id { get; set; }
        public AddressDto? Address { get; set; }
        public double EstimatedPrice { get; set; }
        public TimeOnly StartTime { get; set; }
        public DateOnly StartDate { get; set; }
        public TimeOnly FinishTime { get; set; }
        public DateOnly FinishDate { get; set; }
        [JsonPropertyName("freelancer")]
        public GetFreelanceAccountInOrderDto? Freelance { get; set; }
        public string ServiceStatus { get; set; } = string.Empty;
        public ICollection<GetServiceTypeDto>? ServiceTypes { get; set; }
    }
}

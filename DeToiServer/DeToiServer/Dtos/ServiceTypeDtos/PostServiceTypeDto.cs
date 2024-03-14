
namespace DeToiServer.Dtos.ServiceTypeDtos
{
    public class PostServiceTypeDto
    {
        public string Name { get; set; } = string.Empty;
        public double BasePrice { get; set; }
        public string? Description { get; set; }
        public string? Image { get; set; }
        public string? Keys { get; set; }
        public Guid? ServiceCategoryId { get; set; }
    }
}

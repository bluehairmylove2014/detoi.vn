using DeToiServer.Dtos.ServiceTypeDtos;

namespace DeToiServer.Dtos.ServiceCategoryDtos
{
    public class PutServiceCategoryDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Image { get; set; } = string.Empty;
        public string? Description { get; set; } = string.Empty;
        public string? Keys { get; set; }
        public ICollection<PutServiceTypeDto>? ServiceTypes { get; set; }
    }
}

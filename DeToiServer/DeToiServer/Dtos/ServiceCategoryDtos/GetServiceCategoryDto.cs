using DeToiServer.Dtos.ServiceTypeDtos;
using DeToiServerCore.Models.Services;

namespace DeToiServer.Dtos.ServiceCategoryDtos
{
    public class GetServiceCategoryDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Image { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string ServiceClassName { get; set; } = string.Empty;
        public string? Keys { get; set; }
    }

    public class GetServiceCategoryWithChildDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Image { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string ServiceClassName { get; set; } = string.Empty;
        public string? Keys { get; set; }
        public ICollection<GetServiceTypeDto>? ServiceTypes { get; set; }
    }
}

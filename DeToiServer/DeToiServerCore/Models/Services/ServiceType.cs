using DeToiServerCore.Models.SevicesUIElement;

namespace DeToiServerCore.Models.Services
{
    public class ServiceType : ModelBase
    {
        public string Name { get; set; } = string.Empty;
        public double BasePrice { get; set; }
        public string? Description { get; set; }
        public string? Image { get; set; }
        public string? Keys { get; set; }
        public Guid? ServiceCategoryId { get; set; }
        public ServiceCategory? ServiceCategory { get; set; }
        public ICollection<OrderServiceType>? OrderServiceTypes { get; set; }
        public ICollection<Service>? Services { get; set; }
        public ICollection<ServiceProven>? ServiceProven { get; set; }
        public ICollection<UIElementServiceRequirement>? Requirements { get; set; }
        public ICollection<UIElementAdditionServiceRequirement>? AdditionalRequirements { get; set; }
    }
}

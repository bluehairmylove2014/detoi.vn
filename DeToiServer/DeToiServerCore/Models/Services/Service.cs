namespace DeToiServerCore.Models.Services
{
    public class Service : ModelBase
    {
        public string Note { get; set; } = string.Empty;
        public string AdditionalNote { get; set; } = string.Empty;
        public string Requirement { get; set; } = string.Empty;
        public string AdditionalRequirement { get; set; } = string.Empty;
        public Guid ServiceTypeId { get; set; }
        public ServiceType? ServiceType { get; set; }
        public ICollection<OrderService>? OrderServices { get; set; }
    }
}

/*
 get
{
    if (this is CleaningService)
        return new Guid("d17ad87c-9f80-4f0e-bfd4-53138d900a6e");

    if (this is ShoppingService)
        return new Guid("6f57d993-eb26-4b35-8c7d-7871a7fd624f");

    if (this is RepairingService)
        return new Guid("8a21b21e-dc31-49c8-8b5b-84b69204dc3a");

    return Guid.Empty;
}
set {}
 */
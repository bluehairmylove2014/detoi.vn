namespace DeToiServer.Dtos.ServiceDtos
{
    public class RequirementDataDto
    {
        public string Key { get; set; } = string.Empty;
        public string Value { get; set; } = string.Empty;
    }

    public class ServiceDto
    {
        public Guid Id { get; set; }
        public Guid ServiceTypeId { get; set; }
        public string Note { get; set; } = string.Empty;
        public string AdditionalNote { get; set; } = string.Empty;
        public required ICollection<RequirementDataDto> Requirement { get; set; }
        public required ICollection<RequirementDataDto> AdditionalRequirement { get; set; }
    }
}

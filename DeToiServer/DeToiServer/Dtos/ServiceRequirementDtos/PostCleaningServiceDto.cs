namespace DeToiServer.Dtos.ServiceRequirementDtos
{
    public class PostCleaningServiceDto : PostServiceDto
    {
        public string AddressLine { get; set; } = string.Empty;
        public string CleanningType { get; set; } = string.Empty;
        public int RoomNumber { get; set; }
        public bool HasPets { get; set; }
        public bool HasElectronics { get; set; }
        public bool FreelancerBringTools { get; set; }
    }
}
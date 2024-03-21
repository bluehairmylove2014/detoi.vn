using DeToiServer.Dtos.ServiceDtos;
using DeToiServerCore.Models.SevicesUIElement;

namespace DeToiServer.Services.UIElementService
{
    public interface IUIElementServiceRequirementService
    {
        public Task<IEnumerable<UIElementServiceRequirement>> GetAllWithDetail();
        public Task<IEnumerable<ServiceDto>> GetServiceClone();
        public Task<ServiceDto?> AddServiceClone(ServiceDto toAdd);
    }
}

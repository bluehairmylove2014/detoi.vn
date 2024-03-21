using AutoMapper;
using DeToiServer.Dtos.ServiceDtos;
using DeToiServerCore.Models.Services;
using DeToiServerCore.Models.SevicesUIElement;

namespace DeToiServer.Services.UIElementService
{
    public class UIElementServiceRequirementService : IUIElementServiceRequirementService
    {
        private readonly UnitOfWork _uow;
        private readonly IMapper _mapper;

        public UIElementServiceRequirementService(UnitOfWork uow, IMapper mapper)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public async Task<IEnumerable<UIElementServiceRequirement>> GetAllWithDetail()
        {
            return await _uow.UIElementServiceRequirementRepo.GetAllWithDetail();
        }

        public async Task<IEnumerable<ServiceDto>> GetServiceClone()
        {
            var res = await _uow.ServiceRepo.GetAllAsync();

            return _mapper.Map<IEnumerable<ServiceDto>>(res);
        }

        public async Task<ServiceDto?> AddServiceClone(ServiceDto toAdd)
        {
            var res = await _uow.ServiceRepo
                .CreateAsync(_mapper.Map<Service>(toAdd));
            
            if (!await _uow.SaveChangesAsync()) return null;

            return _mapper.Map<ServiceDto>(res);
        }
    }
}

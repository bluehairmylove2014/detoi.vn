using AutoMapper;
using DeToiServer.Dtos.ServiceDtos;
using DeToiServer.Dtos.UIElementDtos;
using DeToiServer.Services.UIElementService;
using DeToiServerCore.Models.SevicesUIElement;
using DeToiServerData.Repositories.UIElementServiceRequirementRepo;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;
using System.Collections.Generic;

namespace DeToiServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UIElementController : ControllerBase
    {
        private readonly IUIElementServiceRequirementService _requirementService;
        private readonly IMapper _mapper;
        public UIElementController(IUIElementServiceRequirementService requirementService, IMapper mapper)
        {
            _requirementService = requirementService;
            _mapper = mapper;
        }

        [HttpGet("test")]
        public async Task<IEnumerable<UIElementServiceRequirementDto>> Test()
        {
            var raw = await _requirementService.GetAllWithDetail();

            return raw.Select(item => _mapper.Map<UIElementServiceRequirementDto>(item)).ToList();
        }

        [HttpPost("test2")]
        public async Task<PostUIElementValidationTypeDto> Test2(PostUIElementValidationTypeDto input)
        {
            await Task.Delay(10);

            return input;
        }

        [HttpGet("test3")]
        public async Task<IEnumerable<ServiceDto>> Test3()
        {
            var res = await _requirementService.GetServiceClone();

            return res;
        }

        [HttpPost("test4")]
        public async Task<ActionResult<ServiceDto>> Test4(ServiceDto input)
        {
            var res = await _requirementService.AddServiceClone(input);

            if (res == null)
            {
                return BadRequest(new
                {
                    Message = "Lỗi"
                });
            }
            // await 

            return Ok(res);
        }
    }
}

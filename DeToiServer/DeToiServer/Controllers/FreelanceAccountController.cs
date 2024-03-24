using AutoMapper;
using DeToiServer.Dtos.AccountDtos;
using DeToiServer.Dtos.AddressDtos;
using DeToiServer.Dtos.FreelanceDtos;
using DeToiServer.Dtos.QuizDtos;
using DeToiServer.Services.AccountService;
using DeToiServer.Services.CustomerAccountService;
using DeToiServer.Services.FreelanceAccountService;
using DeToiServer.Services.FreelanceQuizService;
using DeToiServer.Services.OrderManagementService;
using DeToiServerCore.Common.Constants;
using DeToiServerCore.Common.CustomAttribute;
using DeToiServerCore.Models.FreelanceQuiz;
using DeToiServerData.Repositories.FreelancerQuizRepo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Options;
using System.Security.Claims;

namespace DeToiServer.Controllers
{
    [Route("api/v1/freelancer")]
    [ApiController]
    public class FreelanceAccountController : ControllerBase
    {
        private readonly IAccountService _accService;
        private readonly IFreelanceAccountService _freelanceAccService;
        private readonly IOrderManagementService _orderService;
        private readonly IMapper _mapper;
        private readonly IFreelanceQuizService _quizService;

        public FreelanceAccountController(IAccountService accService, IFreelanceAccountService freelanceAccountService, IOrderManagementService orderService, IMapper mapper, IFreelanceQuizService quizService)
        {
            _accService = accService;
            _freelanceAccService = freelanceAccountService;
            _orderService = orderService;
            _mapper = mapper;
            _quizService = quizService;
        }

        [HttpGet("all")]
        public async Task<ActionResult<GetFreelanceMatchingDto>> GetAllFreelancer()
        {
            var freelance = await _freelanceAccService.GetAllFreelanceDetail();
            return Ok(freelance);
        }

        [HttpGet("detail")] // , AuthorizeRoles(GlobalConstant.Freelancer)
        public async Task<ActionResult<GetFreelanceMatchingDto>> GetFreelancerDetail(Guid id)
        {
            var freelance = await _freelanceAccService.GetDetailWithStatistic(id);

            if (freelance is null)
            {
                return BadRequest(new
                {
                    Message = "Không tìm thấy tài khoản!"
                });
            }

            return Ok(freelance);
        }

        [HttpGet("current"), AuthorizeRoles(GlobalConstant.Freelancer)]
        public async Task<ActionResult<GetFreelanceDto>> GetCurrentFreelancerDetail()
        {
            _ = Guid.TryParse(User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Sid)?.Value, out Guid freelancerId);
            var freelance = await _freelanceAccService.GetByAccId(freelancerId);

            if (freelance is null)
            {
                return BadRequest(new
                {
                    Message = "Không tìm thấy tài khoản!"
                });
            }
            var result = _mapper.Map<GetFreelanceDto>(freelance);
            result.Address = _mapper.Map<AddressDto>(freelance.Address!.FirstOrDefault());

            return Ok(new
            {
                result,
                freelance
            });
        }

        [HttpGet("orders"), AuthorizeRoles(GlobalConstant.Freelancer)]
        public async Task<ActionResult<IEnumerable<Order>>> GetCurrentFreelancerMatchingOrders()
        {
            _ = Guid.TryParse(User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Sid)?.Value, out Guid freelancerId);
            var freelance = await _freelanceAccService.GetByAccId(freelancerId);

            if (freelance is null)
            {
                return BadRequest(new
                {
                    Message = "Không tìm thấy tài khoản!"
                });
            }

            var result = await _orderService.GetFreelancerSuitableOrders(freelance.Id);

            return Ok(result);
        }

        [HttpGet("existed-and-added-skills")]
        public async Task<ActionResult<bool>> IsFreelancerExistedAndHaveSkills(
            [FromQuery] string phoneNumber
        )
        {
            var account = await _accService.GetByCondition(acc => acc.Phone.Equals(phoneNumber));

            if (account == null)
            {
                return BadRequest(new
                {
                    Message = "Số điện thoại chưa được đăng ký trở thành Freelancer"
                });
            }

            if (!account.Role.Equals(GlobalConstant.Freelancer))
            {
                return BadRequest(new
                {
                    Message = "Số điện thoại này đã được đăng ký dưới định danh khác không phải Freelancer"
                });
            }

            var freelance = await _freelanceAccService.GetByAccId(account.Id);
            if (freelance is null)
            {
                return BadRequest(new
                {
                    Message = "Freelancer không tồn tại!"
                });
            }
            var result = _mapper.Map<GetFreelanceDto>(freelance);
            if (result.Skills == null || result.Skills.Count == 0)
            {
                return BadRequest(new
                {
                    Message = "Freelancer chưa thêm Kỹ năng vào profile!"
                });
            }

            // result.Address = _mapper.Map<AddressDto>(freelance.Address!.FirstOrDefault());

            return Ok(new
            {
                Message = "Freelancer đã có ít nhất 1 Kỹ năng trong profile"
            });
        }

        [HttpGet("quiz/all")]
        public async Task<ActionResult<IEnumerable<GetPreDefinedQuizDto>>> GetAllFreelanceQuiz()
        {
            var res = await _quizService.GetAllPreDefinedQuiz();

            return Ok(res);
        }

        [HttpGet("quiz/result/all")]
        public async Task<ActionResult<IEnumerable<FreelanceQuizResultDto>>> GetAllFreelanceQuizResult()
        {
            var res = await _quizService.GetAllQuizResult();

            return Ok(res);
        }
    }
}

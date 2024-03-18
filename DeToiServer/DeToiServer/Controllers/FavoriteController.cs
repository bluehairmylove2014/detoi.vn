using System.Security.Claims;
using DeToiServer.Dtos.FavoriteDtos;
using DeToiServer.Services.AccountService;
using DeToiServer.Services.FavoriteService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;

namespace DeToiServer.Controllers
{
    [ApiController]
    [Route("/api/v1/favorite")]
    public class FavoriteController : Controller
    {
        private readonly IFavoriteService _favoriteService;
        private readonly IAccountService _accountService;

        public FavoriteController(IFavoriteService favoriteService, IAccountService accountService)
        {
            _favoriteService = favoriteService;
            _accountService = accountService;
        }

        [HttpPost]
        public async Task<ActionResult> AddFavorite(AddFavoriteDto addFavoriteDto)
        {
            // Guid.TryParse()
            Guid.TryParse(User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Sid)?.Value, out Guid accountId);
            Console.WriteLine(addFavoriteDto.FreelancerId);

            if (addFavoriteDto.FreelancerId == accountId)
            {
                return BadRequest(new
                {
                    Message = "Không thể thêm chính bạn vào danh sách yêu thích!"
                });
            }

            var freelancer = await _accountService.GetById(addFavoriteDto.FreelancerId);
            if (freelancer is null)
            {
                return NotFound(new
                {
                    Message = "Không tìm thấy tài khoản freelancer!"
                });
            }


            var result = await _favoriteService.AddFavorite(addFavoriteDto.CustomerId, addFavoriteDto.FreelancerId);
            if (result is null)
            {
                return BadRequest(new
                {
                    Message = "Không thể thêm freelancer vào danh sách yêu thích!"
                });
            }
            return Ok(new
            {
                Message = "Thêm freelancer vào danh sách yêu thích thành công!"
            });
        }
    }
}
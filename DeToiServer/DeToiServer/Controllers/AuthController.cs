using AutoMapper;
using DeToiServer.Dtos.AuthDtos;
using DeToiServer.Services.AccountService;
using DeToiServer.Services.CustomerAccountService;
using DeToiServer.Services.FreelanceAccountService;
using DeToiServerCore.Common.Constants;
using DeToiServerCore.Models.Accounts;
using Google.Apis.Auth;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using OtpNet;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;

namespace DeToiServer.Controllers
{
    [ApiController]
    [Route("api/v1/auth")]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IAccountService _accService;
        private readonly ICustomerAccountService _customerAccService;
        private readonly IFreelanceAccountService _freelanceAccService;
        private readonly LoginSocialSecret _socialSecret;
        private readonly IMapper _mapper;

        public AuthController(IConfiguration configuration, IAccountService accService, ICustomerAccountService customerAccountService, IFreelanceAccountService freelanceAccountService, IOptions<ApplicationSecretSettings> appSecret, IMapper mapper)
        {
            _configuration = configuration;
            _accService = accService;
            _customerAccService = customerAccountService;
            _freelanceAccService = freelanceAccountService;
            _socialSecret = (appSecret.Value ?? throw new ArgumentException(null, nameof(appSecret))).LoginSocial;
            _mapper = mapper;
        }

        [HttpPost("register-freelance")]
        public async Task<ActionResult<Account>> RegisterFreelance(RegisterFreelanceDto request)
        {
            var freelance = await _freelanceAccService
                .GetByCondition(flc => flc.Account.Phone.Equals(request.Phone));

            if (freelance != null)
            {
                return BadRequest(new
                {
                    message = $"Tài khoản với số điện thoại {request.Phone} đã tồn tại!"
                });
            }

            var account = new Account()
            {
                Email = null,
                FullName = request.FullName ?? $"Freelancer_{DateTime.Now:yyyyMMdd}_VIE",
                DateOfBirth = request.DateOfBirth,
                Phone = request.Phone,
                Role = GlobalConstant.Freelancer,
                Avatar = GlobalConstant.CustomerAvtMale,
                IsVerified = true,
            };

            freelance = new FreelanceAccount()
            {
                Account = account,
                AccountId = account.Id,
                IdentityNumber = request.IdentityNumber,
                IsTeam = request.IsTeam,
                Address = _mapper.Map<List<Address>>(request.Address),
                //Skills = _mapper.Map<List<Skill>>(request.Skills),
            };

            // TODO: maybe this is unnecessary
            if (request.Address != null)
            {
                foreach (var item in freelance.Address)
                {
                    item.FreelanceAccountId = freelance.Id;
                }
            }

            await _freelanceAccService.Add(freelance);

            return Ok(new
            {
                message = "Tạo tài khoản Freelancer mới thành công!"
            });
        }

        [HttpPost("login/freelancer")]
        public async Task<ActionResult<string>> LoginFreelancer(LoginDto request)
        {
            var freelance = await _freelanceAccService
                .GetByCondition(cus => cus.Account.Phone.Equals(request.Phone));

            if (freelance == null)
            {
                return BadRequest(new
                {
                    message = "Tài khoản Freelancer không tồn tại.",
                });
            }

            freelance.Account.LoginToken = GenerateOTP();
            freelance.Account.LoginTokenExpires = DateTime.Now.AddMinutes(5);
            await _accService.Update(freelance.Account);
            // send OTP to phone

            return Ok(new
            {
                message = "Mã OTP đã được gửi đến điện thoại của bạn (Hết hạn sau 5 phút)",
            });
        }

        [HttpPost("login/customer")]
        public async Task<ActionResult<string>> Login(LoginDto request)
        {
            var customer = await _customerAccService
                .GetByCondition(cus => cus.Account.Phone.Equals(request.Phone));

            if (customer == null)
            {
                var account = new Account()
                {
                    Email = null,
                    FullName = $"Customer_{DateTime.Now:yyyyMMdd}_VIE",
                    Phone = request.Phone,
                    Role = GlobalConstant.Customer,
                    Avatar = GlobalConstant.CustomerAvtMale
                };

                customer = new CustomerAccount()
                {
                    Account = account,
                    AccountId = account.Id
                };

                await _customerAccService.Add(customer);
            }

            customer.Account.LoginToken = GenerateOTP();
            customer.Account.LoginTokenExpires = DateTime.Now.AddMinutes(5);
            await _accService.Update(customer.Account);

            // send OTP to phone

            return Ok(new
            {
                message = "Mã OTP đã được gửi đến điện thoại của bạn! (Hết hạn sau 5 phút)",
            });
        }

        [HttpPost("verify-otp/register-login")]
        public async Task<IActionResult> VerifyOtpToken(PhoneAndOtpDto request)
        {
            var account = await _accService.GetByCondition(acc => acc.Phone == request.Phone);

            if (account == null)
            {
                return NotFound();
            }

            //if (!request.Otp.Equals("2014") && !account.LoginToken.Equals(request.Otp))
            //    return BadRequest(new
            //    {
            //        Message = "Mã otp không hợp lệ."
            //    });
            //else if (IsOtpExpired(account.LoginTokenExpires, 300))
            //    return BadRequest(new
            //    {
            //        Message = "Mã otp đã hết hạn. Xin hãy yêu cầu mã OTP mới."
            //    });


            if (!account.IsVerified)
            {
                account.IsVerified = true;
            }

            var token = CreateToken(account, account.Role);
            var refreshToken = GenerateRefreshToken();
            SetRefreshToken(refreshToken, account);
            await _accService.Update(account);

            return Ok(new
            {
                Message = "Mã otp hợp lệ",
                token,
                refreshToken
            });
        }

        [HttpPost("resend-otp/register-login")]
        public async Task<IActionResult> ResendOtpToken(ResendOtpDto request)
        {
            var account = await _accService.GetByCondition(acc => acc.Phone == request.Phone);

            if (account == null)
            {
                return NotFound();
            }

            account.LoginToken = GenerateOTP();
            account.LoginTokenExpires = DateTime.Now.AddMinutes(5);
            await _accService.Update(account);

            // send OTP to phone

            return Ok(new
            {
                message = "Mã OTP đã được gửi đến điện thoại của bạn!",
            });
        }

        [HttpPost("login-social")]
        public async Task<ActionResult<string>> LoginSocial(LoginSocialRequestDto request)
        {

            //var account = await _accService.GetByCondition(acc => acc.Email.Equals(request.Email));

            //if (account == null)
            //{
            //    return NotFound(new
            //    {
            //        Message = "Tài khoản không tồn tại."
            //    });
            //}

            //var hasOrigin = this.Request.Headers.TryGetValue("Origin", out var requestOrigin);
            //if (!hasOrigin || !Helper.IsAuthorizedOrigin(requestOrigin.ToString(), account.Role))
            //{
            //    return BadRequest(new
            //    {
            //        message = "Tài khoản đang đăng nhập tại sai trang web!",
            //    });
            //}

            //if (!VerifyPasswordHash(request.Password, Helper.StringToByteArray(account.PasswordHash), Helper.StringToByteArray(account.PasswordSalt)))
            //{
            //    return BadRequest(new
            //    {
            //        message = "Sai thông tin tài khoản",
            //    });
            //}

            //string token = CreateToken(account, account.Role);
            //var refreshToken = GenerateRefreshToken();
            //SetRefreshToken(refreshToken, account);

            //await _accService.Update(account);

            var res = await ValidateSocialToken(request);

            return Ok(res);
        }

        [HttpPost("refresh-token")]
        public async Task<ActionResult<string>> RefreshToken([Required] string refreshToken)
        {
            if (string.IsNullOrEmpty(refreshToken))
            {
                return BadRequest(new
                {
                    message = "Refresh token không hợp lệ!"
                });
            }

            var account = await _accService.GetByCondition(acc => acc.RefreshToken == refreshToken);

            if (account == null)
            {
                return BadRequest(new
                {
                    message = "Tài khoản không tồn tại."
                });
            }

            if (account.TokenExpires < DateTime.Now)
            {
                return Unauthorized(new
                {
                    message = "Refresh Token hết hạn, xin thử lại."
                });
            }

            TokenDto token = CreateToken(account, account.Role);
            var newRefreshToken = GenerateRefreshToken();
            SetRefreshToken(newRefreshToken, account);
            await _accService.Update(account);

            return Ok(new
            {
                message = "Lấy Refresh token thành công",
                token,
                refreshToken = newRefreshToken,
            });
        }

        private RefreshToken GenerateRefreshToken()
        {
            var refreshToken = new RefreshToken
            {
                Value = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64)),
                Expires = DateTime.Now.AddDays(7),
                Created = DateTime.Now
            };

            return refreshToken;
        }

        private void SetRefreshToken(RefreshToken newRefreshToken, Account acc)
        {
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = newRefreshToken.Expires
            };
            Response.Cookies.Append("refreshToken", newRefreshToken.Value, cookieOptions);

            acc.RefreshToken = newRefreshToken.Value;
            acc.TokenCreated = newRefreshToken.Created;
            acc.TokenExpires = newRefreshToken.Expires;
        }

        private TokenDto CreateToken(Account acc, string role)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Sid, acc.Id.ToString()),
                new Claim(ClaimTypes.Name, acc.Phone),
                new Claim(ClaimTypes.Role, role)
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value!));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var result = new TokenDto
            {
                Value = "",
                Created = DateTime.Now,
                Expires = DateTime.Now.AddDays(1),
            };

            var token = new JwtSecurityToken(
                claims: claims,
                expires: result.Expires,
                signingCredentials: creds);

            result.Value = new JwtSecurityTokenHandler().WriteToken(token);

            return result;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(passwordHash);
            }
        }

        private string GenerateOTP()
        {
            var key = KeyGeneration.GenerateRandomKey(20);

            var base32String = Base32Encoding.ToString(key)
;
            var base32Bytes = Base32Encoding.ToBytes(base32String);
            var totp = new Totp(base32Bytes, 300);
            return totp.ComputeTotp(DateTime.UtcNow);
        }

        private bool IsOtpExpired(DateTime otpTime, int validityPeriodSeconds)
        {
            TimeSpan timeSinceOtp = DateTime.Now - otpTime;
            return timeSinceOtp.TotalSeconds > validityPeriodSeconds;
        }

        private async Task<IActionResult> ValidateSocialToken(LoginSocialRequestDto request)
        {
            return request.Provider switch
            {
                LoginProviders.Facebook => await ValidateFacebookToken(request),
                LoginProviders.Google => await ValidateGoogleToken(request),
                _ => BadRequest(new
                {
                    message = $"Đăng nhập sử dụng {request.Provider} chưa hỗ trợ."
                })
            };
        }

        private async Task<IActionResult> ValidateFacebookToken(LoginSocialRequestDto request)
        {
            var handler = new HttpClientHandler();
            handler.ServerCertificateCustomValidationCallback +=
                (sender, certificate, chain, errors) =>
                {
                    return true;
                };

            var clientId = _socialSecret.Facebook.ClientId;
            var clientSecret = _socialSecret.Facebook.ClientSecret;

            using (var httpClient = new HttpClient(handler))
            {
                var getCall = await httpClient.GetAsync($"https://graph.facebook.com/oauth/access_token?client_id={clientId}&client_secret={clientSecret}&grant_type=client_credentials");
                var appAccessTokenResponse = getCall.IsSuccessStatusCode ? await getCall.Content.ReadFromJsonAsync<FacebookAppAccessTokenResponse>() : null;

                var debugCall = await httpClient.GetAsync($"https://graph.facebook.com/debug_token?input_token={request.AccessToken}&access_token={appAccessTokenResponse!.AccessToken}");
                var response = debugCall.IsSuccessStatusCode ? await debugCall.Content.ReadFromJsonAsync<FacebookTokenValidationResult>() : null;

                if (response != null && response.Data.IsValid)
                {
                    return Ok(response);
                }
            }

            return BadRequest(new
            {
                message = $"{request.Provider} access token không hợp lệ."
            });
        }

        private async Task<IActionResult> ValidateGoogleToken(LoginSocialRequestDto request)
        {
            try
            {
                var settings = new GoogleJsonWebSignature.ValidationSettings
                {
                    Audience = new List<string> { _socialSecret.Google.ClientId }
                };
                GoogleJsonWebSignature.Payload payload = await GoogleJsonWebSignature.ValidateAsync(request.AccessToken, settings);

                if (payload != null)
                {
                    return Ok(payload);
                }
            }
            catch (InvalidJwtException)
            {
                throw;
            }

            return Ok(new
            {
                message = "out"
            });
        }
    }
}
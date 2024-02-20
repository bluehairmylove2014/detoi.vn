using AutoMapper;
using DeToiServer.Dtos.LocationDtos;
using DeToiServerCore.Common.Helper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR.Protocol;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.Net;
using System.Text;

namespace DeToiServer.Controllers
{
    [ApiController]
    [Route("api/v1/geo-code")]
    public class GeocodingController : ControllerBase
    {
        private readonly UnitOfWork _uow;
        private readonly IMapper _mapper;
        private readonly string _apiKey;

        public GeocodingController(UnitOfWork uow, IOptions<ApplicationSecretSettings> appSecret, IMapper mapper)
        {
            _uow = uow;
            _mapper = mapper;
            _apiKey = (appSecret.Value ?? throw new ArgumentException(null, nameof(appSecret))).GeoCoding.ApiKey;
        }

        [HttpGet("reverse")]
        public async Task<ActionResult<RevGeoCodeResponseDto>> GetRevGeoCodeInfo(
            [FromQuery, Required] double lat = 10.7625844,
            [FromQuery, Required] double lon = 106.68168516587875
        )
        {
            RevGeoCodeResponseDto? rawResult = null;
            RevGeoCodeResultDto? result = new();

            lat = (double)10.7625844;
            lon = (double)106.68168516587875;

            var handler = new HttpClientHandler();
            handler.ServerCertificateCustomValidationCallback +=
                (sender, certificate, chain, errors) =>
                {
                    return true;
                };

            var requestUrl = new StringBuilder("https://geocode.maps.co/reverse");
            requestUrl.Append($"?lat={lat}&lon={lon}&api_key={_apiKey}");

            using (var httpClient = new HttpClient(handler))
            {
                var httpRequestMessage = new HttpRequestMessage
                {
                    RequestUri = new Uri(requestUrl.ToString()),
                    Method = HttpMethod.Get,
                    Headers = {
                        //{ HttpRequestHeader.Accept.ToString(), "application/json" },
                    },
                    //Content = new StringContent(JsonConvert.SerializeObject(svm))
                };

                using var response = await httpClient.SendAsync(httpRequestMessage);

                if (response.StatusCode == System.Net.HttpStatusCode.OK)
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    rawResult = JsonConvert.DeserializeObject<RevGeoCodeResponseDto>(apiResponse);
                    result = _mapper.Map<RevGeoCodeResultDto>(rawResult!.Address);
                    result.Display_name = LocationHelper.ToVieLocation(rawResult!.Display_name!);
                    //result.Latt = lat;
                    //result.Longt = lon;
                }
            }

            //if (result is null)
            //{
            //    return NotFound(new
            //    {
            //        message = "Không tìm thấy vị trí dựa trên tọa độ đã cung cấp."
            //    });
            //}

            await Task.Delay(10);

            return Ok(new
            {
                rawResult,
                result
            });
        }
    }
}

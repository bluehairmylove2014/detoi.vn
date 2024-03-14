using AutoMapper;
using DeToiServer.Dtos.LocationDtos;
using DeToiServerCore.Common.Helper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR.Protocol;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Collections.Generic;
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
            _apiKey = appSecret.Value.GeoCoding == null ? "658dac28274ce196615546rej6e920c" : appSecret.Value.GeoCoding.ApiKey;
        }

        [HttpGet("reverse")]
        public async Task<ActionResult<RevGeoCodeResultDto>> GetRevGeoCodeInfo(
            [FromQuery, Required] double lat = 10.7625844,
            [FromQuery, Required] double lon = 106.68168516587875
        )
        {
            RevGeoCodeResponseDto? rawResult = null;
            RevGeoCodeResultDto? result = new();

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
                    result.Display_name = rawResult!.Display_name!;

                    //result.Ward = LocationHelper.ToVieLocation(result.Ward); // Helper.ToVieLocUnit(result.Ward);
                    //result.District = LocationHelper.ToVieLocation(result.District); // Helper.ToVieLocUnit(result.District);
                    //result.Province = LocationHelper.ToVieLocation(result.Province); // Helper.ToVieLocUnit(result.Province);

                    result.Lat = lat;
                    result.Lon = lon;
                }
            }

            if (result is null)
            {
                return NotFound(new
                {
                    message = "Không tìm thấy vị trí dựa trên tọa độ đã cung cấp."
                });
            }

            return Ok(result);
        }

        [HttpGet("forward")]
        public async Task<ActionResult<IEnumerable<GeoCodeResultDto>>> GetGeoCodeInfo(
            [FromQuery, Required] string search
        )
        {
            List<GeoCodeResponseDto>? rawResult = null;
            List<RevGeoCodeResultDto>? result = [];

            var handler = new HttpClientHandler();
            handler.ServerCertificateCustomValidationCallback +=
                (sender, certificate, chain, errors) =>
                {
                    return true;
                };

            var requestUrl = new StringBuilder("https://geocode.maps.co/search");
            requestUrl.Append($"?q={search}&api_key={_apiKey}");

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
                    rawResult = JsonConvert.DeserializeObject<List<GeoCodeResponseDto>>(apiResponse);
                    foreach (var item in rawResult!)
                    {
                        result.Add(_mapper.Map<RevGeoCodeResultDto>(item));
                    }
                }
            }

            if (result is null)
            {
                return NotFound(new
                {
                    message = "Không tìm thấy vị trí dựa trên chuỗi tìm kiếm cung cấp."
                });
            }

            return Ok(result);
        }
    }
}

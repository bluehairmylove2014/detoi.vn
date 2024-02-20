using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace DeToiServer.Dtos.LocationDtos
{
    public class InputGeoCodeDto
    {
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }

    public class AddressResultDto
    {
        public string? Amenity { get; set; }
        public string? House_number { get; set; }
        public string? Road { get; set; }
        public string? Quarter { get; set; } // Phường
        public string? Village { get; set; } // Xã
        public string? Suburb { get; set; } // Quận
        public string? City_district { get; set; } // Quận
        public string? County { get; set; } // Quận
        public string? City { get; set; } // Thành phố
        public string? State { get; set; } // Thành phố
        public string? Town { get; set; }
        [JsonPropertyName("ISO3166-2-lvl4")] public string? IsoCode { get; set; }
        public int? Postcode { get; set; }
        public string? Country { get; set; }
        public string? Country_code { get; set; }
    }

    public class RevGeoCodeResponseDto
    {
        public double? Lat { get; set; }
        public double? Lon { get; set; }
        public string? Display_name { get; set; }
        public AddressResultDto? Address { get; set; }
    }

    public class RevGeoCodeResultDto
    {
        public double Lat { get; set; }
        public double Lon { get; set; }
        public string? Display_name { get; set; } = string.Empty;

        public string? Amenity { get; set; }
        public string? House_number { get; set; }
        public string? Road { get; set; }

        public string Ward { get; set; } = string.Empty;
        public string District { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
    }
}

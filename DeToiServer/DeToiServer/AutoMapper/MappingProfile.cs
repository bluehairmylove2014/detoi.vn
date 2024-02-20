using AutoMapper;
using DeToiServer.Dtos;
using DeToiServer.Dtos.AccountDtos;
using DeToiServer.Dtos.LocationDtos;
using DeToiServer.Dtos.ServiceCategoryDtos;
using DeToiServer.Dtos.ServiceTypeDtos;
using DeToiServerCore.Models.Accounts;
using DeToiServerCore.Models.Services;

namespace DeToiServer.AutoMapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            #region Account
            CreateMap<GetAccountDto, Account>().ReverseMap();
            CreateMap<PutAccountDto, Account>().ReverseMap();

            #endregion

            #region ServiceType and ServiceCategory
            CreateMap<PostServiceTypeDto, ServiceType>().ReverseMap();
            CreateMap<GetServiceTypeDto, ServiceType>().ReverseMap();
            CreateMap<PutServiceTypeDto, ServiceType>().ReverseMap();
            CreateMap<GetServiceCategoryDto, ServiceCategory>().ReverseMap();
            CreateMap<GetServiceCategoryWithChildDto, ServiceCategory>().ReverseMap();
            CreateMap<PostServiceCategoryDto, ServiceCategory>().ReverseMap();
            CreateMap<PutServiceCategoryDto, ServiceCategory>().ReverseMap();
            #endregion

            #region GeoCoding
            CreateMap<AddressResultDto, RevGeoCodeResultDto> ().ReverseMap();
            #endregion
        }
    }
}

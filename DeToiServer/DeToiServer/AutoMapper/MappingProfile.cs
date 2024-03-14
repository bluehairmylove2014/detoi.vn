using AutoMapper;
using DeToiServer.Dtos.AccountDtos;
using DeToiServer.Dtos.AddressDtos;
using DeToiServer.Dtos.FreelanceDtos;
using DeToiServer.Dtos.LocationDtos;
using DeToiServer.Dtos.OrderDtos;
using DeToiServer.Dtos.ServiceCategoryDtos;
using DeToiServer.Dtos.ServiceProvenDtos;
using DeToiServer.Dtos.ServiceRequirementDtos;
using DeToiServer.Dtos.ServiceStatusDtos;
using DeToiServer.Dtos.ServiceTypeDtos;
using DeToiServer.Dtos.SkillDtos;
using DeToiServer.Dtos.UIElementDtos;
using DeToiServerCore.Common.Helper;
using DeToiServerCore.Models.Accounts;
using DeToiServerCore.Models.Services;
using DeToiServerCore.Models.SevicesUIElement;

namespace DeToiServer.AutoMapper
{
    #region Location Mapper Resolver
    public class WardResolver : IValueResolver<LocationAddressResultDto, RevGeoCodeResultDto, string>
    {
        public string Resolve(LocationAddressResultDto source, RevGeoCodeResultDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.Quarter))
                return source.Quarter;
            if (!string.IsNullOrEmpty(source.Town))
                return source.Town;
            if (!string.IsNullOrEmpty(source.Village))
                return source.Village;

            return string.Empty; // or throw an exception, depending on your logic
        }
    }

    public class DistrictResolver : IValueResolver<LocationAddressResultDto, RevGeoCodeResultDto, string>
    {
        public string Resolve(LocationAddressResultDto source, RevGeoCodeResultDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.Suburb))
                return source.Suburb;
            if (!string.IsNullOrEmpty(source.County))
                return source.County;
            if (!string.IsNullOrEmpty(source.City_district))
                return source.City_district;

            return string.Empty; // or throw an exception, depending on your logic
        }
    }

    public class ProvinceResolver : IValueResolver<LocationAddressResultDto, RevGeoCodeResultDto, string>
    {
        public string Resolve(LocationAddressResultDto source, RevGeoCodeResultDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.City))
                return source.City;
            if (!string.IsNullOrEmpty(source.State))
                return source.State;

            return string.Empty; // or throw an exception, depending on your logic
        }
    }
    #endregion

    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            #region Account
            CreateMap<GetAccountDto, Account>().ReverseMap();
            CreateMap<PutAccountDto, Account>().ReverseMap();
            CreateMap<GetFreelanceAccountDto, Account>().ReverseMap();
            CreateMap<GetFreelanceAccountInOrderDto, Account>().ReverseMap();
            #endregion

            #region Address
            CreateMap<Address, AddressDto>().ReverseMap();
            CreateMap<Address, PostOrderAddressDto>().ReverseMap();
            #endregion

            #region Skill
            CreateMap<Skill, SkillDto>().ReverseMap();
            #endregion

            #region Freelance
            CreateMap<FreelanceAccount, GetFreelanceDto>()
                .ForMember(dest => dest.Address, opt => opt.Ignore());

            CreateMap<FreelanceAccount, GetFreelanceMatchingDto>()
                .ForMember(dest => dest.Address, opt => opt.MapFrom(src => (src.Address ?? new List<Address>()).FirstOrDefault() ));
            #endregion

            #region ServiceType and ServiceCategory
            CreateMap<GetServiceTypeDto, ServiceType>().ReverseMap();
            CreateMap<GetServiceTypeDetailDto, ServiceType>().ReverseMap();
            CreateMap<PostServiceTypeDto, ServiceType>().ReverseMap();
            CreateMap<PutServiceTypeDto, ServiceType>().ReverseMap();
            CreateMap<GetServiceCategoryDto, ServiceCategory>().ReverseMap();
            CreateMap<GetServiceCategoryWithChildDto, ServiceCategory>().ReverseMap();
            CreateMap<PostServiceCategoryDto, ServiceCategory>().ReverseMap();
            CreateMap<PutServiceCategoryDto, ServiceCategory>().ReverseMap();
            #endregion

            #region ServiceType and ServiceCategory
            CreateMap<GetServiceStatusDto, ServiceStatus>().ReverseMap();
            #endregion

            #region services for an order
            CreateMap<PostOrderDto, Order>()
                .ForMember(dest => dest.StartTime, opt => opt.MapFrom(src => src.StartDate.ToDateTime(src.StartTime)));
            CreateMap<Order, GetOrderDto>()
                .ForMember(dest => dest.StartTime, opt => opt.MapFrom(src => TimeOnly.FromDateTime(src.StartTime)))
                .ForMember(dest => dest.StartDate, opt => opt.MapFrom(src => DateOnly.FromDateTime(src.StartTime)))
                .ForMember(dest => dest.FinishTime, opt => opt.MapFrom(src => TimeOnly.FromDateTime(src.FinishTime ?? DateTime.MinValue)))
                .ForMember(dest => dest.FinishDate, opt => opt.MapFrom(src => DateOnly.FromDateTime(src.FinishTime ?? DateTime.MinValue)))
                .ForMember(dest => dest.AddressLine, opt => opt.MapFrom(src => src.Address != null ? src.Address.AddressLine : string.Empty))
                .ForMember(dest => dest.Freelance, opt => opt.MapFrom(src => src.Freelance != null ? src.Freelance.Account : null))
                .ForMember(dest => dest.ServiceStatus, opt => opt.MapFrom(src => src.ServiceStatus != null ? src.ServiceStatus.Name : "Chờ xử lí"));
            CreateMap<OrderServiceType, GetOrderServiceTypeDto>();

            CreateMap<PostCleaningServiceDto, CleaningService>();
            CreateMap<PostRepairingServiceDto, RepairingService>();
            CreateMap<PostShoppingServiceDto, ShoppingService>();

            CreateMap<PostServiceProvenDto, ServiceProven>().ReverseMap();
            CreateMap<ServiceProven, GetServiceProvenDto>()
                .ForMember(dest => dest.StartTime, opt => opt.MapFrom(src => src.Order != null ? src.Order.StartTime : default(DateTime)))
                .ForMember(dest => dest.StartTime, opt => opt.MapFrom(src => src.Order != null ? src.Order.FinishTime : default(DateTime)))
                .ForMember(dest => dest.EstimatedPrice, opt => opt.MapFrom(src => src.Order != null ? src.Order.EstimatedPrice : 0))
                .ForMember(dest => dest.ServiceType, opt => opt.MapFrom(src => src.ServiceType != null ? src.ServiceType.Description : "Dịch vụ DeToi"));
            #endregion

            #region GeoCoding
            CreateMap<LocationAddressResultDto, RevGeoCodeResultDto>()
                .ForMember(dest => dest.Ward, opt => opt.MapFrom<WardResolver>())
                .ForMember(dest => dest.District, opt => opt.MapFrom<DistrictResolver>())
                .ForMember(dest => dest.Province, opt => opt.MapFrom<ProvinceResolver>());

            CreateMap<GeoCodeResponseDto, GeoCodeResultDto>();
            CreateMap<GeoCodeResponseDto, RevGeoCodeResultDto>()
                .ForMember(dest => dest.Country, opt => opt.MapFrom(src => Helper.GetLocationUnit(src.Display_name, 0)))
                .ForMember(dest => dest.Province, opt => opt.MapFrom(src => Helper.GetLocationUnit(src.Display_name, 1)))
                .ForMember(dest => dest.District, opt => opt.MapFrom(src => Helper.GetLocationUnit(src.Display_name, 2)))
                .ForMember(dest => dest.Ward, opt => opt.MapFrom(src => Helper.GetLocationUnit(src.Display_name, 3)))
                .ForMember(dest => dest.Road, opt => opt.MapFrom(src => Helper.GetLocationUnit(src.Display_name, 4)))
                .ForMember(dest => dest.House_number, opt => opt.MapFrom(src => Helper.GetLocationUnit(src.Display_name, 5)))
                .ForMember(dest => dest.Amenity, opt => opt.MapFrom(src => Helper.GetLocationUnit(src.Display_name, 6)));

            #endregion

            #region UI Element requirement and additional requirement

            #region Map UIElementValidationType
            CreateMap<UIElementValidationType, UIElementValidationTypeDto>()
                .ForMember(dest => dest.Value, opt => opt.MapFrom(src => Helper.StringToNum(src.Value)));

            #endregion
            CreateMap<UIElementServiceRequirementInputMethod, UIElementServiceRequirementInputMethodDto>().ReverseMap();

            CreateMap<UIElementInputOption, UIElementInputOptionDto>().ReverseMap();
            CreateMap<UIElementInputMethodType, UIElementInputMethodTypeDto>().ReverseMap();
            CreateMap<UIElementServiceRequirement, UIElementServiceRequirementDto>().ReverseMap();
            CreateMap<UIElementAdditionServiceRequirement, UIElementAdditionServiceRequirementDto>().ReverseMap();
            #endregion
        }
    }
}
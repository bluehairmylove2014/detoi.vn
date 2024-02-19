﻿using AutoMapper;
using DeToiServer.Dtos.AccountDtos;
using DeToiServer.Dtos.ServiceTypeDtos;
using DeToiServerCore.Models.Services;
using DeToiServerCore.QueryModels.ServiceTypeQueryModels;
using DeToiServerData;

namespace DeToiServer.Services.ServiceTypeService
{
    public class ServiceTypeService : IServiceTypeService
    {
        private readonly UnitOfWork _uow;
        private readonly IMapper _mapper;

        public ServiceTypeService(UnitOfWork uow, IMapper mapper) 
        {
            _uow = uow;
            _mapper = mapper;
        }

        public async Task<IEnumerable<GetServiceTypeDto>> GetAll()
        {
            var serviceTypeRaw = await _uow.ServiceTypeRepo.GetAllWithCategory();

            return serviceTypeRaw.Select(st => _mapper.Map<GetServiceTypeDto>(st)).ToList();
        }

        public async Task<GetServiceTypeDto> GetById(int id)
            => _mapper.Map<GetServiceTypeDto>(await _uow.ServiceTypeRepo.GetByIdWithCategory(id));

        public async Task<ServiceType> Add(PostServiceTypeDto postServiceDto)
        {
            var service = _mapper.Map<ServiceType>(postServiceDto);
            await _uow.ServiceTypeRepo.CreateAsync(service);
            return service;
        }

        public async Task Update(PutServiceTypeDto putServiceTypeDto)
        {
            var serviceType = _mapper.Map<ServiceType>(putServiceTypeDto);
            await _uow.ServiceTypeRepo.UpdateAsync(serviceType);
        }

        public async Task Delete(int id)
        {
            await _uow.ServiceTypeRepo.DeleteAsync(id);
        }

        public async Task<IEnumerable<GetServiceTypeDto>> GetAllServiceInfo(FilterServiceTypeQuery query)
        {
            var rawAccounts = await _uow.ServiceTypeRepo.GetAllServiceTypeInfoAsync(query);

            return rawAccounts.Select(_mapper.Map<GetServiceTypeDto>);
        }
    }
}

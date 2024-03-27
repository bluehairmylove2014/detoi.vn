import { IOrderDetail } from '@business-layer/services/entities';

export const orderListMockData: IOrderDetail[] = [
  {
    id: 'c7c871d5-f710-4515-84d6-c407ce21eadadasc21',
    address: {
      id: 'e06f2f1e-ace9-4284-b396-9879asdad3aea3934',
      lat: 10.697920930617858,
      lon: 106.61616206898327,
      addressLine: '700 Emerald St Apt 1203',
      ward: 'Phường 11',
      district: 'Quận Tân Bình',
      province: 'Thành phố Hồ Chí Minh',
      country: 'Việt Nam',
    },
    estimatedPrice: 0,
    startTime: '00:00:00',
    startDate: '2024-03-27',
    finishTime: '00:00:00',
    finishDate: '0001-01-01',
    freelancer: null,
    serviceStatus: 'Chưa đến giờ hoạt động',
    serviceTypes: [
      {
        id: '0cbf59ea-8dcb-4a62-be82-617sfsdfs153952b1d',
        name: 'Tổng vệ sinh nhà / nhà phố',
        description: 'Sửa chữa để tôi lo',
        image: 'https://detoivn.sirv.com/services/dondep/n%C3%A2-nhapho.png',
      },
    ],
    services: {
      id: '0434d073-e672-4974-a545-sfsfs',
      serviceTypeId: '0cbf59ea-8dcb-4a62-be82-617153952b1d',
      note: 'Drop marriage worker.',
      additionalNote: 'none',
      requirement: [
        {
          key: 'Name',
          value: 'Quạt treo tường',
        },
        {
          key: 'Size',
          value: 'Vừa',
        },
        {
          key: 'Quantity',
          value: '3',
        },
        {
          key: 'Price',
          value: '0',
        },
      ],
      additionalRequirement: [],
    },
  },
  {
    id: 'c7c871d5-f710-4515-84d6-c407ce21ec21',
    address: {
      id: 'e06f2f1e-ace9-4284-b396-98793aea3934',
      lat: 10.697920930617858,
      lon: 106.61616206898327,
      addressLine: '23731 Pine Tree Dr',
      ward: 'Phường 11',
      district: 'Quận Tân Bình',
      province: 'Thành phố Hồ Chí Minh',
      country: 'Việt Nam',
    },
    estimatedPrice: 0,
    startTime: '00:00:00',
    startDate: '2024-03-21',
    finishTime: '00:00:00',
    finishDate: '0001-01-01',
    freelancer: null,
    serviceStatus: 'Chưa đến giờ hoạt động',
    serviceTypes: [
      {
        id: '0cbf59ea-8dcb-4a62-be82-617153952b1d',
        name: 'Sửa máy lạnh',
        description: 'Sửa chữa để tôi lo',
        image:
          'https://detoivn.sirv.com/services/chuyennhaphongtro/category.png',
      },
    ],
    services: {
      id: '0434d073-e672-4974-a545-9c8a5c8621d7',
      serviceTypeId: '0cbf59ea-8dcb-4a62-be82-617153952b1d',
      note: 'Drop marriage worker.',
      additionalNote: 'none',
      requirement: [
        {
          key: 'Name',
          value: 'Quạt treo tường',
        },
        {
          key: 'Size',
          value: 'Vừa',
        },
        {
          key: 'Quantity',
          value: '3',
        },
        {
          key: 'Price',
          value: '0',
        },
      ],
      additionalRequirement: [],
    },
  },
];

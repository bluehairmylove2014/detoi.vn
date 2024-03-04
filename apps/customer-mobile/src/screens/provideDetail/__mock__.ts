import {
  IUIAdditionServiceRequirement,
  IUIServiceRequirement,
} from '@business-layer/services/entities';

export const testDataInput: IUIServiceRequirement[] = [
  {
    id: '0',
    inputMethod: {
      dataType: 'text',
      method: {
        name: 'input',
      },

      validation: [
        {
          id: '0',
          name: 'required',
          message: 'string',
        },
        {
          id: '1',
          name: 'min',
          value: 0,
          message: 'string',
        },
        {
          id: '2',
          name: 'max',
          value: 255,
          message: 'string',
        },
      ],
    },

    label: 'Số nhà, số phòng, hẻm (ngõ)',
    placeholder: 'Ví dụ: 257/43 Phòng 2014 Căn hộ Sunrise Continent',
  },
  {
    id: '1',
    inputMethod: {
      dataType: 'text',
      method: {
        name: 'select',
        options: [
          {
            id: '0',
            name: 'Dọn trọn gói',
            description: 'Tất cả dịch vụ, dọn toàn bộ nhà / phòng',
          },
          {
            id: '1',
            name: 'Dọn theo phòng',
            description: 'Trung bình 50.000đ / phòng, tiết kiệm và nhanh chóng',
          },
        ],
      },

      validation: [
        {
          id: '0',
          name: 'required',
          message: 'string',
        },
      ],
    },

    label: 'Bạn muốn chúng tôi dọn như thế nào?',
    labelIcon: 'faFlag',
    placeholder: 'Giúp nhân viên biết thêm về công việc cần làm',
  },
  {
    id: '2',
    inputMethod: {
      dataType: 'number',
      method: {
        name: 'input',
      },

      validation: [
        {
          id: '0',
          name: 'required',
          message: 'string',
        },
        {
          id: '1',
          name: 'min',
          value: 0,
          message: 'string',
        },
        {
          id: '2',
          name: 'max',
          value: 10,
          message: 'string',
        },
      ],
    },

    label: 'Số lượng phòng',
    labelIcon: 'faPersonShelter',
    placeholder:
      'Lưu ý: Nếu bạn chọn dịch vụ dọn theo phòng, vui lòng bổ sung số phòng cần dọn ở đây',
  },
];

export const testSwitch: IUIAdditionServiceRequirement[] = [
  {
    id: '0',
    icon: 'faDog',
    label: 'Nhà có thú cưng',
    autoSelect: true,
  },
  {
    id: '1',
    icon: 'faComputer',
    label: 'Nhà có nhiều đồ điện tử',
    autoSelect: false,
  },
  {
    id: '2',
    icon: 'faBroom',
    label: 'Nhân viên tự mang theo dụng cụ',
    autoSelect: false,
  },
];

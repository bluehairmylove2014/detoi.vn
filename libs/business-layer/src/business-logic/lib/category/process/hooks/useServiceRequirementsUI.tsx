import { IUIServiceRequirement } from '@business-layer/services/entities';

type useServiceRequirementsUIType = {
  onGenerateUI: () => JSX.Element;
};
export const useServiceRequirementsUI = (): useServiceRequirementsUIType => {
  const onGenerateUI = (): JSX.Element => {
    const requirements: IUIServiceRequirement = {
      id: '0',
      type: { name: 'input', type: 'number' },
      label: 'Số nhà, số phòng, hẻm (ngõ) *',
      placeholder: 'Ví dụ: 257/43 Phòng 2014 Căn hộ Sunrise Continent',
      validations: [
        {
          id: '0',
          name: 'required',
        },
        {
          id: '1',
          name: 'maxLength',
          value: 255,
        },
      ],
    };

    return <>{requirements}</>;
  };

  return {
    onGenerateUI,
  };
};

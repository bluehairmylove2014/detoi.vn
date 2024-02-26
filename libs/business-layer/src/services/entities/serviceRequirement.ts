type typeServiceRequirements =
  | { name: 'inputText' }
  | { name: 'inputNumber' }
  | {
      name: 'select';
      options?: {
        id: string;
        name: string;
        description: string;
      }[];
    };

export interface IOption {
  id: string;
  name: string;
  description: string;
}

type typeValidation =
  | { name: 'maxLength'; value: number }
  | { name: 'minLength'; value: number }
  | { name: 'required' }
  | { name: 'min'; value: number }
  | { name: 'max'; value: number };

export interface IServiceRequirement {
  id: string;
  type: typeServiceRequirements;
  label: string;
  labelIcon?: string;
  placeholder: string;
  validations: ({ id: string } & typeValidation)[];
}

export interface IAdditionServiceRequirement {
  id: string;
  icon: string;
  label: string;
  autoSelect: boolean;
  additionFee?: number;
}

import { IOption } from './option';

type typeServiceRequirements =
  | { name: 'input'; type: 'text' }
  | { name: 'input'; type: 'number' }
  | {
      name: 'select';
      options?: IOption[];
    };

type typeValidation =
  | { name: 'maxLength'; value: number }
  | { name: 'minLength'; value: number }
  | { name: 'required' }
  | { name: 'min'; value: number }
  | { name: 'max'; value: number };

export interface IUIServiceRequirement {
  id: string;
  type: typeServiceRequirements;
  label: string;
  labelIcon?: string;
  placeholder: string;
  validations: ({ id: string } & typeValidation)[];
}

export interface IUIAdditionServiceRequirement {
  id: string;
  icon: string;
  label: string;
  autoSelect: boolean;
  additionFee?: number;
}

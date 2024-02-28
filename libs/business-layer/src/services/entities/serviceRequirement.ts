import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { IOption } from './option';
import { validationType } from '@utils/validators/yup';

type inputMethodType =
  | { name: 'input' }
  | {
      name: 'select';
      options?: IOption[];
    };

type serviceRequirementsInputMethodType = {
  dataType: 'number' | 'text';
  method: inputMethodType;
  validation: { id: string } & validationType;
};

export interface IUIServiceRequirement {
  id: string;
  inputMethod: serviceRequirementsInputMethodType;
  label: string;
  labelIcon?: nativeIconNameType;
  placeholder: string;
}

export interface IUIAdditionServiceRequirement {
  id: string;
  icon: string;
  label: string;
  autoSelect: boolean;
}

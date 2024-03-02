import {
  IUIAdditionServiceRequirement,
  IUIServiceRequirement,
} from './serviceRequirement';

export interface IService {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  requirements: IUIServiceRequirement[];
  additionalRequirements: IUIAdditionServiceRequirement[];
}

import {
  IUIAdditionServiceRequirement,
  IUIServiceRequirement,
} from './serviceRequirement';

export interface IService {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  image: string;
}

export interface IServiceDetail extends IService {
  requirements: IUIServiceRequirement[];
  additionalRequirements: IUIAdditionServiceRequirement[];
}

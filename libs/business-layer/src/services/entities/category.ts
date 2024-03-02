import { IService } from './service';

export interface ICategory {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface ICategoryDetail extends ICategory {
  serviceTypes: IService[];
}

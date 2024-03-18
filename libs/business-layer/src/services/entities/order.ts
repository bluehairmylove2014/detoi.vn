import { IAddress } from './address';
import { IService, IServiceStatus } from './service';

export interface IOrderElement {
  name: string;
  dataType: string;
  value: string;
}

export interface IPostOrderFixedContent {
  address: Omit<IAddress, 'id'>;
  startTime: string;
  startDate: string;
}
export interface IPostOrderServiceContent {
  [key: string]: string | boolean | number;
}

export interface IOrderDetail {
  address: IAddress;
  estimatedPrice: number | null;
  startTime: string;
  startDate: string;
  finishTime: string | null;
  finishDate: string | null;
  serviceStatus: IServiceStatus;
  serviceTypes: IService[] | null;
}

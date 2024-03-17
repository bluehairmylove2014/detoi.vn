import { IAddress } from './address';
import { IService, IServiceStatus } from './service';

export interface IOrderElement {
  name: string;
  dataType: string;
  value: string;
}

export interface IOrder {
  address: IAddress;
  startTime: string;
  startDate: string;
  serviceId: string;
  note: string;
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

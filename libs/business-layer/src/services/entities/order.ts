import { IAddress } from './address';

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

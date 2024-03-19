import { IAddress, IOrderDetail } from '../../entities';

export type createOrderPropsType = {
  address: Omit<IAddress, 'id'>;
  startTime: string;
  startDate: string;
  serviceContent: any;
  serviceKey: string;
  token: string | null;
};
export type createOrderResponseType = {
  message: string;
};
export type getMatchingOrderDetailResponseType = IOrderDetail;

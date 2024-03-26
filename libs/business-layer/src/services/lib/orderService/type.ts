import {
  IAddress,
  IOrderDetail,
  IPostOrderServiceContent,
} from '../../entities';

export type createOrderPropsType = {
  address: Omit<IAddress, 'id'>;
  startTime: string;
  startDate: string;
  services: IPostOrderServiceContent;
  token: string | null;
};
export type createOrderResponseType = {
  message: string;
};
export type getMatchingOrderDetailResponseType = IOrderDetail;

export type cancelOrderPropsType = {
  orderId: string;
  token: string | null;
};
export type cancelOrderResponseType = {
  message: string;
};

export type selectFreelancerForOrderPropsType = {
  orderId: string;
  freelancerId: string;
  actualPrice: number;
  token: string | null;
};
export type selectFreelancerForOrderResponseType = {
  message: string;
};

export type getOrderDetailPropsType = {
  orderId: string;
  token: string | null;
};
export type getOrderDetailResponseType = IOrderDetail;

export type getFreelancerIncomingOrdersPropsType = {
  token: string | null;
};
export type getFreelancerIncomingOrdersResponseType = IOrderDetail[];

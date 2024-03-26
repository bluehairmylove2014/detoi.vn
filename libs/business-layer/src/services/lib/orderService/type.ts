import {
  IAddress,
  IOrderDetail,
  IPostOrderServiceContent,
} from '../../entities';
import {
  MARKETPLACE_SORTING_COL,
  MARKETPLACE_SORT_TYPE,
} from '@constants/marketplace';

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

export type getMarketplaceOrdersPropsType = {
  sortingCol: keyof typeof MARKETPLACE_SORTING_COL;
  sortType: keyof typeof MARKETPLACE_SORT_TYPE;
  page: number;
  pageSize: number;
  token: string | null;
};
export type getMarketplaceOrdersResponseType = IOrderDetail[];

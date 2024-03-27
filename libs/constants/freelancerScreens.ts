import {
  IFreelancerPreview,
  IOrderDetail,
  ITest,
} from '@business-layer/services/entities';

export type freelancerScreensList = {
  Home: undefined;
  Login: undefined;
  OTPVertification: undefined;
  Intro: undefined;
  Endow: undefined;
  Message: undefined;
  OrdersList: undefined;
  Account: undefined;
  AuctioningOrders: undefined;
  IncomingOrders: undefined;
  TestPreview: undefined;
  TestInProgress: { test: ITest; pointToPass: number };
  TestResult: { isSuccess: boolean; pointTest: number };
  MarketplaceOrderDetail: {
    order: IOrderDetail;
    freelancer: IFreelancerPreview;
  };
  ReceiveOrderSuccess: undefined;
  IncomingOrderDetail: {
    order: IOrderDetail;
  };
};

export type freelancerHomeStackParams = Pick<
  freelancerScreensList,
  | 'Home'
  | 'Intro'
  | 'MarketplaceOrderDetail'
  | 'ReceiveOrderSuccess'
  | 'IncomingOrderDetail'
>;
export type freelancerAuthStackParams = Pick<
  freelancerScreensList,
  'Login' | 'OTPVertification'
>;
export type freelancerEndowStackParams = Pick<freelancerScreensList, 'Endow'>;
export type freelancerMessageStackParams = Pick<
  freelancerScreensList,
  'Message'
>;
export type freelancerOrdersListStackParams = Pick<
  freelancerScreensList,
  'OrdersList' | 'AuctioningOrders' | 'IncomingOrders'
>;
export type freelancerAccountStackParams = Pick<
  freelancerScreensList,
  'Account'
>;

export type freelancerTestStackParams = Pick<
  freelancerScreensList,
  'TestPreview' | 'TestInProgress' | 'TestResult'
>;

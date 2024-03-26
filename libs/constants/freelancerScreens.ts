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
  TestPreview: undefined;
  TestInProgress: { test: ITest; pointToPass: number };
  TestResult: { isSuccess: boolean; pointTest: number };
  MarketplaceOrderDetail: {
    order: IOrderDetail;
    freelancer: IFreelancerPreview;
  };
};

export type freelancerHomeStackParams = Pick<
  freelancerScreensList,
  'Home' | 'Intro' | 'MarketplaceOrderDetail'
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
  'OrdersList'
>;
export type freelancerAccountStackParams = Pick<
  freelancerScreensList,
  'Account'
>;

export type freelancerTestStackParams = Pick<
  freelancerScreensList,
  'TestPreview' | 'TestInProgress' | 'TestResult'
>;

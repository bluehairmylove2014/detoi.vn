import { IFreelancerAccountDetail } from '../business-layer/src/services/entities';

export type customerScreensList = {
  Home: undefined;
  ChooseLocation: undefined;
  ChooseService: undefined;
  ProvideDetail: undefined;
  ProvideDate: undefined;
  Summary: { orderId: string; freelancerId: string; pricing: number };
  Matching: undefined;
  FreelancerServiceProven: { imageUrl: string };
  FreelancerDetail: {
    orderId: string;
    freelancerAccountDetail: IFreelancerAccountDetail;
  };
  ImageDetail: { imageUrl: string };
  OnService: { orderId: string };
  Rating: { orderId: string; orderPrice: number };
  Review: { orderId: string; ratingIndex: number };
  Endow: undefined;
  Message: undefined;
  OrdersList: undefined;
  Account: undefined;
  Login: undefined;
  OTPVertification: undefined;
  Intro: undefined;
};

export type customerHomeStackParams = Pick<
  customerScreensList,
  | 'Home'
  | 'ChooseLocation'
  | 'ChooseService'
  | 'ProvideDetail'
  | 'ProvideDate'
  | 'Summary'
  | 'Matching'
  | 'FreelancerServiceProven'
  | 'FreelancerDetail'
  | 'ImageDetail'
  | 'OnService'
  | 'Rating'
  | 'Review'
  | 'Intro'
>;
export type customerAuthStackParams = Pick<
  customerScreensList,
  'Login' | 'OTPVertification'
>;
export type customerEndowStackParams = Pick<customerScreensList, 'Endow'>;
export type customerMessageStackParams = Pick<customerScreensList, 'Message'>;
export type customerOrdersListStackParams = Pick<
  customerScreensList,
  'OrdersList'
>;
export type customerAccountStackParams = Pick<customerScreensList, 'Account'>;

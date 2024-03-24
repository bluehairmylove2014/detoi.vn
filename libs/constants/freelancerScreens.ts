export type freelancerScreensList = {
  Home: undefined;
  Login: undefined;
  OTPVertification: undefined;
  Intro: undefined;
  Endow: undefined;
  Message: undefined;
  OrdersList: undefined;
  Account: undefined;
};

export type freelancerHomeStackParams = Pick<freelancerScreensList, 'Home' | 'Intro'>;
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

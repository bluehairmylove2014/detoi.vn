export type freelancerStacksList = {
  AuthStack: undefined;
  MainStack: { isLogged: boolean };
  HomeStack: undefined;
  EndowStack: undefined;
  MessagesStack: undefined;
  OrdersStack: undefined;
  AccountStack: undefined;
  TestStack: undefined;
};

export type freelancerGlobalStacks = Pick<
  freelancerStacksList,
  'AuthStack' | 'MainStack' | 'TestStack'
>;
export type freelancerBottomTabChildStacks = Pick<
  freelancerStacksList,
  'AccountStack' | 'HomeStack' | 'EndowStack' | 'MessagesStack' | 'OrdersStack'
>;

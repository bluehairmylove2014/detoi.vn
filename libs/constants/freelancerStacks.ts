export type freelancerStacksList = {
  AuthStack: undefined;
  MainStack: { isLogged: boolean };
  HomeStack: undefined;
  EndowStack: undefined;
  MessagesStack: undefined;
  OrdersStack: undefined;
  AccountStack: undefined;
};

export type freelancerGlobalStacks = Pick<
  freelancerStacksList,
  'AuthStack' | 'MainStack'
>;
export type freelancerBottomTabChildStacks = Pick<
  freelancerStacksList,
  'AccountStack' | 'HomeStack' | 'EndowStack' | 'MessagesStack' | 'OrdersStack'
>;

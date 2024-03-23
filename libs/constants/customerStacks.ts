export type customerStacksList = {
  AuthStack: undefined;
  MainStack: { isLogged: boolean };
  HomeStack: undefined;
  EndowStack: undefined;
  MessagesStack: undefined;
  OrdersStack: undefined;
  AccountStack: undefined;
};

export type customerGlobalStacks = Pick<
  customerStacksList,
  'AuthStack' | 'MainStack'
>;
export type customerBottomTabChildStacks = Pick<
  customerStacksList,
  'AccountStack' | 'HomeStack' | 'EndowStack' | 'MessagesStack' | 'OrdersStack'
>;

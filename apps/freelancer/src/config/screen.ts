import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type customerTabParamList = {
  HomeStack: undefined;
  EndowStack: undefined;
  MessagesStack: undefined;
  OrdersStack: undefined;
  AccountStack: undefined;
};

// 1. Params config
// HOME STACK
type customerRootStackParamList = {
  Home: undefined;
};
// ENDOW STACK
type endowStackParamList = {
  Endow: undefined;
};
// MESSAGES STACK
type messagesStackParamList = {
  Message: undefined;
};
// ORDERS STACK
type ordersStackParamList = {
  OrdersList: undefined;
};
// ACCOUNT STACK
type accountStackParamList = {
  Account: undefined;
};

// 2. Props
type HomeProps = NativeStackScreenProps<customerRootStackParamList, 'Home'>;

// 3. Export props
export { HomeProps };
export {
  customerRootStackParamList,
  endowStackParamList,
  messagesStackParamList,
  ordersStackParamList,
  accountStackParamList,
  customerTabParamList,
};

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type globalStackParamList = {
  AuthStack: { isLogged: boolean };
  MainStack: { isLogged: boolean };
};

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
// AUTH STACK
type authStackParamList = {
  Login: undefined;
  OTPVertification: undefined;
};

// 2. Props
type HomeProps = NativeStackScreenProps<customerRootStackParamList, 'Home'>;
type LoginProps = NativeStackScreenProps<authStackParamList, 'Login'>;
type OTPVertificationProps = NativeStackScreenProps<
  authStackParamList,
  'OTPVertification'
>;

// 3. Export props
export { HomeProps, LoginProps, OTPVertificationProps };
export {
  globalStackParamList,
  customerRootStackParamList,
  endowStackParamList,
  messagesStackParamList,
  ordersStackParamList,
  accountStackParamList,
  customerTabParamList,
  authStackParamList,
};

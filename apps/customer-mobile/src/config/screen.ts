import { IFreelancerAccountDetail } from '@business-layer/services/entities';
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
  Login: undefined;
  OTPVertification: undefined;
  Home: undefined;
  ChooseLocation: undefined;
  ChooseService: undefined;
  ProvideDetail: undefined;
  ProvideDate: undefined;
  Summary: undefined;
  Matching: undefined;
  FreelancerDetail: { freelancerAccountDetail: IFreelancerAccountDetail };
  ImageDetail: { imageUrl: string };
  OnService: undefined;
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
type ChooseLocationProps = NativeStackScreenProps<
  customerRootStackParamList,
  'ChooseLocation'
>;
type LoginProps = NativeStackScreenProps<customerRootStackParamList, 'Login'>;
type OTPVertificationProps = NativeStackScreenProps<
  customerRootStackParamList,
  'OTPVertification'
>;
type ChooseServiceProps = NativeStackScreenProps<
  customerRootStackParamList,
  'ChooseService'
>;
type ProvideDetailProps = NativeStackScreenProps<
  customerRootStackParamList,
  'ProvideDetail'
>;
type ProvideDateProps = NativeStackScreenProps<
  customerRootStackParamList,
  'ProvideDate'
>;

type SummaryProps = NativeStackScreenProps<
  customerRootStackParamList,
  'Summary'
>;

type MatchingProps = NativeStackScreenProps<
  customerRootStackParamList,
  'Matching'
>;

type ImageDetailProps = NativeStackScreenProps<
  customerRootStackParamList,
  'ImageDetail'
>;

type FreelancerDetailProps = NativeStackScreenProps<
  customerRootStackParamList,
  'FreelancerDetail'
>;
type OnServiceProps = NativeStackScreenProps<
  customerRootStackParamList,
  'OnService'
>;

// 3. Export props
export {
  HomeProps,
  ChooseLocationProps,
  LoginProps,
  OTPVertificationProps,
  SummaryProps,
  ProvideDetailProps,
  ProvideDateProps,
  ChooseServiceProps,
  FreelancerDetailProps,
  OnServiceProps,
  ImageDetailProps,
  MatchingProps,
};
export {
  customerRootStackParamList,
  endowStackParamList,
  messagesStackParamList,
  ordersStackParamList,
  accountStackParamList,
  customerTabParamList,
};

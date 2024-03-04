import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ICategory } from '@business-layer/services/entities';

// 1. Params config
type customerRootStackParamList = {
  Home: undefined;
  ChooseLocation: { category: ICategory };
  Intro: undefined;
  Login: undefined;
  OTPVertification: undefined;
  Home: undefined;
  ChooseLocation: undefined;
  ChooseService: { categoryId: string };
  ProvideDetail: { serviceId: string };
  Summary: undefined;
};

type customerTabParamList = {
  Home: undefined,
  Endow: undefined,
  Message: undefined,
  SingleService: undefined,
  Account: undefined,
  Login: undefined
}

// 2. Props
type HomeProps = NativeStackScreenProps<customerRootStackParamList, 'Home'>;
type ChooseLocationProps = NativeStackScreenProps<
  customerRootStackParamList,
  'ChooseLocation'
>;
type IntroProps = NativeStackScreenProps<customerRootStackParamList, 'Intro'>;
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
type SummaryProps = NativeStackScreenProps<
  customerRootStackParamList,
  'Summary'
>;

// 3. Export props
export {
  customerRootStackParamList,
  HomeProps,
  ChooseLocationProps,
  LoginProps,
  OTPVertificationProps,
  SummaryProps,
  ProvideDetailProps,
  customerTabParamList,
  IntroProps,
  ChooseServiceProps,
};

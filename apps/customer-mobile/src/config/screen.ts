import { IFreelancerAccountDetail } from '@business-layer/services/entities';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// 1. Params config
type customerRootStackParamList = {
  Intro: undefined;
  Login: undefined;
  OTPVertification: undefined;
  Home: undefined;
  ChooseLocation: undefined;
  ChooseService: undefined;
  ProvideDetail: undefined;
  ProvideDate: undefined;
  Summary: undefined;
  FreelancerDetail: { freelancerAccountDetail: IFreelancerAccountDetail };
  OnService: undefined;
};

type customerTabParamList = {
  Home: undefined;
  Endow: undefined;
  Message: undefined;
  SingleService: undefined;
  Account: undefined;
  Login: undefined;
};

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
type ProvideDateProps = NativeStackScreenProps<
  customerRootStackParamList,
  'ProvideDate'
>;

type SummaryProps = NativeStackScreenProps<
  customerRootStackParamList,
  'Summary'
>;

type FreelancerDetailProps = NativeStackScreenProps<
  customerRootStackParamList,
  'FreelancerDetail'
  >
type OnServiceProps = NativeStackScreenProps<
  customerRootStackParamList,
  'OnService'
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
  ProvideDateProps,
  customerTabParamList,
  IntroProps,
  ChooseServiceProps,
  FreelancerDetailProps,
  OnServiceProps,
};

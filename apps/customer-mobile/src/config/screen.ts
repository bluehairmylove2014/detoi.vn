import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// 1. Params config
type customerRootStackParamList = {
  Home: undefined;
  ChooseLocation: undefined;
  Login: undefined;
  OTPVertification: undefined;
  SummaryOrder: undefined;
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
type SummaryOrderProps = NativeStackScreenProps<customerRootStackParamList, 'SummaryOrder'>;

// 3. Export props
export {
  customerRootStackParamList,
  HomeProps,
  ChooseLocationProps,
  LoginProps,
  OTPVertificationProps,
  SummaryOrderProps,
};

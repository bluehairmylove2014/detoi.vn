import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// 1. Params config
type customerRootStackParamList = {
  Home: undefined;
  ChooseLocation: undefined;
  Login: undefined;
  OTPVertification: undefined;
  Intro: undefined;
  ProvideDetail: { categoryId: string };
  HomeTab: undefined
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
type ProvideDetailProps = NativeStackScreenProps<
  customerRootStackParamList,
  'ProvideDetail'
>;

// 3. Export props
export {
  customerRootStackParamList,
  HomeProps,
  ChooseLocationProps,
  LoginProps,
  OTPVertificationProps,
  customerTabParamList,
  IntroProps,
  ProvideDetailProps
};

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// 1. Params config
type customerRootStackParamList = {
  Home: undefined;
  ChooseLocation: undefined;
  Intro: undefined;
};

// 2. Props
type HomeProps = NativeStackScreenProps<customerRootStackParamList, 'Home'>;
type ChooseLocationProps = NativeStackScreenProps<
  customerRootStackParamList,
  'ChooseLocation'
>;
type IntroProps = NativeStackScreenProps<customerRootStackParamList, 'Intro'>;

// 3. Export props
export { customerRootStackParamList, HomeProps, ChooseLocationProps, IntroProps };

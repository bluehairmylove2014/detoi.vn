import { Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { freelancerScreensList } from '@constants/freelancerScreens';

const Account: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'Account'>
> = () => {
  return <Text>Account</Text>;
};

export default Account;

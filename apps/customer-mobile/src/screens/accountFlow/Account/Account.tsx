import { Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { customerScreensList } from '@constants/customerScreens';

const Account: React.FC<
  NativeStackScreenProps<customerScreensList, 'Account'>
> = () => {
  return <Text>Account</Text>;
};

export default Account;

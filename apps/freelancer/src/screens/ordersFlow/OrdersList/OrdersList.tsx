import { Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { freelancerScreensList } from '@constants/freelancerScreens';

const OrdersList: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'OrdersList'>
> = () => {
  return <Text>OrdersList</Text>;
};

export default OrdersList;

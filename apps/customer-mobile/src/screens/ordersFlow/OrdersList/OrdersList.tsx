import { Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { customerScreensList } from '@constants/customerScreens';

const OrdersList: React.FC<
  NativeStackScreenProps<customerScreensList, 'OrdersList'>
> = () => {
  return <Text>OrdersList</Text>;
};

export default OrdersList;

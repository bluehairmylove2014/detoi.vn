import { Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { customerScreensList } from '@constants/customerScreens';

const Endow: React.FC<
  NativeStackScreenProps<customerScreensList, 'Endow'>
> = () => {
  return <Text>Endow</Text>;
};

export default Endow;

import { Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { freelancerScreensList } from '@constants/freelancerScreens';

const Endow: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'Endow'>
> = () => {
  return <Text>Endow</Text>;
};

export default Endow;

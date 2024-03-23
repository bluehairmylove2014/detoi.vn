import { Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { freelancerScreensList } from '@constants/freelancerScreens';

const Message: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'Message'>
> = () => {
  return <Text>Message</Text>;
};

export default Message;

import { Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { customerScreensList } from '@constants/customerScreens';

const Message: React.FC<
  NativeStackScreenProps<customerScreensList, 'Message'>
> = () => {
  return <Text>Message</Text>;
};

export default Message;

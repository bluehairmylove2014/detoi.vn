import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { circleImageStyles } from '@present-native/styles';

export const CircleImage = ({
  source,
  style,
}: {
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}) => {
  return <Image source={source} style={[circleImageStyles.image, style]} />;
};

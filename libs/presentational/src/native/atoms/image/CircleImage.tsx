import { Image, ImageSourcePropType } from 'react-native';
import { circleImageStyles } from '@present-native/styles';

export const CircleImage = ({ source }: { source: ImageSourcePropType }) => {
  return <Image source={source} style={circleImageStyles.image} />;
};

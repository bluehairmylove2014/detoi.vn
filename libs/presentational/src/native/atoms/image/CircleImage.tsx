import { Image, ImageSourcePropType } from 'react-native';
import { circleImageStyles } from './styles';

export const CircleImage = ({ source }: { source: ImageSourcePropType }) => {
  return <Image source={source} style={circleImageStyles.image} />;
};

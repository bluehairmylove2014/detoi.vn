import { Image, ImageSourcePropType } from 'react-native';
import { squareRoundedImageStyles } from './styles';

export const SquareImage = ({ source }: { source: ImageSourcePropType }) => {
  return <Image source={source} style={squareRoundedImageStyles.image} />;
};

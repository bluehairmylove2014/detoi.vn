import { colors } from '@present-native/styles';
import { Dimensions, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const BlurTheme = () => {
  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: colors.black,
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.6,
      }}
    />
  );
};
export { BlurTheme };

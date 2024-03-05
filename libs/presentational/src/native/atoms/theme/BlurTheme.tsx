import { colors } from '@present-native/styles';
import { Dimensions, TouchableWithoutFeedback, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const BlurTheme = () => {
  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          width: width,
          height: height,
          backgroundColor: colors.black,
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0.6,
          zIndex: 40,
        }}
      />
    </TouchableWithoutFeedback>
  );
};

export { BlurTheme };

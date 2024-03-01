import { colors } from '@present-native/styles';
import {
  Dimensions,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

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
        }}
      />
    </TouchableWithoutFeedback>
  );
};

export { BlurTheme };

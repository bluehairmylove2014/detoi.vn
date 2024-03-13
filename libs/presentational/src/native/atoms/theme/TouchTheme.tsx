import { colors } from '@present-native/styles';
import { Dimensions, Pressable, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const TouchTheme = ({ onPress }: { onPress: () => void }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: width,
        height: height,
        backgroundColor: colors.transparent,
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
  );
};

export { TouchTheme };

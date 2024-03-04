import { colors } from '@present-native/styles';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

export const TransparentView = ({
  theme,
}: {
  theme: 'horizontal' | 'vertical';
}) => {
  return <View style={transparentViewThemeMapper[theme]} />;
};

const transparentViewThemeMapper = StyleSheet.create({
  horizontal: {
    height: '100%',
    width: 50,
    backgroundColor: colors.transparent,
  },
  vertical: {
    width: '100%',
    height: 50,
    backgroundColor: colors.transparent,
  },
});

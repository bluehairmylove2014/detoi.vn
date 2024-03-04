import { colors, screenHorizontalPadding } from '@presentational/native/styles';
import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@constants/dimension';

const provideDetailStyle = StyleSheet.create({
  container: {
    width: windowWidth,
    minHeight: windowHeight,
    height: 'auto',
    backgroundColor: colors.softBg,
    paddingHorizontal: screenHorizontalPadding,
  },
  serviceList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
});

export { provideDetailStyle };

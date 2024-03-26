import { COLOR_PALETTE, screenVerticalPadding } from '@present-native/styles';
import { StyleSheet } from 'react-native';

const introScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_PALETTE.soft,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: screenVerticalPadding,
  },
  body: {},
  foot: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});

const footIntroScreenStyles = StyleSheet.create({
  dotPagerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    width: 100,
  },
});
const bodyIntroScreenStyles = StyleSheet.create({
  bodyWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    height: 'auto',
    marginVertical: 5,
  },
  title: {},
  description: {},
});

export { introScreenStyles, footIntroScreenStyles, bodyIntroScreenStyles };

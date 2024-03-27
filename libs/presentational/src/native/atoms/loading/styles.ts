import { windowHeight, windowWidth } from '@constants/dimension';
import { COLOR_PALETTE } from '@present-native/styles';
import { StyleSheet } from 'react-native';

export const infiniteProgressBarStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    gap: 15,
  },
  barWrapper: {
    width: 200,
  },
});

export const introStyles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: COLOR_PALETTE.secondary,
  },
  introView: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: '50%',
    aspectRatio: 1,
    height: 'auto',
  },
  text: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
  },
});

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

import { StyleSheet } from 'react-native';
import { COLOR_PALETTE } from '@styles/color';

const ProgressBarStyle = StyleSheet.create({
  progressBar: {
    height: 35,
    flexDirection: 'row',
    width: '100%',
    borderColor: COLOR_PALETTE.primary,
    borderWidth: 1,
    borderRadius: 999,
    overflow: 'hidden',
    alignItems: 'center',
  },
});

export { ProgressBarStyle };

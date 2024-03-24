import { COLOR_PALETTE } from '@present-native/styles';
import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@constants/dimension';

const TestResultStyle = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    padding: 20,
    backgroundColor: COLOR_PALETTE.soft,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconContainer: {
    borderWidth: 2,
    borderRadius: 99,
    width: 40,
    height: 40,
    borderColor: COLOR_PALETTE.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  flexRowCenterItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { TestResultStyle };

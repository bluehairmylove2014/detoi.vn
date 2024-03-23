import { COLOR_PALETTE } from '@presentational/native/styles';
import { StyleSheet } from 'react-native';
import { windowWidth } from '@constants/dimension';

const provideDateStyle = StyleSheet.create({
  container: {
    width: windowWidth,
    minHeight: '100%',
    height: 'auto',
    padding: 20,
  },
  labelTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateContainer: {
    width: 50,
    paddingVertical: 14,
    borderColor: COLOR_PALETTE.rose,
    borderWidth: 0.5,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 12,
  },

  inputContainer: {
    borderColor: COLOR_PALETTE.rose,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  buttonContainer: {
    paddingHorizontal: 90,
  },
});

export { provideDateStyle };

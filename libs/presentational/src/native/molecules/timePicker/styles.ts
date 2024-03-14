import { StyleSheet } from 'react-native';
import { COLOR_PALETTE } from '@styles/color';

export const TimePickerStyle = StyleSheet.create({
  chooseTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: COLOR_PALETTE.rose,
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 8,
  },

  chooseTimeLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  chooseTimeButton: {
    width: 150,
    backgroundColor: COLOR_PALETTE.zinc,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 5,
  },

  modalContainer: {
    position: 'absolute',
    height: '45%',
    width: '100%',
    backgroundColor: COLOR_PALETTE.white,
    bottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  backgroundModal: {
    width: '100%',
    height: 'auto',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  topModalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR_PALETTE.secondary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

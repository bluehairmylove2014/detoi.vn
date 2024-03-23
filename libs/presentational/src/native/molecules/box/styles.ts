import { StyleSheet } from 'react-native';
import { COLOR_PALETTE } from '@styles/color';

export const messageBoxStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    width: '80%',
    backgroundColor: COLOR_PALETTE.white,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

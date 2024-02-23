import { StyleSheet } from 'react-native';
import { colors } from './color';

export const countryCodeSelectStyle = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: colors.zinc,
  },

  optionImg: {
    width: 30,
    height: 25,
    marginRight: 10,
  },

  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 30,
  },

  backgroundModal: {
    backgroundColor: colors.white,
    width: '100%',
    height: 'auto',
    marginTop: 100,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  topModalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },

  flagIcon: {
    width: 30,
    height: 25,
  },

  selectFlagContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.zinc,
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});

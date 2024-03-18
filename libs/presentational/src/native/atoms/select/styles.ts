import { StyleSheet } from 'react-native';
import { COLOR_PALETTE } from '@styles/color';

export const countryCodeSelectStyle = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: COLOR_PALETTE.zinc,
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
    marginTop: 100,
  },

  backgroundModal: {
    backgroundColor: COLOR_PALETTE.white,
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
    backgroundColor: COLOR_PALETTE.zinc,
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});

export const serviceRquirementSelectStyle = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: COLOR_PALETTE.zinc,
  },
});

export const serviceRequirementsSelectStyle = StyleSheet.create({
  container: {
    height: 'auto',
    alignSelf: 'stretch',
  },

  labelContainer: {
    alignSelf: 'stretch',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  dropdownContainer: {
    width: '100%',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'flex-start',
  },

  modalContainer: {
    position: 'absolute',
    height: '50%',
    width: '100%',
    backgroundColor: COLOR_PALETTE.white,
    bottom: 0,
  },

  backgroundModal: {
    backgroundColor: COLOR_PALETTE.white,
    width: '100%',
    height: 'auto',
  },

  topModalContainer: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR_PALETTE.secondary,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },

  optionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomColor: COLOR_PALETTE.zinc,
    borderBottomWidth: 1,
  },
});

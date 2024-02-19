import { StyleSheet } from 'react-native';
import { colors } from './color';

const commonButtonStyles = StyleSheet.create({
  button_icon_whitePrimary: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 8,
    backgroundColor: colors.white,
    shadowColor: colors.zinc,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
const asyncButtonStyles = StyleSheet.create({});

export { commonButtonStyles, asyncButtonStyles };

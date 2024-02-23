import { colors } from '@present-native/styles';
import { StyleSheet } from 'react-native';

export const otpVertificationScreenStyle = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%',
    height: 'auto',
    padding: 20,
  },

  inputContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1.5,
    paddingBottom: 5,
  },

  input: {
    flex: 1,
    width: '100%',
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
    alignSelf: 'stretch',
    paddingVertical: 7,
  },

  countTime: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
  },
});

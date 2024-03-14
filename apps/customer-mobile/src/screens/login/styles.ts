import { StyleSheet } from 'react-native';
import { COLOR_PALETTE } from '@presentational/native/styles';

export const loginScreenStyle = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%',
    height: 'auto',
    padding: 20,
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  input: {
    flex: 1,
    width: '100%',
    fontSize: 14,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 15,
    alignSelf: 'stretch',
    borderBottomColor: COLOR_PALETTE.gray,
    borderBottomWidth: 1.5,
    paddingVertical: 5,
  },
});

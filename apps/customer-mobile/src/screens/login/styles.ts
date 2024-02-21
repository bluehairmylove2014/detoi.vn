import { StyleSheet } from 'react-native';
import { colors } from '@presentational/native/styles';

export const loginScreenStyle = StyleSheet.create({
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

  flagIcon: {
    width: 30,
    height: 25,
  },

  input: {
    flex: 1,
    width: '100%',
    fontSize: 14,
    marginLeft: 15,
    alignSelf: 'stretch',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1.5,
    paddingVertical: 5,
  },

  buttonContinue: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 30,
  },

  buttonProblem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 100,
    marginTop: 30,
    borderWidth: 1,
    fontSize: 13,
    alignSelf: 'flex-start',
  },
});

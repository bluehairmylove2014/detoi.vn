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

  input: {
    flex: 1,
    width: '100%',
    fontSize: 14,
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 15,
    alignSelf: 'stretch',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1.5,
    paddingVertical: 5,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 50,
  },
  modalView: {
    width: '80%',
    backgroundColor: colors.white,
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

  modalBackground: {},
});

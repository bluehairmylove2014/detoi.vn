import { colors } from '@presentational/native/styles';
import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@constants/dimension';

const provideDateStyle = StyleSheet.create({
  container: {
    width: windowWidth,
    minHeight: windowHeight,
    height: 'auto',
    backgroundColor: colors.white,
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
    borderColor: colors.rose,
    borderWidth: 0.5,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 12,
  },

  chooseTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: colors.rose,
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
    backgroundColor: colors.zinc,
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
    backgroundColor: colors.white,
    bottom: 0,
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
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  inputRequirementAddContainer: {},
  inputContainer: {
    borderColor: colors.rose,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  input: {
    height: 150,
    textAlignVertical: 'top',
  },

  buttonContainer: {
    paddingHorizontal: 90,
  },
});

export { provideDateStyle };

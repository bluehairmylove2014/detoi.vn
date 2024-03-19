import { StyleSheet } from 'react-native';
import { COLOR_PALETTE } from '@styles/color';

const ServiceRequirementsInputStyle = StyleSheet.create({
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

  input: {
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
});
const paymentMethodStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 60,
    borderRadius: 5,
    borderColor: COLOR_PALETTE.gray,
    borderWidth: 1,
  },
  logo: {
    objectFit: 'cover',
    height: '100%',
    aspectRatio: 1,
  },
  dot: {
    height: 30,
    aspectRatio: 1,
    borderRadius: 999,
    borderColor: COLOR_PALETTE.gray,
    borderWidth: 1,
  },
});

const textAreaStyles = StyleSheet.create({
  input: {
    height: 150,
    textAlignVertical: 'top',
  },
});

const reviewTextareaStyles = StyleSheet.create({
  input: {
    padding: 15,
    borderColor: COLOR_PALETTE.black,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
  }
});

export { ServiceRequirementsInputStyle, paymentMethodStyles, textAreaStyles, reviewTextareaStyles };

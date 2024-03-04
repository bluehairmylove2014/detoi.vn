import { StyleSheet } from 'react-native';
import { colors } from './color';

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
    borderColor: colors.black,
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
    borderColor: colors.gray,
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
    borderColor: colors.gray,
    borderWidth: 1,
  },
});

export { ServiceRequirementsInputStyle, paymentMethodStyles };

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

export { ServiceRequirementsInputStyle };

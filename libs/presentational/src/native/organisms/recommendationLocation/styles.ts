import { colors } from '@present-native/styles';
import { StyleSheet } from 'react-native';

const recommendationLocationStyle = StyleSheet.create({
  container: {
    width: '100%',
  },
  wrapperItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  wrapperIcon: {
    backgroundColor: colors.secondary,
    padding: 5,
    borderRadius: 99,
  },
  wrapperDisplayName: {
    width: '80%',
  },
});

export { recommendationLocationStyle };

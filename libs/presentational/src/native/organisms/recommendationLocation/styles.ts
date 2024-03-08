import { colors } from '@present-native/styles';
import { StyleSheet } from 'react-native';

const recommendationLocationStyle = StyleSheet.create({
  container: {
    width: '100%',
  },
  wrapperItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    flexShrink: 1,
    paddingRight: 28,
  },
});

export { recommendationLocationStyle };

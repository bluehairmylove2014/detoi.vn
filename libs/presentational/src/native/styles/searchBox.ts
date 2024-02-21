import { StyleSheet, Platform } from 'react-native';
import { colors } from './color';

export const categoryAndServiceSearchBoxStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    height: '100%',
    borderRadius: 8,
    backgroundColor: colors.white,
    shadowColor: colors.zinc,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  placeholder: {
    color: colors.primary,
  },
});

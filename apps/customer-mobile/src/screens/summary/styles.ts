import { screenHorizontalPadding } from '@present-native/styles';
import { StyleSheet } from 'react-native';

export const summaryStyles = StyleSheet.create({
  container: {
    paddingHorizontal: screenHorizontalPadding,
    flex: 1,
  },
  locationTitleContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

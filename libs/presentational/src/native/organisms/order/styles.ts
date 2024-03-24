import { windowWidth } from '@constants/dimension';
import { screenHorizontalPadding } from '@present-native/styles';
import { StyleSheet } from 'react-native';

export const freelancerCardOrderListStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: screenHorizontalPadding,
    paddingHorizontal: screenHorizontalPadding,
  },
});

import { windowHeight, windowWidth } from '@constants/dimension';
import { HEADER_HEIGHT, screenHorizontalPadding } from '@present-native/styles';
import { StyleSheet } from 'react-native';

export const matchingStyles = StyleSheet.create({
  container: {
    width: windowWidth,
    paddingHorizontal: screenHorizontalPadding,
    height: windowHeight - HEADER_HEIGHT - 100,
    flex: 1,
    flexDirection: 'column',
  },
  titleAndSortContainer: {
    flexShrink: 1,
    width: '100%',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  titleContainer: {
    flexGrow: 1,
  },
  sortButtonContainer: {
    flexShrink: 1,
    maxWidth: 150,
  },
  loadingContainer: {
    flexGrow: 1,
  },
  freelancersListContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 20,
  },
});

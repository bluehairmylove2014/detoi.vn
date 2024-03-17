import { windowHeight, windowWidth } from '@constants/dimension';
import { COLOR_PALETTE, screenHorizontalPadding } from '@present-native/styles';
import { StyleSheet } from 'react-native';

export const matchingStyles = StyleSheet.create({
  container: {
    width: windowWidth,
    paddingHorizontal: screenHorizontalPadding,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
  subLoadingContainer: {
    width: '100%',
    height: 100,
  },
  freelancersListContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 20,
  },
  filterContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  filterWrapper: {
    width: windowWidth,
    height: windowHeight / 2,
    backgroundColor: COLOR_PALETTE.white,
    padding: 20,
  },
  btnWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
});

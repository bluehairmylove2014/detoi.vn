import { StyleSheet, Platform } from 'react-native';
import { COLOR_PALETTE } from '@styles/color';

export const categoryAndServiceSearchBoxStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    height: '100%',
    borderRadius: 8,
    backgroundColor: COLOR_PALETTE.white,
    shadowColor: COLOR_PALETTE.zinc,
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
    color: COLOR_PALETTE.primary,
  },
});

export const locationSearchBox = StyleSheet.create({
  searchBox: {
    height: 55,
    width: '100%',
    backgroundColor: COLOR_PALETTE.white,
    borderRadius: 5,
    shadowColor: COLOR_PALETTE.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 45,
    position: 'relative',
  },
  searchBoxWrapper: {
    width: '100%',
  },
  searchBoxIcon: {
    position: 'absolute',
    top: 18,
    left: 15,
  },
});

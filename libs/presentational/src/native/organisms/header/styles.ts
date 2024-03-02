import { StyleSheet } from 'react-native';
import {
  colors,
  screenHorizontalPadding,
  screenVerticalPadding,
} from '@present-native/styles';

const headerStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  languageButtonContainer: {
    alignSelf: 'flex-end',
  },
  backButtonContainer: {

    alignSelf: 'flex-start',
  },
});

const languageSelectorStyle = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 30,
    width: 90,
    backgroundColor: colors.white,
    borderRadius: 22,
    paddingHorizontal: 8,
  },
  imageStyle: {
    width: 14,
    height: 14,
    borderRadius: 100,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 10,
  },
  iconStyle: {
    width: 0,
    height: 0,
  },
});

export { headerStyle, languageSelectorStyle };

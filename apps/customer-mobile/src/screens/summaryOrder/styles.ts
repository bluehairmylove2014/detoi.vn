import { colors, screenHorizontalPadding, gapSections } from '@presentational/native/styles';
import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@constants/dimension';

const summaryOrderScreenStyle = StyleSheet.create({
  container: {
    width: windowWidth,
    minHeight: windowHeight,
    height: 'auto',
    backgroundColor: colors.white,
    paddingHorizontal: screenHorizontalPadding,
    marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    gap: gapSections
  },
});

const addressSectionStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.white
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

const inforServiceSectionStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.white
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

const paymentSectionStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.white
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    backgroundColor: colors.white
  },
  option: {
    borderStyle: 'solid',
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
export { summaryOrderScreenStyle, addressSectionStyle, inforServiceSectionStyle, paymentSectionStyle };

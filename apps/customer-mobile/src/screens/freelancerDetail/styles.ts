import { windowHeight, windowWidth } from '@constants/dimension';
import {
  COLOR_PALETTE,
  screenHorizontalPadding,
  screenVerticalPadding,
} from '@present-native/styles';
import { StyleSheet } from 'react-native';

const imageWidth = windowWidth / 2 - screenHorizontalPadding - 5;

const freelancerDetailScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: windowHeight,
  },
  introSection: {
    backgroundColor: COLOR_PALETTE.lightStone,
  },
  insightSection: {
    backgroundColor: COLOR_PALETTE.charcoal,
    paddingHorizontal: screenHorizontalPadding,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth,
    paddingVertical: screenVerticalPadding,
    gap: 20,
  },
  proofOfWorkSection: {
    backgroundColor: COLOR_PALETTE.lightStone,
    flex: 1,
    paddingHorizontal: screenHorizontalPadding,
    paddingVertical: screenVerticalPadding,
  },
});

const titleStyle = StyleSheet.create({
  underlineTitleStyle: {
    backgroundColor: COLOR_PALETTE.white,
    height: 1.5,
    marginVertical: 5,
  },
});

const insightSectionStyle = StyleSheet.create({
  wrapperInsight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});

const proofOfWorkSectionStyle = StyleSheet.create({
  listImage: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    marginVertical: 5,
  },
});
export {
  freelancerDetailScreenStyle,
  insightSectionStyle,
  titleStyle,
  proofOfWorkSectionStyle,
};

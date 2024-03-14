import { windowHeight, windowWidth } from '@constants/dimension';
import {
  colors,
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
    backgroundColor: colors.lightStone,
  },
  insightSection: {
    backgroundColor: colors.charcoal,
    paddingHorizontal: screenHorizontalPadding,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth,
    paddingVertical: screenVerticalPadding,
    gap: 20,
  },
  proofOfWorkSection: {
    backgroundColor: colors.lightStone,
    flex: 1,
    paddingHorizontal: screenHorizontalPadding,
    paddingVertical: screenVerticalPadding,
  },
});

const titleStyle = StyleSheet.create({
  underlineTitleStyle: {
    backgroundColor: colors.white,
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

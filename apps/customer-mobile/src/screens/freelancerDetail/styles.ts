import { windowHeight, windowWidth } from '@constants/dimension';
import { colors, screenHorizontalPadding, screenVerticalPadding } from '@present-native/styles';
import { StyleSheet } from 'react-native';

const freelancerDetailScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: windowHeight
  },
  introSection: {
    // paddingHorizontal: screenHorizontalPadding,
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'flex-start'
  },
  insightSection: {
    backgroundColor: colors.charcoal,
    paddingHorizontal: screenHorizontalPadding,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth,
    paddingVertical: screenVerticalPadding, 
    gap: 20
  },
  proofOfWorkSection: {
    backgroundColor: colors.lightStone,
    flex: 1,
    paddingHorizontal: screenHorizontalPadding,
    paddingVertical: screenVerticalPadding
  }
});

const insightSectionStyle = StyleSheet.create({
  wrapperInsight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  }
})
export {
  freelancerDetailScreenStyle,
  insightSectionStyle
};

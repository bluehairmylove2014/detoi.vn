import { windowHeight, windowWidth } from '@constants/dimension';
import { StyleSheet } from 'react-native';
import {
  screenHorizontalPadding,
  screenVerticalPadding,
} from '@styles/spacingConvention';
import { COLOR_PALETTE, HEADER_HEIGHT } from '@present-native/styles';

const bannerTopSectionStyle = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: HEADER_HEIGHT,
  },
  containerImage: {
    resizeMode: 'cover',
    height: windowHeight / 2,
    top: undefined,
    paddingHorizontal: screenHorizontalPadding,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  contentContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    paddingHorizontal: screenHorizontalPadding,
  },
  containerInnerConfig: {},
  headerTitleContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
    flexWrap: 'nowrap',
    overflow: 'hidden',
  },
  headerSubtitleContainer: {
    paddingHorizontal: 20,
  },
});

const bannerFreelancerDetailStyle = StyleSheet.create({
  container: {
    position: 'relative',
    width: windowWidth,
    height: 300,
  },
  containerImage: {
    resizeMode: 'cover',
    height: windowHeight / 2,
    top: undefined,
    paddingHorizontal: screenHorizontalPadding,
  },
  image: {
    width: windowWidth,
    height: '100%',
    objectFit: 'cover',
  },
  body: { width: '100%', gap: 2 },
  wrapperTypeFreelancer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: windowWidth,
    gap: 10,
  },
  buttonWrapper: {
    width: (windowWidth - screenHorizontalPadding * 2) / 2,
  },
  contentContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    zIndex: 2,
    gap: 3,
    paddingHorizontal: screenHorizontalPadding,
    paddingVertical: screenVerticalPadding,
    height: '100%',
  },
});

export { bannerTopSectionStyle, bannerFreelancerDetailStyle };

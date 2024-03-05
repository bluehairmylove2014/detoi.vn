import { windowHeight, windowWidth } from '@constants/dimension';
import { StyleSheet } from 'react-native';
import { screenHorizontalPadding } from './spacingConvention';

const bannerTopSectionStyle = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 200,
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
  },
  headerSubtitleContainer: {
    paddingHorizontal: 20,
  },
});

export { bannerTopSectionStyle };

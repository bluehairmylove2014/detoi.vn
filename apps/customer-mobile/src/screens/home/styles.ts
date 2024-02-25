import { colors, screenHorizontalPadding } from '@presentational/native/styles';
import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@constants/dimension';

const homeScreenStyle = StyleSheet.create({
  container: {
    width: windowWidth,
    minHeight: windowHeight,
    height: 'auto',
    backgroundColor: colors.softBg,
  },
});

const topLabelStyle = StyleSheet.create({
  container: {
    width: windowWidth,
    height: '25%',
  },
  event: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: windowWidth,
    height: '75%',
    backgroundColor: colors.soft,
    paddingHorizontal: screenHorizontalPadding,
  },
  event_safeView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  event_content: {
    width: '70%',
  },
  event_spacer: {
    width: '10%',
  },
  event_image: {
    objectFit: 'cover',
    aspectRatio: 1,
    width: '20%',
  },

  interaction: {
    width: '100%',
    height: '25%',
    position: 'relative',
    backgroundColor: colors.rose,
  },
  interaction_background_top: {
    position: 'absolute',
    backgroundColor: colors.soft,
    width: '100%',
    height: '50%',
    top: 0,
    left: 0,
  },
  interaction_background_bottom: {
    position: 'absolute',
    backgroundColor: colors.softBg,
    width: '100%',
    height: '50%',
    bottom: 0,
    left: 0,
  },
  interaction_inner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: screenHorizontalPadding,
    position: 'absolute',
    backgroundColor: colors.transparent,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
});

const serviceSectionStyle = StyleSheet.create({
  container: {
    width: windowWidth,
    paddingHorizontal: screenHorizontalPadding,
  },
  categoriesContainer: {
    width: '100%',
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: 14,
  },
  categories_viewAllBtn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  test: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
    width: '100%',
  },
  card: {
    backgroundColor: '#FFE9AB',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 10,
    borderRadius: 5,
    minWidth: '50%',
  },
  text: {
    // marginRight: 10
  },
});

export { homeScreenStyle, topLabelStyle, serviceSectionStyle };

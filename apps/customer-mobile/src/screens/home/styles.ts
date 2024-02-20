import { colors, screenHorizontalPadding } from '@presentational/native/styles';
import { StyleSheet } from 'react-native';

const homeScreenStyle = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%',
    height: 'auto',
    backgroundColor: colors.softBg,
  },
});

const topLabelStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: '25%',
  },
  event: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
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
    width: '100%',
    paddingHorizontal: screenHorizontalPadding,
  },
  categoriesContainer: {
    width: '100%',
  },
  category: {
    width: 'auto',
  },
  categoryImage: {
    width: '100%',
    objectFit: 'cover',
    aspectRatio: 1,
  },
});

export { homeScreenStyle, topLabelStyle, serviceSectionStyle };

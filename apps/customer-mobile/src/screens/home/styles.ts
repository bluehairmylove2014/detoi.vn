import { colors, screenHorizontalPadding } from '@presentational/native/styles';
import { StyleSheet } from 'react-native';

export const homeScreenStyle = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: '100%',
    height: 'auto',
  },

  topLabel_container: {
    width: '100%',
    height: '25%',
  },
  topLabel_event: {
    width: '100%',
    height: '90%',
    backgroundColor: colors.soft,
    paddingHorizontal: screenHorizontalPadding,
  },
  topLabelEvent_safeView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  topLabelEvent_content: {
    width: '70%',
  },
  topLabelEvent_spacer: {
    width: '10%',
  },
  topLabelEvent_image: {
    objectFit: 'cover',
    aspectRatio: 1,
    width: '20%',
  },

  topLabel_interaction: {},
});

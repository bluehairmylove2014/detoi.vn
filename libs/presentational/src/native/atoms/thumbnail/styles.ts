import { StyleSheet } from 'react-native';

export const ThumbnailSectionStyle = StyleSheet.create({
  fullWidth: {
    flex: 1,
    flexDirection: 'row',
    aspectRatio: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  large: {
    height: 160,
    width: 160,
    borderRadius: 5,
  },
  medium: {
    height: 106,
    width: 106,
    borderRadius: 4,
  },
  small: {
    height: 80,
    width: 80,
    borderRadius: 3,
  },
});

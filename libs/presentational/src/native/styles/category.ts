import { StyleSheet } from 'react-native';
import { screenHorizontalPadding } from './spacingConvention';
import { windowWidth } from '@constants/dimension';

export const categoryThumbnailStyle = StyleSheet.create({
  category: {
    width: (windowWidth - 30 - screenHorizontalPadding * 2) / 3,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  categoryImage: {
    width: '100%',
    objectFit: 'cover',
    aspectRatio: 1,
  },
  categoryOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '60%',
    zIndex: 10,
  },
  categoryName: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '40%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
  },
});

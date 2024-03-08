import { windowWidth } from '@constants/dimension';
import { StyleSheet } from 'react-native';
import { screenHorizontalPadding } from './spacingConvention';

export const matchingInfoSectionStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ava_image: {
    width: 35,
    height: 35,
    flex: 2.5,
    display: 'flex',
    justifyContent: 'center',
  },

  service_info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 1.5,
    flex: 9,
  },

  cancel_button: {
    flex: 5,
  },
});

export const freelancerMatchingThumbnailStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        marginTop: 30,
    },
    thumbnail: {
        width: (windowWidth - 20 - screenHorizontalPadding * 2) / 2,
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',
    },
    freelancerImage: {
        width: '100%',
        objectFit: 'cover',
        aspectRatio: 1,
    },
    freelancerOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '60%',
        zIndex: 10,
    },
    freelancerInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '40%',
        flex: 1,
        zIndex: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',

        paddingHorizontal: 10,
        marginBottom: 5
    },
    freelancerInfo: {
        backgroundColor: '#155e75',
    }
})

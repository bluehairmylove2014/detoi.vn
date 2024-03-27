
import { screenHorizontalPadding, screenVerticalPadding } from '@present-native/styles';
import { StyleSheet } from 'react-native';

const auctioningOrdersScreenStyle = StyleSheet.create({
    safeAreaContainer: {
        paddingHorizontal: screenHorizontalPadding,
        paddingVertical: screenVerticalPadding,
    },
    cardWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
    }
});

export { auctioningOrdersScreenStyle };

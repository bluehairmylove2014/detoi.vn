
import { screenHorizontalPadding, screenVerticalPadding } from '@present-native/styles';
import { StyleSheet } from 'react-native';

const incomingOrdersScreenStyle = StyleSheet.create({
    container: {
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

export { incomingOrdersScreenStyle };

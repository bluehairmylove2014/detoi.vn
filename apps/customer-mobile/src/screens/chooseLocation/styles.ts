import { windowHeight, windowWidth } from "@constants/dimension";
import { colors, screenHorizontalPadding } from "@present-native/styles";
import { Dimensions, StyleSheet } from 'react-native';
import { screenVerizontalPadding } from "@present-native/styles";

const { width } = Dimensions.get('window');
const chooseLocationScreenStyle = StyleSheet.create({
    container: {
        width: windowWidth,
        minHeight: windowHeight,
        height: 'auto',
        backgroundColor: colors.white,
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 40
    },
    banner: {
        width: width,
        height: 120,
        objectFit: 'cover',
        paddingVertical: screenVerizontalPadding,
        paddingHorizontal: screenHorizontalPadding,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,

    },
    sectionReccommmendation: {
        paddingHorizontal: screenHorizontalPadding,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    searchInput: {
        backgroundColor: colors.white,
        borderRadius: 5,
        height: 40,
        width: '100%',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingHorizontal: 40,
        position: 'relative',
    },
    searchInputWrapper: {
        position: 'absolute', bottom: -20, width: '100%'
    }
});

export { chooseLocationScreenStyle }
import { StyleSheet } from "react-native";
import { colors, screenHorizontalPadding, screenVertizontalPadding } from '@present-native/styles';

const headerStyle = StyleSheet.create({
    container: {
        paddingVertical: screenVertizontalPadding
    },
    languageButtonContainer: {
        alignSelf: 'flex-end'
    }
});

const languageSelectorStyle = StyleSheet.create({
    dropdown: {
        margin: 16,
        height: 30,
        width: 90,
        backgroundColor: colors.white,
        borderRadius: 22,
        paddingHorizontal: 8,
    },
    imageStyle: {
        width: 14,
        height: 14,
        borderRadius: 100,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 10,
    },
    iconStyle: {
        width: 0,
        height: 0,
    },
})

export { headerStyle, languageSelectorStyle };
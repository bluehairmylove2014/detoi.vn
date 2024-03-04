import { StyleSheet } from "react-native";
import { screenHorizontalPadding } from "./spacingConvention";

const overlayStyle = StyleSheet.create({
    overlayBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        paddingHorizontal: screenHorizontalPadding,
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export { overlayStyle }
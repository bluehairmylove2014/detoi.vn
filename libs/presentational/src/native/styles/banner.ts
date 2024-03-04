import { windowHeight, windowWidth } from "@constants/dimension";
import { StyleSheet } from "react-native";
import { screenHorizontalPadding } from "./spacingConvention";

const bannerTopSectionStyle = StyleSheet.create({
    container: {
        width: "100%",
        height: windowHeight / 4,
        paddingHorizontal: screenHorizontalPadding
    },
    containerImage: {
        resizeMode: "cover",
        height: windowHeight / 2,
        top: undefined,
        paddingHorizontal: screenHorizontalPadding
    }
})

export { bannerTopSectionStyle }
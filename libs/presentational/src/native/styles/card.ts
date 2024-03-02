import { StyleSheet } from "react-native";
import { colors } from "./color";

export const ServiceCardSectionStyle = StyleSheet.create({
    card: {
        backgroundColor: colors.soft,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        gap: 7,
        borderRadius: 5,
        minWidth: '45%'
    },

    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        marginLeft: 5
    }
})
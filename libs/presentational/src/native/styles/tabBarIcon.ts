import { StyleSheet } from "react-native";
import { colors } from "./color";

export const BarIconSectionStyle = StyleSheet.create({
    active_icon_container: {
        borderWidth: 1.5,
        borderRadius: 999,
        borderColor: '#C89300',
        padding: 18,
        backgroundColor: colors.white,
        marginBottom: 25,
    },

    inactive_icon_container: {
        alignItems: 'center', 
        gap: 3
    },

    label: {
        color: '#595753', 
        fontSize: 11
    },

    new_notif: {
        position: 'absolute',
        right: '12.5%',
        backgroundColor: colors.rose,
        minWidth: 5,
        minHeight: 5,
        borderRadius: 999,
    }

})
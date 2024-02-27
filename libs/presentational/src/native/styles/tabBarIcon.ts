import { StyleSheet } from "react-native";

export const BarIconSectionStyle = StyleSheet.create({
    active_icon_container: {
        borderWidth: 1.5,
        borderRadius: 999,
        borderColor: '#C89300',
        padding: 18,
        backgroundColor: '#FFFFFF',
        marginBottom: 25,
    },

    inactive_icon_container: {
        alignItems: 'center', 
        gap: 3
    },

    label: {
        color: '#595753', 
        fontSize: 11
    }


})
import { StyleSheet } from "react-native";

export const endowSectionStyle = StyleSheet.create({

    item: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '90%',
        padding: 7,
        borderWidth: 1,
        borderColor: '#CBCBCB',
        borderRadius: 5,
        alignItems: 'center',
        gap: 10,
    },

    endow_image: {
        width: 65, 
        height: 70
    },

    content: {
        maxWidth: 220
    }
})
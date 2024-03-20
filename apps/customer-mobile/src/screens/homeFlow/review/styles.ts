import { screenHorizontalPadding, screenVerticalPadding } from '@present-native/styles';
import { StyleSheet } from 'react-native';

export const reviewScreenStyle = StyleSheet.create({
    container: {
        paddingHorizontal: screenHorizontalPadding,
        paddingVertical: screenVerticalPadding,
        flex:1,
        display:'flex',
        flexDirection:'column'
    },
    head: {
        flex: 1
    },
    body: {
        flex: 5
    },
    foot: {
        flex: 1,
        width:"100%",
    },
});

export const buttonFootSection = StyleSheet.create({
    container:{
        paddingHorizontal: '20%',
    }
})

export const ratingSection =StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    startWrapper:{
        display: 'flex',
        flexDirection: 'row', 
        justifyContent:'center',
        gap:5
    }
});
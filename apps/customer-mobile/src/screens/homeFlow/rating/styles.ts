import { screenHorizontalPadding, screenVerticalPadding } from '@present-native/styles';
import { StyleSheet } from 'react-native';

export const ratingScreenStyle = StyleSheet.create({
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

export const totalPriceSection = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection:'column',
    },
    keyValueContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export const buttonFootSection = StyleSheet.create({
    container:{
        paddingHorizontal: '20%',
 
  
    }
})

export const ratingSection = StyleSheet.create({
    container:{

    },
    startWrapper:{
        display: 'flex',
        flexDirection: 'row', 
        justifyContent:'center',
        gap:10
    }
})

export const avatarSection = StyleSheet.create({
    container: {
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarWrapper: {
        width: 120,
    }
})
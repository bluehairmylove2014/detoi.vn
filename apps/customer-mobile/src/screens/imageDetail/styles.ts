import { colors, screenHorizontalPadding, screenVerticalPadding } from '@presentational/native/styles';
import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '@constants/dimension';

const iamgeDetailScreenStyle = StyleSheet.create({
    imageSection: {
        width: windowWidth,
        height: windowHeight - windowHeight / 3,
        paddingHorizontal: screenHorizontalPadding,
        paddingVertical: screenVerticalPadding,
    },
    descriptionSection: { height: windowHeight / 3, backgroundColor: colors.black }
});


export {
    iamgeDetailScreenStyle,
};

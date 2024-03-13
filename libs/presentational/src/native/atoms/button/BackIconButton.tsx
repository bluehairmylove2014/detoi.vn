import { TouchableHighlight, View, Text, TouchableOpacity } from 'react-native';
import { FAIcon } from '../icon';
import { colors, backButtonStyles } from '@presentational/native/styles';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

type iconBackButtonProps = {
  iconSize?: number;
  theme?: 'none' | 'background'
};
const listThemes = {
  none: {},
  background: backButtonStyles.background
}
const DEFAULT_ICON_SIZE = 16;

export const BackButton = React.memo(
  ({ iconSize = DEFAULT_ICON_SIZE, theme = 'none' }: iconBackButtonProps) => {
    const navigation = useNavigation();
    const handleBackClick = () => {
      navigation.goBack();
    };
    return (
      <TouchableOpacity onPress={handleBackClick} style={listThemes[theme]}>
        <FAIcon
          iconName="faArrowLeftLong"
          size={iconSize}
          color={colors.white}
        />
      </TouchableOpacity>
    );
  }
);

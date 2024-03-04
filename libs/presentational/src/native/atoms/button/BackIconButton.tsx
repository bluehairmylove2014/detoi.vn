import { TouchableHighlight, View, Text, TouchableOpacity } from 'react-native';
import { FAIcon } from '../icon';
import { colors, commonButtonStyles } from '@presentational/native/styles';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

type iconBackButtonProps = {
  iconSize?: number;
};

const DEFAULT_ICON_SIZE = 22;

export const BackButton = React.memo(
  ({ iconSize = DEFAULT_ICON_SIZE }: iconBackButtonProps) => {
    const navigation = useNavigation();
    const handleBackClick = () => {
      navigation.goBack();
    };
    return (
      <TouchableOpacity onPress={handleBackClick}>
        <FAIcon
          iconName="faArrowLeftLong"
          size={iconSize}
          color={colors.white}
        />
      </TouchableOpacity>
    );
  }
);

import { TouchableOpacity } from 'react-native';
import { FAIcon } from '../../icon';
import { btnChildColor } from '@presentational/native/styles';
import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';

type iconBackButtonProps = {
  iconSize?: number;
  theme?: 'none' | 'background';
  color?: keyof typeof btnChildColor;
};

const DEFAULT_ICON_SIZE = 16;

export const BackButton = React.memo(
  ({
    iconSize = DEFAULT_ICON_SIZE,
    theme = 'none',
    color = 'white',
  }: iconBackButtonProps) => {
    const navigation = useNavigation();
    const handleBackClick = () => {
      navigation.goBack();
    };

    const listThemes = useMemo(
      () => ({
        none: {},
        background: {
          backgroundColor: 'rgba(0,0,0,0.8)',
          borderRadius: 99,
          width: iconSize + 14,
          padding: 7,
        },
      }),
      []
    );

    return (
      <TouchableOpacity onPress={handleBackClick} style={listThemes[theme]}>
        <FAIcon
          iconName="faArrowLeftLong"
          size={iconSize}
          color={btnChildColor[color]}
        />
      </TouchableOpacity>
    );
  }
);

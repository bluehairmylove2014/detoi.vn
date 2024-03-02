import { View, Text, TouchableOpacity } from 'react-native';
import { colors, commonButtonStyles } from '@presentational/native/styles';
import React from 'react';
import { BlackParagraph } from '../text';

const themeList = {
  'square-rounded-bold': { borderRadius: 5 },
  'full-rounded-bold': { borderRadius: 999 },
};

type iconButtonProps = {
  icon: React.ReactNode;
  title: string;
  theme: 'square-rounded-bold' | 'full-rounded-bold';
  actionClick: (...args: any[]) => void;
  orientation: 'left' | 'right';
};

const MethodLoginButton = ({
  title,
  icon,
  theme,
  actionClick,
  orientation,
}: iconButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        actionClick();
      }}
      style={[commonButtonStyles.iconTextButton, themeList[theme]]}
    >
      {orientation === 'left' ? icon : <></>}
      <View style={{ flex: 1, alignItems: 'center' }}>
        <BlackParagraph theme="smallMedium">{title}</BlackParagraph>
      </View>
      {orientation === 'right' ? icon : <></>}
    </TouchableOpacity>
  );
};

export { MethodLoginButton };

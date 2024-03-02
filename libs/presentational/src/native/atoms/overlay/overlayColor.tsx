import { View } from 'react-native';
import React from 'react';
import { overlayStyle } from '@present-native/styles/overlay';

const themeList = {
  'black-gradient': {
    backgroundColor:
      'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 100%)',
  },
  'black-opacity': {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
};

export const OverlayColor = React.memo(
  ({
    children,
    theme,
  }: {
    children?: React.ReactNode;
    theme: 'black-gradient' | 'black-opacity';
  }) => {
    return (
      <View style={[overlayStyle.overlayBackground, themeList[theme]]}>
        {children}
      </View>
    );
  }
);

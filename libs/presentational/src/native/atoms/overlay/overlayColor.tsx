import { View } from 'react-native';
import React from 'react';
import { overlayStyle } from './styles';
import { LinearGradient } from 'expo-linear-gradient';

const themeList = {
  'black-gradient-bottom-top': [
    'rgba(0,0,0,0)',
    'rgba(0,0,0,0.6)',
    'rgba(0,0,0,1)',
  ],
  'black-gradient-top-bottom': [
    'rgba(0,0,0,1)',
    'rgba(0,0,0,0.6)',
    'rgba(0,0,0,0)',
  ],
  'black-opacity': ['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)'],
};

export const OverlayColor = React.memo(
  ({
    children,
    theme = 'black-opacity',
  }: {
    children?: React.ReactNode;
    theme: keyof typeof themeList;
  }) => {
    return (
      <LinearGradient
        colors={themeList[theme]}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 10,
        }}
      >
        {children}
      </LinearGradient>
    );
  }
);

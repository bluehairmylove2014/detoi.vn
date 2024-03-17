import { View } from 'react-native';
import React from 'react';
import ProgressBar from 'react-native-animated-progress';
import { Paragraph } from '../text';
import { COLOR_PALETTE, textColors } from '@present-native/styles';
import { infiniteProgressBarStyles } from './styles';

type infiniteProgressBarType = {
  label?: string;
  subLabel?: string;
  color: keyof typeof textColors;
};
export const InfiniteProgressBar: React.FC<infiniteProgressBarType> = ({
  label,
  subLabel,
  color,
}) => {
  return (
    <View style={infiniteProgressBarStyles.container}>
      {label ? (
        <Paragraph theme="baseBold" color={color} align="center">
          {label}
        </Paragraph>
      ) : (
        <></>
      )}
      <View style={infiniteProgressBarStyles.barWrapper}>
        <ProgressBar
          height={5}
          animated={true}
          indeterminateDuration={1500}
          indeterminate
          backgroundColor={textColors[color]}
        />
      </View>
      {subLabel ? (
        <Paragraph theme="smallRegular" color={color} align="center">
          {subLabel}
        </Paragraph>
      ) : (
        <></>
      )}
    </View>
  );
};

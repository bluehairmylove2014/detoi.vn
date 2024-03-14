import React from 'react';
import { View } from 'react-native';
import { commonDividerStyles, colorDivider } from './styles';

const directionList = {
  horizontal: commonDividerStyles.horizontalDivider,
  verizontal: commonDividerStyles.verticalDivider,
};

type DividerProps = {
  direction: 'horizontal' | 'verizontal';
};

export const BlackDivider = React.memo(({ direction }: DividerProps) => {
  return <View style={[colorDivider.black, directionList[direction]]} />;
});

export const GrayDivider = React.memo(({ direction }: DividerProps) => {
  return <View style={[colorDivider.gray, directionList[direction]]} />;
});

export const PrimaryDivider = React.memo(({ direction }: DividerProps) => {
  return <View style={[colorDivider.primary, directionList[direction]]} />;
});

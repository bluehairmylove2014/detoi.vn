import { View } from 'react-native';
import React from 'react';
import { headerWithTitleStyles } from './styles';
import {
  BackButton,
  Title,
} from '@present-native/atoms';

type HeaderWithTitleProps = {
  title: string;
};
export const HeaderWithTitle: React.FC<HeaderWithTitleProps> = ({ title }) => {
  return (
    <View style={headerWithTitleStyles.container}>
      <BackButton color="primary" />
      <Title align="center" theme="baseMedium" color="primary">
        {title}
      </Title>
      <View />
    </View>
  );
};

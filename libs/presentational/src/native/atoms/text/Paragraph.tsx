import { Text } from 'react-native';
import React from 'react';
import { paragraphStyles } from '@presentational/native/styles';

const SmallParagraph = ({ ...props }) => {
  const { children, ...restProps } = props;
  const smallParagraphStyles = { ...paragraphStyles.small, ...restProps };
  return <Text style={smallParagraphStyles}>{children}</Text>;
};

const LightPrimaryParagraph = ({ ...props }) => {
  const { children, ...restProps } = props;
  const lightPrimaryStyles = { ...paragraphStyles.lightPrimary, ...restProps };
  return <Text style={lightPrimaryStyles}>{children}</Text>;
};

export { SmallParagraph, LightPrimaryParagraph };

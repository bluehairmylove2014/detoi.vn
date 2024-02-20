import { Text } from 'react-native';
import React from 'react';
import { paragraphStyles } from '@presentational/native/styles';

const SmallParagraph = ({ children }: { children: React.ReactNode }) => (
  <Text style={paragraphStyles.small}>{children}</Text>
);

const LightPrimaryParagraph = ({ children }: { children: React.ReactNode }) => (
  <Text style={paragraphStyles.lightPrimary}>{children}</Text>
);

export { SmallParagraph, LightPrimaryParagraph };

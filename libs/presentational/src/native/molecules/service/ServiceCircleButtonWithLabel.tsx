import { StyleSheet, Pressable } from 'react-native';
import { Paragraph } from '../../atoms/text';
import { CircleImage } from '@present-native/atoms/image';
import { paragraphFontStyles } from '@present-native/atoms/text/styles';
import { useState } from 'react';
import { COLOR_PALETTE } from '@present-native/styles';

export const ServiceCircleButtonWithLabel = ({
  serviceImageUrl,
  serviceName,
  width = 100,
  fontSize = 'baseBold',
  onPress,
  activeServiceName = '',
}: {
  serviceImageUrl: string;
  serviceName: string;
  width?: number;
  fontSize?: keyof typeof paragraphFontStyles;
  onPress?: (serviceName: string) => void;
  activeServiceName?: string;
}) => {
  return (
    <Pressable
      style={[
        { ...styles.button, width },
        activeServiceName === serviceName ? styles.active : {},
      ]}
      onPress={() => onPress && onPress(serviceName)}
    >
      <CircleImage source={{ uri: serviceImageUrl }} />
      <Paragraph theme={fontSize} align="center" lineNumber={2}>
        {serviceName}
      </Paragraph>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderRadius: 5,
  },
  active: {
    backgroundColor: COLOR_PALETTE.secondary,
  },
});

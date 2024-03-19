import { useBlurTheme } from '@business-layer/business-logic/non-service-lib/blurTheme';
import {
  Paragraph,
  PrimaryBtn,
  TouchTheme,
  VerticalSpacer,
} from '@present-native/atoms';
import { messageBoxStyle } from './styles';
import { useEffect, useState } from 'react';
import { Modal, Pressable, View } from 'react-native';
import { baseBoxProps } from './type';
import BaseBox from './BaseBox';

export const YesNoBox = ({
  title,
  message,
  confirmTitle,
  onPressCancel,
  onPressConfirm,
  cancelTitle,
  isActive,
}: baseBoxProps) => {
  return (
    <BaseBox
      title={title}
      message={message}
      confirmTitle={confirmTitle}
      cancelTitle={cancelTitle}
      onPressConfirm={onPressConfirm}
      onPressCancel={onPressCancel}
      isActive={isActive}
    />
  );
};

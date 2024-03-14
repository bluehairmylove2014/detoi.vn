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

export const MessageBox = ({
  message,
  isActive,
  onClose,
}: {
  message?: string;
  isActive: boolean;
  onClose: () => void;
}) => {
  const { setOpenBlurTheme } = useBlurTheme();

  useEffect(() => {
    if (isActive) setOpenBlurTheme(true);
  }, [isActive]);
  return (
    <Modal animationType="slide" transparent={true} visible={isActive}>
      <Pressable style={messageBoxStyle.centeredView}>
        <TouchTheme
          onPress={() => {
            onClose();
            setOpenBlurTheme(false);
          }}
        />
        <View style={messageBoxStyle.modalView}>
          <Paragraph color="black" theme="largeMedium">
            {message}
          </Paragraph>

          <VerticalSpacer size="xl" />
          <PrimaryBtn
            title="ĐÓNG"
            onPress={() => {
              onClose();
              setOpenBlurTheme(false);
            }}
          />
        </View>
      </Pressable>
    </Modal>
  );
};

import { useBlurTheme } from '@business-layer/business-logic/non-service-lib/blurTheme';
import {
  Paragraph,
  PrimaryBtn,
  SecondaryBtn,
  Title,
  TouchTheme,
  VerticalSpacer,
} from '@present-native/atoms';
import { messageBoxStyle } from './styles';
import { useEffect, useState } from 'react';
import { Modal, Pressable, View } from 'react-native';
import { baseBoxProps } from './type';

const BaseBox = ({
  title,
  message,
  isActive,
  confirmTitle,
  cancelTitle,
  onPressConfirm,
  onPressCancel,
}: baseBoxProps) => {
  const { setOpenBlurTheme } = useBlurTheme();

  useEffect(() => {
    if (isActive) setOpenBlurTheme(true);
  }, [isActive]);
  return (
    <Modal animationType="slide" transparent={true} visible={isActive}>
      <Pressable style={messageBoxStyle.centeredView}>
        <TouchTheme
          onPress={() => {
            if (onPressCancel) onPressCancel();
            else onPressConfirm();

            setOpenBlurTheme(false);
          }}
        />
        <View style={messageBoxStyle.modalView}>
          {title ? (
            <Title color="black" theme="baseBold">
              {title}
            </Title>
          ) : (
            <></>
          )}

          <VerticalSpacer size="m" />
          <Paragraph color="black" theme="largeMedium">
            {message}
          </Paragraph>

          <VerticalSpacer size="xl" />
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <PrimaryBtn
                title={confirmTitle}
                onPress={() => {
                  onPressConfirm(), setOpenBlurTheme(false);
                }}
              />
            </View>
            {cancelTitle && onPressCancel ? (
              <View style={{ flex: 1 }}>
                <SecondaryBtn
                  title={cancelTitle}
                  onPress={() => {
                    onPressCancel(), setOpenBlurTheme(false);
                  }}
                />
              </View>
            ) : (
              <></>
            )}
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default BaseBox;

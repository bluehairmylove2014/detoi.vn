import {
  View,
  Modal,
  TouchableWithoutFeedback,
  Pressable,
  Animated,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { windowHeight, windowWidth } from '@constants/dimension';
import { COLOR_PALETTE } from '@present-native/styles';

const TRANSITION_DURATION = 200;

type modalWrapperProps = {
  isActive: boolean;
  onClose: () => void;
  children: React.ReactNode;

  overlayColor?: keyof typeof COLOR_PALETTE;
  overlayOpacity?: number;
  backgroundColor?: keyof typeof COLOR_PALETTE;
};
const ModalWrapper: React.FC<modalWrapperProps> = ({
  isActive,
  onClose,
  children,
  overlayColor = 'transparent',
  overlayOpacity = 0.7,
  backgroundColor = 'white',
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: TRANSITION_DURATION,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: TRANSITION_DURATION,
      useNativeDriver: true,
    }).start();
  };

  const handleClose = () => {
    fadeOut();
    setTimeout(() => {
      onClose && onClose();
    }, TRANSITION_DURATION);
  };

  useEffect(() => {
    if (isActive) {
      fadeIn();
    }
  }, [isActive]);

  return (
    <Modal transparent={true} visible={isActive} onRequestClose={handleClose}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <View
          style={{
            backgroundColor: COLOR_PALETTE[overlayColor],
            opacity: overlayOpacity,
            width: '100%',
            height: '100%',
          }}
        ></View>
      </Animated.View>
      <Pressable
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          position: 'relative',
        }}
        onPress={handleClose}
      >
        <TouchableWithoutFeedback>
          <Animated.View
            style={{
              width: windowWidth,
              height: 'auto',
              backgroundColor: COLOR_PALETTE[backgroundColor],
              padding: 20,
              transform: [
                {
                  translateY: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [200, 0],
                  }),
                },
              ],
              opacity: fadeAnim,
            }}
          >
            {children}
          </Animated.View>
        </TouchableWithoutFeedback>
      </Pressable>
    </Modal>
  );
};

export default ModalWrapper;

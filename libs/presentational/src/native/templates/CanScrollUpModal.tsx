import { Modal, Pressable, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { windowHeight, windowWidth } from '@constants/dimension';
import { COLOR_PALETTE } from '@present-native/styles';

const TRANSITION_DURATION = 200;

type modalWrapperProps = {
  isActive: boolean;
  onClose: () => void;
  defaultShowChildren: React.ReactNode;
  //   needScrollUpToShowChildren?: React.ReactNode;

  overlayColor?: keyof typeof COLOR_PALETTE;
  overlayOpacity?: number;
  backgroundColor?: keyof typeof COLOR_PALETTE;
  headerTitle?: string;
};
const ModalWrapper: React.FC<modalWrapperProps> = ({
  isActive,
  onClose,
  backgroundColor = 'white',
  defaultShowChildren,
  //   needScrollUpToShowChildren,
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
    <Modal transparent={true} visible={true} onRequestClose={handleClose}>
      <Pressable
        style={{
          width: windowWidth,
          height: windowHeight,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Animated.View
          style={[
            {
              width: windowWidth,
              //   backgroundColor: COLOR_PALETTE['softBg'],
              paddingHorizontal: 10,
              opacity: fadeAnim,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              marginBottom: 30,
            },
          ]}
        >
          {defaultShowChildren}
        </Animated.View>
      </Pressable>
    </Modal>
  );
};

export default ModalWrapper;

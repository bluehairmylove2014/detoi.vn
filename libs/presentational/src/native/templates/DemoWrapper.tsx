import React, { useState, useEffect } from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

const PopupWrapper = ({ defaultShowChildren, needScrollUpToShowChildren }) => {
  const [showPopup, setShowPopup] = useState(true);
  const [scrollable, setScrollable] = useState(false);
  const screenHeight = Dimensions.get('window').height;

  useEffect(() => {
    if (showPopup && needScrollUpToShowChildren) {
      setScrollable(true);
    }
  }, [showPopup, needScrollUpToShowChildren]);

  const handleModalClose = () => {
    setShowPopup(false);
  };

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    if (contentOffset.y > screenHeight / 2) {
      setScrollable(false);
    }
  };

  return (
    <View style={styles.container}>
      <Modal visible={showPopup} transparent>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <View style={[styles.popup, scrollable && styles.scrollablePopup]}>
          <View style={styles.content}>
            {defaultShowChildren}
            {needScrollUpToShowChildren && (
              <View style={styles.scrollUpContent}>
                {needScrollUpToShowChildren}
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    width: '100%',
  },
  scrollablePopup: {
    maxHeight: Dimensions.get('window').height,
  },
  content: {
    flex: 1,
  },
  scrollUpContent: {
    marginTop: 20,
  },
});

export default PopupWrapper;

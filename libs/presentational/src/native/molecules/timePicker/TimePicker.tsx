import React, { useEffect, useState } from 'react';
import {
  View,
  Platform,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  FAIcon,
  HorizontalSpacer,
  Paragraph,
  PrimaryButton,
  VerticalSpacer,
} from '@present-native/atoms';
import DateTimePicker from '@react-native-community/datetimepicker';
import { colors } from '@present-native/styles';
import { TimePickerStyle } from '@present-native/styles/timePicker';

const constantTime = () => {
  const defaultTime = new Date();
  defaultTime.setHours(14); // Set hours to 14 (2 PM)
  defaultTime.setMinutes(0); // Set minutes to 0
  return defaultTime;
};

export const TimePicker = ({
  activeBlur,
  setTime,
}: {
  activeBlur: (isActive: boolean) => void;
  setTime: (timeSelected: Date) => void;
}) => {
  const [selectedTime, setSelectedTime] = useState<Date>(constantTime);
  const [timeChange, setTimeChange] = useState<Date>(constantTime);
  const [activeModal, setActiveModal] = useState(false);

  useEffect(() => {
    setTime(selectedTime);
  }, [selectedTime]);

  // Design Modal List To Choose Time
  const modalTimePicker = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={activeModal}
        style={{ height: 50 }}
      >
        <TouchableWithoutFeedback>
          <View style={TimePickerStyle.modalContainer}>
            <View style={TimePickerStyle.backgroundModal}>
              <View style={TimePickerStyle.topModalContainer}>
                <Paragraph theme="baseBold">Chọn thời gian</Paragraph>

                {/* Close Button */}
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-start',
                  }}
                  onPress={() => {
                    setActiveModal(false);
                    activeBlur(false);
                  }}
                >
                  <FAIcon iconName="faTimes" color={colors.black} size={25} />
                </TouchableOpacity>
              </View>

              <VerticalSpacer size="xxxl" />
              <View style={{ marginHorizontal: 30 }}>
                <DateTimePicker
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  mode="time"
                  value={timeChange}
                  textColor={colors.black}
                  minuteInterval={5}
                  onChange={(event, selected) => {
                    if (selected) {
                      setTimeChange(selected);
                    }
                  }}
                />
              </View>

              <VerticalSpacer size="xxl" />
              <View style={{ marginHorizontal: 30 }}>
                <PrimaryButton
                  title="XÁC NHẬN"
                  theme="square-rounded-bold"
                  onPress={() => {
                    setSelectedTime(timeChange);
                    setActiveModal(false);
                    activeBlur(false);
                  }}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };

  return (
    <>
      <View style={TimePickerStyle.chooseTimeContainer}>
        <View style={TimePickerStyle.chooseTimeLabel}>
          <FAIcon iconName="faClock" size={20} color={colors.secondary} />
          <HorizontalSpacer size="m"></HorizontalSpacer>
          <Paragraph theme="baseBold">Chọn giờ làm</Paragraph>
        </View>
        <TouchableOpacity
          style={TimePickerStyle.chooseTimeButton}
          onPress={() => {
            setActiveModal(true);
            activeBlur(true);
          }}
        >
          <Paragraph theme="baseBold">
            {('0' + selectedTime.getHours().toString()).slice(-2)}
          </Paragraph>
          <Paragraph theme="baseMedium">|</Paragraph>
          <Paragraph theme="baseBold">
            {('0' + selectedTime.getMinutes().toString()).slice(-2)}
          </Paragraph>
        </TouchableOpacity>

        {modalTimePicker()}
      </View>
    </>
  );
};

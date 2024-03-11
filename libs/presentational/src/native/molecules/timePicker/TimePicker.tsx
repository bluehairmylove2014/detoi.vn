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
  TouchTheme,
  VerticalSpacer,
} from '@present-native/atoms';
import DateTimePicker from '@react-native-community/datetimepicker';
import { colors } from '@present-native/styles';
import { TimePickerStyle } from '@present-native/styles/timePicker';
import { useBlurTheme } from '@business-layer/business-logic/non-service-lib/blurTheme';

const constantTime = () => {
  const defaultTime = new Date();
  defaultTime.setHours(14); // Set hours to 14 (2 PM)
  defaultTime.setMinutes(0); // Set minutes to 0
  return defaultTime;
};

export const TimePicker = ({
  setTime,
}: {
  setTime: (timeSelected: Date) => void;
}) => {
  const [selectedTime, setSelectedTime] = useState<Date>(constantTime);
  const [timeChange, setTimeChange] = useState<Date>(constantTime);
  const [activeModalIOS, setActiveModalIOS] = useState(false);
  const [activePickTimeAndroid, setActivePickTimeAndroid] = useState(false);
  const { setOpenBlurTheme } = useBlurTheme();

  useEffect(() => {
    setTime(selectedTime);
  }, [selectedTime]);

  // Design Modal Picker Time IOS To Choose Time
  const modalTimePickerIOS = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={activeModalIOS}
        style={{ height: 50 }}
      >
        <TouchTheme
          onPress={() => {
            setOpenBlurTheme(false);
            setActiveModalIOS(false);
            setActivePickTimeAndroid(false);
          }}
        />
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
                  setActiveModalIOS(false);
                  setOpenBlurTheme(false);
                }}
              >
                <FAIcon iconName="faTimes" color={colors.black} size={25} />
              </TouchableOpacity>
            </View>

            <VerticalSpacer size="xxxl" />
            <View style={{ marginHorizontal: 30 }}>
              <DateTimePicker
                display="spinner"
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
                  setActiveModalIOS(false);
                  setOpenBlurTheme(false);
                }}
              />
            </View>
          </View>
        </View>
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
            if (Platform.OS === 'ios') {
              setActiveModalIOS(true);
              setOpenBlurTheme(true);
            } else {
              setActivePickTimeAndroid(true);
              setOpenBlurTheme(true);
            }
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

        {activePickTimeAndroid ? (
          <DateTimePicker
            display="spinner"
            mode="time"
            value={selectedTime}
            is24Hour={true}
            textColor={colors.black}
            minuteInterval={5}
            onChange={(event, selected) => {
              if (selected) {
                setSelectedTime(selected);
              }
              setActivePickTimeAndroid(false);
              setOpenBlurTheme(false);
            }}
            positiveButton={{ label: 'XÁC NHẬN' }}
            negativeButton={{ label: 'HỦY' }}
          />
        ) : (
          <></>
        )}

        {modalTimePickerIOS()}
      </View>
    </>
  );
};

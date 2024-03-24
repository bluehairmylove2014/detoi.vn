import React, { useEffect, useState } from 'react';
import { View, Platform, TouchableOpacity, Modal } from 'react-native';
import {
  FAIcon,
  HorizontalSpacer,
  Paragraph,
  PrimaryBtn,
  TouchTheme,
  VerticalSpacer,
} from '@present-native/atoms';
import DateTimePicker from '@react-native-community/datetimepicker';
import { COLOR_PALETTE } from '@present-native/styles';
import { TimePickerStyle } from './styles';
import { useBlurTheme } from '@business-layer/business-logic/non-service-lib/blurTheme';
import ModalWrapper from '@present-native/templates/ModalWrapper';

const constantTime = () => {
  const defaultTime = new Date();
  defaultTime.setHours(14); // Set hours to 14 (2 PM)
  defaultTime.setMinutes(0); // Set minutes to 0
  return defaultTime;
};

const currentTime = () => {
  const defaultTime = new Date();
  defaultTime.setHours(new Date().getHours() + 1);
  defaultTime.setMinutes(Math.ceil(new Date().getMinutes() / 5) * 5); // Set minutes to 0
  return defaultTime;
};

export const TimePicker = ({
  dateSelect,
  setTime,
}: {
  dateSelect: Date;
  setTime: (timeSelected: Date) => void;
}) => {
  const [selectedTime, setSelectedTime] = useState<Date>(
    dateSelect.getDate() === new Date().getDate()
      ? currentTime() // Add 1 hour to the current time
      : constantTime()
  );

  const [timeChange, setTimeChange] = useState<Date>(
    dateSelect.getDate() === new Date().getDate()
      ? currentTime() // Add 1 hour to the current time
      : constantTime()
  );

  const [activeModalIOS, setActiveModalIOS] = useState(false);
  const [activePickTimeAndroid, setActivePickTimeAndroid] = useState(false);

  const [miniHourTime, setMiniHourTime] = useState<number>(0);
  const [miniMinuteTime, setMiniMinuteTime] = useState<number>(0);

  useEffect(() => {
    setTime(selectedTime);
  }, [selectedTime]);

  useEffect(() => {
    const currentDate = new Date();
    if (dateSelect.getDate() === currentDate.getDate()) {
      currentDate.setHours(currentDate.getHours() + 1);
      currentDate.setMinutes(Math.ceil(currentDate.getMinutes() / 5) * 5);

      const hourCurrent = currentDate.getHours();
      const minuteCurrent = currentDate.getMinutes();

      setMiniHourTime(hourCurrent);
      setMiniMinuteTime(minuteCurrent);

      if (selectedTime.getHours() < hourCurrent + 1)
        setSelectedTime(currentDate);
    } else {
      setMiniHourTime(0);
      setMiniMinuteTime(0);
    }
  }, [dateSelect]);

  // Design Modal Picker Time IOS To Choose Time
  const modalTimePickerIOS = () => {
    return (
      <ModalWrapper
        isActive={activeModalIOS}
        onClose={() => setActiveModalIOS(false)}
        headerTitle="Chọn thời gian"
      >
        <VerticalSpacer size="xl" />
        <DateTimePicker
          display="spinner"
          mode="time"
          is24Hour={true}
          textColor={COLOR_PALETTE.black}
          minuteInterval={5}
          onChange={(event, selected) => {
            if (selected) {
              setTimeChange(selected);
            }
          }}
          minimumDate={
            dateSelect.getDate() === new Date().getDate()
              ? new Date(
                  dateSelect.getFullYear(),
                  dateSelect.getMonth(),
                  dateSelect.getDate(),
                  miniHourTime,
                  miniMinuteTime,
                  0,
                  0
                )
              : undefined
          }
          value={selectedTime}
        />

        <VerticalSpacer size="xl" />
        <PrimaryBtn
          title="XÁC NHẬN"
          onPress={() => {
            setSelectedTime(timeChange);
            setActiveModalIOS(false);
          }}
        />
      </ModalWrapper>
    );
  };

  return (
    <>
      <View style={TimePickerStyle.chooseTimeContainer}>
        <View style={TimePickerStyle.chooseTimeLabel}>
          <FAIcon
            iconName="faClock"
            size={20}
            color={COLOR_PALETTE.secondary}
          />
          <HorizontalSpacer size="m"></HorizontalSpacer>
          <Paragraph theme="baseBold">Chọn giờ làm</Paragraph>
        </View>
        <TouchableOpacity
          style={TimePickerStyle.chooseTimeButton}
          onPress={() => {
            if (Platform.OS === 'ios') {
              setActiveModalIOS(true);
              setActivePickTimeAndroid(false);
            } else {
              setActivePickTimeAndroid(true);
              setActiveModalIOS(false);
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
            textColor={COLOR_PALETTE.black}
            minuteInterval={5}
            onChange={(event, selected) => {
              if (selected) {
                setSelectedTime(selected);
              }
              setActivePickTimeAndroid(false);
            }}
            minimumDate={
              dateSelect.getDate() === new Date().getDate()
                ? new Date(
                    dateSelect.getFullYear(),
                    dateSelect.getMonth(),
                    dateSelect.getDate(),
                    miniHourTime,
                    miniMinuteTime,
                    0,
                    0
                  )
                : undefined
            }
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

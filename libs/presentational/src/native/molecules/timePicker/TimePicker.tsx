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

const constantTime = () => {
  const defaultTime = new Date();
  defaultTime.setHours(14); // Set hours to 14 (2 PM)
  defaultTime.setMinutes(0); // Set minutes to 0
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
      ? new Date(new Date().setHours(new Date().getHours() + 1)) // Add 1 hour to the current time
      : constantTime()
  );

  const [timeChange, setTimeChange] = useState<Date>(
    dateSelect.getDate() === new Date().getDate()
      ? new Date(new Date().setHours(new Date().getHours() + 1)) // Add 1 hour to the current time
      : constantTime()
  );

  const [activeModalIOS, setActiveModalIOS] = useState(false);
  const [activePickTimeAndroid, setActivePickTimeAndroid] = useState(false);
  const { setOpenBlurTheme } = useBlurTheme();

  const [miniHourTime, setMiniHourTime] = useState<number>(0);
  const [miniMinuteTime, setMiniMinuteTime] = useState<number>(0);

  useEffect(() => {
    setTime(selectedTime);
  }, [selectedTime]);

  useEffect(() => {
    const currentDate = new Date();
    if (dateSelect.getDate() === currentDate.getDate()) {
      setMiniHourTime(currentDate.getHours());
      setMiniMinuteTime(currentDate.getMinutes());
    } else {
      setMiniHourTime(0);
      setMiniMinuteTime(0);
    }
  }, []);

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
                <FAIcon
                  iconName="faTimes"
                  color={COLOR_PALETTE.black}
                  size={25}
                />
              </TouchableOpacity>
            </View>

            <VerticalSpacer size="xxl" />
            <View style={{ marginHorizontal: 30 }}>
              <DateTimePicker
                display="spinner"
                mode="time"
                value={timeChange}
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
                        dateSelect.setHours(
                          miniHourTime + 1,
                          Math.ceil(miniMinuteTime / 5) * 5,
                          0,
                          0
                        )
                      )
                    : new Date(dateSelect.setHours(0, 0, 0, 0))
                }
              />
            </View>

            <VerticalSpacer size="xxl" />
            <View style={{ marginHorizontal: 30 }}>
              <PrimaryBtn
                title="XÁC NHẬN"
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
            textColor={COLOR_PALETTE.black}
            minuteInterval={5}
            onChange={(event, selected) => {
              if (selected) {
                setSelectedTime(selected);
              }
              setActivePickTimeAndroid(false);
              setOpenBlurTheme(false);
            }}
            minimumDate={
              dateSelect.getDate() === new Date().getDate()
                ? new Date(
                    dateSelect.setHours(
                      miniHourTime + 1,
                      Math.ceil(miniMinuteTime / 5) * 5,
                      0,
                      0
                    )
                  )
                : new Date(dateSelect.setHours(0, 0, 0, 0))
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

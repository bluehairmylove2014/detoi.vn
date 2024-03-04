import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { PrimaryButton, VerticalSpacer } from '@present-native/atoms';

const TimePicker = () => {
  const [selectedHour, setSelectedHour] = useState('00');
  const [selectedMinute, setSelectedMinute] = useState('00');

  // Generate hours from 00 to 23
  const hours = Array.from({ length: 24 }, (_, i) => ('0' + i).slice(-2));

  // Generate minutes from 00 to 59
  const minutes = Array.from({ length: 60 }, (_, i) => ('0' + i).slice(-2));

  return (
    <>
      <VerticalSpacer size="xxxl" />
      <View style={styles.container}>
        {/* Hour Picker */}
        <Picker
          style={{ flex: 1, borderRadius: 0 }}
          selectedValue={selectedHour}
          onValueChange={(itemValue, itemIndex) => setSelectedHour(itemValue)}
          itemStyle={styles.item}
        >
          {hours.map((hour, index) => (
            <Picker.Item key={index} label={hour} value={hour} />
          ))}
        </Picker>

        {/* Minute Picker */}
        <Picker
          style={{ flex: 1, borderRadius: 0 }}
          selectedValue={selectedMinute}
          onValueChange={(itemValue, itemIndex) => setSelectedMinute(itemValue)}
          itemStyle={styles.item}
        >
          {minutes.map((minute, index) => (
            <Picker.Item key={index} label={minute} value={minute} />
          ))}
        </Picker>
      </View>

      <VerticalSpacer size="xxl" />
      <View style={{ marginHorizontal: 30 }}>
        <PrimaryButton
          title="XÁC NHẬN"
          theme="square-rounded-bold"
          onPress={() => {}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 0,
  },

  item: {
    padding: 0,
    margin: 0,
  },
});

export default TimePicker;

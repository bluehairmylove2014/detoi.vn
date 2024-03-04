import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BlackParagraph } from '@present-native/atoms';

const TimePicker = () => {
  const [selectedHour, setSelectedHour] = useState('00');
  const [selectedMinute, setSelectedMinute] = useState('00');

  // Generate hours from 00 to 23
  const hours = Array.from({ length: 24 }, (_, i) => ('0' + i).slice(-2));

  // Generate minutes from 00 to 59
  const minutes = Array.from({ length: 12 }, (_, i) => ('0' + i * 5).slice(-2));

  return (
    <View style={{ flexDirection: 'row' }}>
      {/* Hour Picker */}
      <View style={{ flex: 1 }}>
        <Picker
          selectedValue={selectedHour}
          onValueChange={(itemValue, itemIndex) => setSelectedHour(itemValue)}
          itemStyle={{ textAlign: 'right' }}
        >
          {hours.map((hour, index) => (
            <Picker.Item key={index} label={hour} value={hour} />
          ))}
        </Picker>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <BlackParagraph theme="baseMedium">:</BlackParagraph>
      </View>
      {/* Minute Picker */}
      <View style={{ flex: 1 }}>
        <Picker
          selectedValue={selectedMinute}
          onValueChange={(itemValue, itemIndex) => setSelectedMinute(itemValue)}
          itemStyle={{ textAlign: 'left' }}
        >
          {minutes.map((minute, index) => (
            <Picker.Item key={index} label={minute} value={minute} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default TimePicker;

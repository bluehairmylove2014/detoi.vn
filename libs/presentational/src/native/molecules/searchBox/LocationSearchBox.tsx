import React from 'react';
import { TextInput, View } from 'react-native';
import { colors, locationSearchBox } from '@present-native/styles';
import { FAIcon } from '@present-native/atoms';

type locationSearchBoxProps = {
  onChange: (value: string) => void;
};

export const LocationSearchBox = ({ onChange }: locationSearchBoxProps) => {
  return (
    <View style={locationSearchBox.searchBoxWrapper}>
      <TextInput
        style={locationSearchBox.searchBox}
        onChangeText={(value) => onChange(value)}
        placeholder="Địa chỉ nơi làm dịch vụ"
        placeholderTextColor={colors.primary}
        defaultValue=""
      />
      <FAIcon
        iconName="faLocationCrosshairs"
        color={colors.secondary}
        size={18}
        style={locationSearchBox.searchBoxIcon}
      />
    </View>
  );
};

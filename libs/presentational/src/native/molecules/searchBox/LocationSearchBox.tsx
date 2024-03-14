import React from 'react';
import { TextInput, View } from 'react-native';
import { COLOR_PALETTE } from '@styles/color';
import { FAIcon } from '@present-native/atoms';
import { locationSearchBox } from './styles';

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
        placeholderTextColor={COLOR_PALETTE.primary}
        defaultValue=""
      />
      <FAIcon
        iconName="faLocationCrosshairs"
        color={COLOR_PALETTE.secondary}
        size={18}
        style={locationSearchBox.searchBoxIcon}
      />
    </View>
  );
};

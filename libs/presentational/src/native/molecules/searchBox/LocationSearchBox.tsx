import React from 'react';
import { TextInput, View } from 'react-native';
import { colors, locationSearchBox } from '@present-native/styles';
import { FAIcon } from '@present-native/atoms';

type LocationSearchBoxProps = {
  textSearchInputed: string;
  setTextSearchInputed: (text: string) => void;
};

export const LocationSearchBox = React.memo(
  ({ textSearchInputed, setTextSearchInputed }: LocationSearchBoxProps) => {
    return (
      <View style={locationSearchBox.searchBoxWrapper}>
        <TextInput
          style={locationSearchBox.searchBox}
          onChangeText={setTextSearchInputed}
          value={textSearchInputed}
          placeholder="Địa chỉ nơi làm dịch vụ"
          placeholderTextColor={colors.primary}
        />
        <FAIcon
          iconName="faLocationCrosshairs"
          color={colors.secondary}
          size={18}
          style={locationSearchBox.searchBoxIcon}
        />
      </View>
    );
  }
);

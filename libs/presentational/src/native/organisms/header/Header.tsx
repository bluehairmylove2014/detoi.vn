import React, { ReactNode, useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';
import { colors, screenVertizontalPadding } from '@present-native/styles';

export enum EDTypeDisplayHeader {
  BACK_BUTTON = 'back_button',
  LANGUAGE_BUTTON = 'language_button',
}
type TDisplayType =
  | EDTypeDisplayHeader.BACK_BUTTON
  | EDTypeDisplayHeader.LANGUAGE_BUTTON;

type Header = {
  typeDisplay: TDisplayType[];
};
const local_data = [
  {
    value: '1',
    lable: 'Tiếng Việt',
    image: {
      uri: 'https://cdn.countryflags.com/thumbs/vietnam/flag-square-250.png',
    },
  },
  {
    value: '2',
    lable: 'English',
    image: {
      uri: 'https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png',
    },
  },
];

export const Header = ({ typeDisplay }: Header) => {
  const [country, setCountry] = useState('1');
  <View style={{ paddingVertical: screenVertizontalPadding }}>
    {typeDisplay.includes(EDTypeDisplayHeader.LANGUAGE_BUTTON) ? (
      <View style={{ alignSelf: 'flex-end' }}>
        <SelectCountry
          style={styles.dropdown}
          selectedTextStyle={styles.selectedTextStyle}
          placeholderStyle={styles.placeholderStyle}
          iconStyle={styles.iconStyle}
          maxHeight={100}
          value={country}
          data={local_data}
          imageStyle={styles.imageStyle}
          valueField="value"
          labelField="lable"
          imageField="image"
          placeholder="Select country"
          searchPlaceholder="Search..."
          onChange={(e) => {
            setCountry(e.value);
          }}
        />
      </View>
    ) : (
      <></>
    )}
  </View>;
};
const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 30,
    width: 90,
    backgroundColor: colors.white,
    borderRadius: 22,
    paddingHorizontal: 8,
  },
  imageStyle: {
    width: 14,
    height: 14,
    borderRadius: 100,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 10,
  },
  iconStyle: {
    width: 0,
    height: 0,
  },
});



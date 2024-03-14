import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';
import { headerStyle, languageSelectorStyle } from './styles';
import { BackButton } from '@present-native/atoms';

export enum ETypeDisplayHeader {
  BACK_BUTTON,
  BACK_BUTTON_BACKGROUND,
  LANGUAGE_BUTTON,
}
type TDisplayType =
  | ETypeDisplayHeader.BACK_BUTTON
  | ETypeDisplayHeader.BACK_BUTTON_BACKGROUND
  | ETypeDisplayHeader.LANGUAGE_BUTTON;

type HeaderProps = {
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

export const Header: React.FC<HeaderProps> = ({ typeDisplay }) => {
  const [country, setCountry] = useState('1');

  return (
    <View style={headerStyle.container}>
      {typeDisplay.includes(ETypeDisplayHeader.BACK_BUTTON) ? (
        <View style={headerStyle.backButtonContainer}>
          <BackButton />
        </View>
      ) : typeDisplay.includes(ETypeDisplayHeader.BACK_BUTTON_BACKGROUND) ? (
        <View style={headerStyle.backButtonContainer}>
          <BackButton theme='background'/>
        </View>
      ) : (
        <View style={{ flex: 1 }} />
      )}

      {typeDisplay.includes(ETypeDisplayHeader.LANGUAGE_BUTTON) ? (
        <View style={headerStyle.languageButtonContainer}>
          <SelectCountry
            style={languageSelectorStyle.dropdown}
            selectedTextStyle={languageSelectorStyle.selectedTextStyle}
            placeholderStyle={languageSelectorStyle.placeholderStyle}
            iconStyle={languageSelectorStyle.iconStyle}
            maxHeight={100}
            value={country}
            data={local_data}
            imageStyle={languageSelectorStyle.imageStyle}
            valueField="value"
            labelField="lable"
            imageField="image"
            onChange={(e) => {
              setCountry(e.value);
            }}
          />
        </View>
      ) : (
        <View style={{ flex: 1 }} />
      )}
    </View>
  );
};

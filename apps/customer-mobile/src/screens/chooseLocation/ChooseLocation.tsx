import { View, ImageBackground, TextInput } from 'react-native';
import React, { useState } from 'react';
import { ChooseLocationProps } from '../../config';
import { chooseLocationScreenStyle } from './styles';
import { WhiteTitle, SubtitleLink } from '@present-native/atoms';
import { WhiteParagraph } from '@present-native/atoms';
import { colors } from '@present-native/styles';
import { FAIcon } from '@present-native/atoms';
import { ReccomendationLocation } from '@present-native/organisms';

const ChooseLocation: React.FC<ChooseLocationProps> = ({
  route,
  navigation,
}) => {
  const [textSearchInput, setTextSearchInput] = useState('');
  return (
    <View style={chooseLocationScreenStyle.container}>
      <ImageBackground
        source={require('../../../assets/banner.png')}
        style={chooseLocationScreenStyle.banner}
      >
        <WhiteTitle theme='categoryName'>DỊCH VỤ DỌN DẸP</WhiteTitle>
        <WhiteParagraph theme='normalMedium'>
          Hãy điền các thông tin cần thiết bên dưới để tiếp tục
        </WhiteParagraph>
        <View style={chooseLocationScreenStyle.searchInputWrapper}>
          <TextInput
            style={chooseLocationScreenStyle.searchInput}
            onChangeText={setTextSearchInput}
            value={textSearchInput}
            placeholder="Địa chỉ nơi làm dịch vụ"
            keyboardType="numeric"
          />
          <FAIcon
            iconName="faLocationCrosshairs"
            color={colors.secondary}
            size={18}
            style={{ position: 'absolute', top: 10, left: 10 }}
          />
        </View>
      </ImageBackground>
      <View style={chooseLocationScreenStyle.sectionReccommmendation}>
        <ReccomendationLocation />
        <SubtitleLink screenName={'home'}>Chọn từ sổ địa chỉ?</SubtitleLink>
      </View>
    </View>
  );
};

export default ChooseLocation;

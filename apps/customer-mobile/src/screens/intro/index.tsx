import { View } from 'react-native';
import Header from '@present-native/organisms/Header';
import { EDTypeDisplayHeader } from '@present-native/organisms/Header';
import {
  Logo,
  Google,
  Facebook,
  NumberPhone,
} from '@presentational/native/atoms/svg';
import {
  LightPrimaryParagraph,
  PrimaryTitle,
  SmallParagraph,
} from '@present-native/atoms';
import React from 'react';
import Button from '@present-native/atoms/button/Button';
import { introSCreenStyle } from './styles';

const LIST_ITEM_BUTTON_LOGIN = [
  {
    text: 'Tiếp tục với Facebook',
    icon: <Facebook width={30} height={30} />,
    action: () => {},
  },
  {
    text: 'Tiếp tục với Google',
    icon: <Google width={30} height={30} />,
    action: () => {},
  },
  {
    text: 'Tiếp tục với số điện thoại',
    icon: <NumberPhone width={30} height={30} />,
    action: () => {},
  },
];

const IntroPage = () => {
  return (
    <View style={introSCreenStyle.container}>
      <Header typeDisplay={[EDTypeDisplayHeader.LANGUAGE_BUTTON]} />
      <View style={introSCreenStyle.welcomeSection}>
        <Logo width={200} height={150} />
        <PrimaryTitle color="black">Chào mừng đến với Detoi</PrimaryTitle>
        <LightPrimaryParagraph color="black">
          Ứng dụng hỗ trợ mọi dịch vụ bạn cần
        </LightPrimaryParagraph>
      </View>

      <View style={introSCreenStyle.buttonLoginSection}>
        {LIST_ITEM_BUTTON_LOGIN.map((item, index) => (
          <Button
            key={index}
            onPress={item.action}
            variant="fullwidth"
            text={item.text}
            leftIcon={item.icon}
          />
        ))}
      </View>
      <View style={introSCreenStyle.introPolicySection}>
        <SmallParagraph color="black">
          Bằng việc đăng ký hoặc đăng nhập, bạn đã đồng ý với các{' '}
          <SmallParagraph fontWeight="bold">Điều khoản dịch vụ</SmallParagraph>{' '}
          và{' '}
          <SmallParagraph fontWeight="bold">Chính sách bảo mật</SmallParagraph>
        </SmallParagraph>
      </View>
    </View>
  );
};

export default IntroPage;

import { View } from 'react-native';
import { Header, ETypeDisplayHeader } from '@present-native/organisms/header';
import {
  Logo,
  Google,
  Facebook,
  NumberPhone,
} from '@presentational/native/atoms/svg';
import {
  BlackTitle,
  BlackParagraph,
  PrimaryParagraph,
} from '@present-native/atoms';
import React from 'react';
import { MethodLoginButton } from '@present-native/atoms/button';
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
      <Header typeDisplay={[ETypeDisplayHeader.languageButton]} />
      <View style={introSCreenStyle.welcomeSection}>
        <Logo width={150} height={150} />
        <BlackTitle theme="largeBold">Chào mừng đến với Detoi</BlackTitle>
        <BlackParagraph theme="baseMedium">
          Ứng dụng hỗ trợ mọi dịch vụ bạn cần
        </BlackParagraph>
      </View>
      <View style={introSCreenStyle.buttonLoginSection}>
        {LIST_ITEM_BUTTON_LOGIN.map((item, index) => (
          <MethodLoginButton
            theme="full-rounded-bold"
            key={index}
            actionClick={item.action}
            title={item.text}
            orientation="left"
            icon={item.icon}
          />
        ))}
      </View>
      <View style={introSCreenStyle.introPolicySection}>
        <BlackParagraph theme="smallMedium">
          Bằng việc đăng ký hoặc đăng nhập, bạn đã đồng ý với các{' '}
          <PrimaryParagraph theme="smallBold">
            Điều khoản dịch vụ
          </PrimaryParagraph>{' '}
          và{' '}
          <PrimaryParagraph theme="smallBold">
            Chính sách bảo mật
          </PrimaryParagraph>
        </BlackParagraph>
      </View>
    </View>
  );
};

export default IntroPage;

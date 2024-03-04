import { View } from 'react-native';
import { Header, ETypeDisplayHeader } from '@present-native/organisms/header';
import {
  Logo,
  Google,
  Facebook,
  NumberPhone,
} from '@presentational/native/atoms/svg';
import { Title, Paragraph } from '@present-native/atoms';
import React from 'react';
import { MethodLoginButton } from '@present-native/atoms/button';
import { introSCreenStyle } from './styles';
import { IntroProps } from '../../config';

const IntroPage: React.FC<IntroProps> = ({ route, navigation }) => {
  const LIST_ITEM_BUTTON_LOGIN = [
    {
      text: 'Tiếp tục với Facebook',
      icon: <Facebook width={30} height={30} />,
      action: () => {
        // TODO
      },
    },
    {
      text: 'Tiếp tục với Google',
      icon: <Google width={30} height={30} />,
      action: () => {
        // TODO
      },
    },
    {
      text: 'Tiếp tục với số điện thoại',
      icon: <NumberPhone width={30} height={30} />,
      action: () => {
        navigation.navigate('Login');
      },
    },
  ];
  return (
    <View style={introSCreenStyle.container}>
      <Header typeDisplay={[ETypeDisplayHeader.LANGUAGE_BUTTON]} />
      <View style={introSCreenStyle.welcomeSection}>
        <Logo width={150} height={150} />
        <Title theme="largeBold" color="black">
          Chào mừng đến với Detoi
        </Title>
        <Paragraph theme="baseMedium">
          Ứng dụng hỗ trợ mọi dịch vụ bạn cần
        </Paragraph>
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
        <Paragraph theme="smallMedium">
          Bằng việc đăng ký hoặc đăng nhập, bạn đã đồng ý với các{' '}
          <Paragraph theme="smallBold" color="primary">
            Điều khoản dịch vụ
          </Paragraph>{' '}
          và{' '}
          <Paragraph theme="smallBold" color="primary">
            Chính sách bảo mật
          </Paragraph>
        </Paragraph>
      </View>
    </View>
  );
};

export default IntroPage;

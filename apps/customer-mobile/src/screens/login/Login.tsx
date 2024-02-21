import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';

import { LoginProps } from '../../config';
import { loginScreenStyle } from './styles';
import { colors } from '@presentational/native/styles';
import { CountryCodeSelect } from '@present-native/atoms/select/CountryCodeSelect';
import { BlackParagraph, PrimaryButton } from '@present-native/atoms';
import { ICountryCode } from '@business-layer/services/entities/countryCode';
import { useForm } from 'react-hook-form';

const DEFAULT_COUNTRY_CODE = {
  alpha2Code: 'VN',
  name: 'Vietnam',
  callingCodes: ['+84'],
  flag: 'https://flagsapi.com/VN/flat/64.png',
};

type phoneInputFormType = {
  phone: string;
};

const Login: React.FC<LoginProps> = ({ route, navigation }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [countryCode, setCountryCode] =
    useState<ICountryCode>(DEFAULT_COUNTRY_CODE);
  const { handleSubmit, setValue } = useForm<phoneInputFormType>({
    defaultValues: {
      phone: '',
    },
  });

  // methods
  const onSuccessSubmitPhoneNumber = ({ phone }: phoneInputFormType) => {
    console.log(phone);
    navigation.navigate('OTPVertification');
  };

  return (
    <SafeAreaView>
      <StatusBar hidden />
      <View style={loginScreenStyle.container}>
        <View>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
            Chỉ một bước nữa thôi!
          </Text>
          <View style={{ marginTop: 5 }}>
            <BlackParagraph theme="normalPrimary">
              Nhập số điện thoại để đăng nhập
            </BlackParagraph>
          </View>
          <View style={{ marginTop: 30, flexDirection: 'row' }}>
            <BlackParagraph theme="normalPrimary">Số điện thoại</BlackParagraph>
            <BlackParagraph theme="normalPrimary"> *</BlackParagraph>
          </View>
        </View>

        <View style={loginScreenStyle.inputContainer}>
          <CountryCodeSelect
            onSelect={(value) => setCountryCode(value)}
            defaultValue={DEFAULT_COUNTRY_CODE}
          />
          <TextInput
            style={loginScreenStyle.input}
            placeholder="Nhập số điện thoại của bạn"
            placeholderTextColor={colors.gray}
            selectionColor={colors.black}
            keyboardType="numeric"
            onChangeText={(value) => setValue('phone', value)}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <PrimaryButton
            onPress={handleSubmit(onSuccessSubmitPhoneNumber)}
            theme="full-rounded-bold"
            title="Tiếp tục"
          />
        </View>

        <View>
          <Text style={{ fontSize: 14, marginTop: 20 }}>
            Tôi đồng ý với các
            <Text style={{ color: colors.primary, fontWeight: 'bold' }}>
              {' '}
              Điều khoản dịch vụ
            </Text>{' '}
            và
            <Text style={{ color: colors.primary, fontWeight: 'bold' }}>
              {' '}
              Chính sách bảo mật
            </Text>{' '}
            của Detoi
          </Text>

          <TouchableOpacity
            onPress={() => {}}
            style={loginScreenStyle.buttonProblem}
          >
            <Text style={{ fontSize: 12, fontWeight: '600' }}>
              Có vấn đề với số điện thoại?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

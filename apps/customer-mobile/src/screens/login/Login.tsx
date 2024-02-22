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
import { Controller, useForm } from 'react-hook-form';
import { useLogin } from '@business-layer/business-logic/lib/auth';
import {
  useYupValidationResolver,
  loginByPhoneNumberSchema,
} from '@utils/validators/yup';

const DEFAULT_COUNTRY_CODE = {
  alpha2Code: 'VN',
  name: 'Vietnam',
  callingCodes: ['+84'],
  flag: 'https://flagsapi.com/VN/flat/64.png',
};

function removeLeadingZero(phoneNumber: string): string {
  if (phoneNumber.startsWith('0')) {
    return phoneNumber.slice(1);
  }
  return phoneNumber;
}
type phoneInputFormType = {
  phone: string;
};

const Login: React.FC<LoginProps> = ({ route, navigation }) => {
  const formResolver = useYupValidationResolver(loginByPhoneNumberSchema);
  const [countryCode, setCountryCode] =
    useState<ICountryCode>(DEFAULT_COUNTRY_CODE);
  const { handleSubmit, setValue, control } = useForm<phoneInputFormType>({
    defaultValues: {
      phone: '',
    },
    resolver: formResolver,
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onLogin, isLoading } = useLogin();

  // methods
  const onSuccessSubmitPhoneNumber = ({ phone }: phoneInputFormType) => {
    const phoneNumber = countryCode.callingCodes[0] + removeLeadingZero(phone);
    onLogin({ phone: phoneNumber })
      .then((msg) => {
        navigation.navigate('OTPVertification');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onErrorSubmit = (error: Record<string, any>) => {
    console.log(error);
    // HANDLE INVALID PHONE NUMBER HERE
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
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextInput
                style={loginScreenStyle.input}
                placeholder="Nhập số điện thoại của bạn"
                placeholderTextColor={colors.gray}
                selectionColor={colors.black}
                keyboardType="numeric"
                {...field}
                onChangeText={(value) => {
                  field.onChange(value);
                  setValue('phone', value);
                }}
              />
            )}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <PrimaryButton
            onPress={handleSubmit(onSuccessSubmitPhoneNumber, onErrorSubmit)}
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

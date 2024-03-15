/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

import { LoginProps } from '../../../config';
import { loginScreenStyle } from './styles';
import { COLOR_PALETTE } from '@presentational/native/styles';
import {
  Paragraph,
  Title,
  VerticalSpacer,
  PrimaryBtn,
  OutlineBtn,
  CountryCodeSelect,
} from '@present-native/atoms';
import { ICountryCode } from '@business-layer/services/entities';
import { Controller, useForm } from 'react-hook-form';
import { useLogin } from '@business-layer/business-logic/lib/auth';

import {
  useYupValidationResolver,
  loginByPhoneNumberSchema,
} from '@utils/validators/yup';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { MessageBox } from '@present-native/molecules';

const DEFAULT_COUNTRY_CODE = {
  alpha2Code: 'VN',
  name: 'Vietnam',
  callingCodes: ['+84'],
  flag: 'https://flagsapi.com/VN/flat/64.png',
};

function removeLeadingZeroFromPhoneNumber(phoneNumber: string): string {
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

  const [activeErrorBox, setActiveErrorBox] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
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
    const phoneNumber =
      countryCode.callingCodes[0] + removeLeadingZeroFromPhoneNumber(phone);
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
    const errorMessage = error.phone.message || 'Xảy ra lỗi';
    setErrorMessage(errorMessage);
    setActiveErrorBox(true);
  };

  return (
    <CustomerTemplate>
      <View style={loginScreenStyle.container}>
        <View>
          <Title theme="largeBold" color="black">
            Chỉ một bước nữa thôi!
          </Title>

          <VerticalSpacer size="s" />
          <Paragraph theme="baseMedium">
            Nhập số điện thoại để đăng nhập
          </Paragraph>

          <VerticalSpacer size="xxl" />
          <Paragraph theme="baseMedium">
            Số điện thoại
            <Paragraph theme="baseMedium" color="rose">
              {' '}
              *
            </Paragraph>
          </Paragraph>
        </View>

        <VerticalSpacer size="m" />
        <View style={loginScreenStyle.inputContainer}>
          <CountryCodeSelect
            onSelect={(value) => {
              setCountryCode(value);
            }}
            defaultValue={DEFAULT_COUNTRY_CODE}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextInput
                style={loginScreenStyle.input}
                placeholder="Nhập số điện thoại của bạn"
                placeholderTextColor={COLOR_PALETTE.gray}
                selectionColor={COLOR_PALETTE.black}
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

        <VerticalSpacer size="xl" />
        <PrimaryBtn
          radius="full"
          title="Tiếp tục"
          onPress={handleSubmit(onSuccessSubmitPhoneNumber, onErrorSubmit)}
        />

        <VerticalSpacer size="xl" />
        <Paragraph theme="baseMedium">
          Tôi đồng ý với các
          <Paragraph theme="baseBold" color="primary">
            {' '}
            Điều khoản dịch vụ
          </Paragraph>{' '}
          và
          <Paragraph theme="baseBold" color="primary">
            {' '}
            Chính sách bảo mật
          </Paragraph>{' '}
          của Detoi
        </Paragraph>

        <VerticalSpacer size="xl" />

        <View style={{ width: 230 }}>
          <OutlineBtn
            onPress={() => {}}
            title="Có vấn đề với số điện thoại?"
            radius="full"
            fontSize="small"
          />
        </View>
      </View>

      <MessageBox
        message={errorMessage}
        isActive={activeErrorBox}
        onClose={() => setActiveErrorBox(false)}
      />
    </CustomerTemplate>
  );
};

export default Login;

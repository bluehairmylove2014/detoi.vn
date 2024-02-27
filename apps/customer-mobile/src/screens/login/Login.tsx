import React, { useState } from 'react';
import { View, SafeAreaView, TextInput, StatusBar } from 'react-native';

import { LoginProps } from '../../config';
import { loginScreenStyle } from './styles';
import { colors } from '@presentational/native/styles';
import { CountryCodeSelect } from '@present-native/atoms/select/CountryCodeSelect';
import {
  BlackParagraph,
  BlackTitle,
  BorderButton,
  PrimaryButton,
  PrimaryParagraph,
  RoseParagraph,
  ServiceRequirementsSelect,
} from '@present-native/atoms';
import { ICountryCode } from '@business-layer/services/entities/countryCode';
import { Controller, useForm } from 'react-hook-form';
import { useLogin } from '@business-layer/business-logic/lib/auth';
import {
  useYupValidationResolver,
  loginByPhoneNumberSchema,
} from '@utils/validators/yup';
import { IUIServiceRequirement } from '@business-layer/services/entities';

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

const testDataSelect: IUIServiceRequirement = {
  id: '1',
  type: {
    name: 'select',
    options: [
      {
        id: '0',
        name: 'Dọn trọn gói',
        description: 'Tất cả dịch vụ, dọn toàn bộ nhà / phòng',
      },
      {
        id: '1',
        name: 'Dọn theo phòng',
        description: 'Trung bình 50.000đ / phòng, tiết kiệm và nhanh chóng',
      },
    ],
  },

  label: 'Bạn muốn chúng tôi dọn như thế nào?',
  labelIcon: 'faFlag',
  placeholder: 'Giúp nhân viên biết thêm về công việc cần làm',
  validations: [
    {
      id: '0',
      name: 'required',
    },
  ],
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
          <BlackTitle theme="largeBold">Chỉ một bước nữa thôi!</BlackTitle>

          <View style={{ marginTop: 5 }}>
            <BlackParagraph theme="normalMedium">
              Nhập số điện thoại để đăng nhập
            </BlackParagraph>
          </View>
          <View style={{ marginTop: 30, flexDirection: 'row' }}>
            <BlackParagraph theme="normalMedium">Số điện thoại</BlackParagraph>
            <RoseParagraph theme="normalMedium"> *</RoseParagraph>
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

        <View style={{ marginTop: 20 }}>
          <BlackParagraph theme="normalMedium">
            Tôi đồng ý với các
            <PrimaryParagraph theme="normalBold">
              {' '}
              Điều khoản dịch vụ
            </PrimaryParagraph>{' '}
            và
            <PrimaryParagraph theme="normalBold">
              {' '}
              Chính sách bảo mật
            </PrimaryParagraph>{' '}
            của Detoi
          </BlackParagraph>

          <View style={{ marginTop: 30 }}>
            <BorderButton
              onPress={() => {}}
              title="Có vấn đề với số điện thoại?"
              theme="full-rounded-bold"
            />
          </View>
        </View>

        <View style={{ marginTop: 50 }}>
          <ServiceRequirementsSelect
            label={testDataSelect.label}
            labelIcon={testDataSelect.labelIcon}
            placeholder={testDataSelect.placeholder}
            options={
              testDataSelect.type.name === 'select'
                ? testDataSelect.type.options
                : undefined
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

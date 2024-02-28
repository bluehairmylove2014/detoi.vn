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
} from '@present-native/atoms';
import { ICountryCode } from '@business-layer/services/entities/countryCode';
import { Controller, useForm } from 'react-hook-form';
import { useLogin } from '@business-layer/business-logic/lib/auth';
import {
  useYupValidationResolver,
  loginByPhoneNumberSchema,
} from '@utils/validators/yup';
import {
  IUIAdditionServiceRequirement,
  IUIServiceRequirement,
} from '@business-layer/services/entities';
import { useServiceRequirementsUI } from '@business-layer/business-logic/lib/category';

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

const testDataInput: IUIServiceRequirement[] = [
  {
    id: '0',
    inputMethod: {
      dataType: 'text',
      method: {
        name: 'input',
      },

      validation: {
        id: '0',
        name: 'required',
        message: 'string',
      },
    },

    label: 'Số nhà, số phòng, hẻm (ngõ)',
    placeholder: 'Ví dụ: 257/43 Phòng 2014 Căn hộ Sunrise Continent',
  },
  {
    id: '1',
    inputMethod: {
      dataType: 'text',
      method: {
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

      validation: {
        id: '0',
        name: 'required',
        message: 'string',
      },
    },

    label: 'Bạn muốn chúng tôi dọn như thế nào?',
    labelIcon: 'faFlag',
    placeholder: 'Giúp nhân viên biết thêm về công việc cần làm',
  },
];

const testSwitch: IUIAdditionServiceRequirement[] = [
  {
    id: '0',
    icon: 'faDog',
    label: 'Nhà có thú cưng',
    autoSelect: true,
  },
  {
    id: '1',
    icon: 'faComputer',
    label: 'Nhà có nhiều đồ điện tử',
    autoSelect: false,
  },
  {
    id: '2',
    icon: 'faBroom',
    label: 'Nhân viên tự mang theo dụng cụ',
    autoSelect: false,
  },
];
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

  const { onGenerateUI } = useServiceRequirementsUI();

  return (
    <SafeAreaView>
      <StatusBar hidden />
      <View style={loginScreenStyle.container}>
        <View>
          <BlackTitle theme="largeBold">Chỉ một bước nữa thôi!</BlackTitle>

          <View style={{ marginTop: 5 }}>
            <BlackParagraph theme="baseMedium">
              Nhập số điện thoại để đăng nhập
            </BlackParagraph>
          </View>
          <View style={{ marginTop: 30, flexDirection: 'row' }}>
            <BlackParagraph theme="baseMedium">Số điện thoại</BlackParagraph>
            <RoseParagraph theme="baseMedium"> *</RoseParagraph>
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
          <BlackParagraph theme="baseMedium">
            Tôi đồng ý với các
            <PrimaryParagraph theme="baseBold">
              {' '}
              Điều khoản dịch vụ
            </PrimaryParagraph>{' '}
            và
            <PrimaryParagraph theme="baseBold">
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

        {onGenerateUI({
          requirements: testDataInput,
          additionalRequirements: testSwitch,
        })}
      </View>
    </SafeAreaView>
  );
};

export default Login;

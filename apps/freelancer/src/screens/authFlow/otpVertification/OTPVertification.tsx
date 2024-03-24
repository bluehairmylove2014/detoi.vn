/* eslint-disable react/jsx-pascal-case */
import { View, TextInput, ActivityIndicator } from 'react-native';
import { otpVertificationScreenStyle } from './styles';
import { COLOR_PALETTE } from '@present-native/styles';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  useGetOnOtpPhoneNumber,
  useResendOtp,
  useVerifyOtp,
} from '@business-layer/business-logic/lib/auth';
import { Paragraph, PrimaryBtn, VerticalSpacer } from '@present-native/atoms';
import AuthTemplate from '@present-native/templates/AuthTemplate';
import { AuthHeader } from '@present-native/organisms';
import { useAuthNavigation } from '@business-layer/business-logic/non-service-lib/navigation';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { freelancerScreensList } from '@constants/freelancerScreens';

const MAX_TRY = 3;
const OTP_LENGTH = 4;

type otpInputFormType = {
  otp: string;
};

const OTPVertification: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'OTPVertification'>
> = ({ route, navigation }) => {
  const { navigateToScreenInSameStack, navigateToScreenInDifferentStack } =
    useAuthNavigation();
  const phoneNumber = useGetOnOtpPhoneNumber();
  const { onResendOtp } = useResendOtp();
  //Handle OTP
  const [countWrong, setCountWrong] = useState<number>(MAX_TRY);
  const [activeWarning, setActiveWarning] = useState(false);
  const [loadingOTP, setLoadingOTP] = useState(false);
  const [isSuccessVerified, setIsSuccessVerified] = useState<boolean>(false);

  //Handle Timer
  const [activeTimeCount, setActiveTimeCount] = useState(true);
  const [timerCount, setTimerCount] = useState(30);

  const { handleSubmit, setValue, watch, control } = useForm<otpInputFormType>({
    defaultValues: {
      otp: '',
    },
  });

  const otpWatcher = watch('otp');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onVerifyOtp, isLoading } = useVerifyOtp();

  // methods
  const onSuccessSubmitOTP = ({ otp }: otpInputFormType) => {
    // Start loading
    setLoadingOTP(true);

    // Call api to check otp
    onVerifyOtp({ otp })
      .then((msg) => {
        setIsSuccessVerified(true);
      })
      .catch((error) => {
        setTimeout(() => {
          if (countWrong === 1) {
            navigateToScreenInSameStack('Login');
          } else {
            setCountWrong(countWrong - 1);
            setActiveWarning(true);
          }

          setLoadingOTP(false); // Stop loading
        }, 1000);
      })
      .finally(() => {
        // Set input otp blank
        setValue('otp', '');
      });
  };

  const handleResendOtp = () => {
    setActiveTimeCount(true);
    setTimerCount(30);
    onResendOtp()
      .then((msg) => {
        // TODO
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (activeTimeCount) {
      const interval = setInterval(() => {
        setTimerCount((prevTimerCount) => {
          if (prevTimerCount === 1) {
            clearInterval(interval);
            setActiveTimeCount(false);
          }
          return prevTimerCount - 1;
        });
      }, 1000);

      // Cleanup function
      return () => clearInterval(interval);
    }
  }, [activeTimeCount]);

  useEffect(() => {
    isSuccessVerified && navigateToScreenInDifferentStack('HomeStack', 'Home');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccessVerified]);

  useEffect(() => {
    otpWatcher &&
      otpWatcher.length === OTP_LENGTH &&
      handleSubmit(onSuccessSubmitOTP)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otpWatcher]);
  return (
    <AuthTemplate>
      <View style={otpVertificationScreenStyle.container}>
        <AuthHeader childs={['BLACK_BACK_BUTTON']} />
        <VerticalSpacer size="xl" />
        <Paragraph theme="baseMedium">
          Mã OTP gồm 4 chữ số được gửi tới số
          <Paragraph theme="baseBold"> {phoneNumber} </Paragraph>
          thông qua tin nhắn
          <Paragraph theme="baseBold"> SMS</Paragraph>
        </Paragraph>

        <VerticalSpacer size="xxl" />
        <Paragraph theme="largeMedium">
          Nhập mã OTP
          <Paragraph theme="largeMedium" color="rose">
            {' '}
            *
          </Paragraph>
        </Paragraph>

        <View style={otpVertificationScreenStyle.inputContainer}>
          <Controller
            name="otp"
            control={control}
            render={({ field }) => (
              <TextInput
                style={otpVertificationScreenStyle.input}
                placeholder="● ● ● ●"
                placeholderTextColor={COLOR_PALETTE.gray}
                selectionColor={COLOR_PALETTE.black}
                keyboardType="numeric"
                maxLength={4}
                {...field}
                onChangeText={(value) => {
                  field.onChange(value);
                  setValue('otp', value);
                }}
              />
            )}
          />

          {loadingOTP ? (
            <ActivityIndicator size="small" color={COLOR_PALETTE.secondary} />
          ) : (
            <View>
              {activeTimeCount ? (
                <View style={otpVertificationScreenStyle.countTime}>
                  <ActivityIndicator
                    size="small"
                    color={COLOR_PALETTE.secondary}
                    style={{ marginRight: 5 }}
                  />
                  <Paragraph theme="baseBold">
                    00:{timerCount.toString().padStart(2, '0')}
                  </Paragraph>
                </View>
              ) : (
                <View>
                  <View style={{ width: 70 }}>
                    <PrimaryBtn
                      onPress={handleResendOtp}
                      fontSize="small"
                      title="Gửi lại"
                      radius="full"
                    />
                  </View>
                </View>
              )}
            </View>
          )}
        </View>

        {activeWarning && (
          <>
            <VerticalSpacer size="s" />
            <Paragraph theme="baseMedium" color="rose">
              Mã OTP bạn vừa nhập không hợp lệ. Bạn có thể thử thêm {countWrong}{' '}
              lần nữa
            </Paragraph>
          </>
        )}
      </View>
    </AuthTemplate>
  );
};
export default OTPVertification;

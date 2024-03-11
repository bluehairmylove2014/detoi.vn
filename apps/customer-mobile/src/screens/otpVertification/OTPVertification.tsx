import { View, TextInput, ActivityIndicator } from 'react-native';
import { OTPVertificationProps } from '../../config';
import { otpVertificationScreenStyle } from './styles';
import { colors } from '@present-native/styles';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  useGetOnOtpPhoneNumber,
  useResendOtp,
  useVerifyOtp,
} from '@business-layer/business-logic/lib/auth';
import {
  Paragraph,
  SmallPrimaryButton,
  VerticalSpacer,
} from '@present-native/atoms';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';

const MAX_TRY = 3;
const OTP_LENGTH = 4;

type otpInputFormType = {
  otp: string;
};

const OTPVertification: React.FC<OTPVertificationProps> = ({
  route,
  navigation,
}) => {
  const phoneNumber = useGetOnOtpPhoneNumber();
  const { onResendOtp } = useResendOtp();
  //Handle OTP
  const [countWrong, setCountWrong] = useState<number>(MAX_TRY);
  const [activeWarning, setActiveWarning] = useState(false);
  const [loadingOTP, setLoadingOTP] = useState(false);

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
        navigation.navigate('Home');
      })
      .catch((error) => {
        setTimeout(() => {
          if (countWrong === 1) {
            navigation.navigate('Login');
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
    otpWatcher &&
      otpWatcher.length === OTP_LENGTH &&
      handleSubmit(onSuccessSubmitOTP)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otpWatcher]);
  return (
    <CustomerTemplate>
      <View style={otpVertificationScreenStyle.container}>
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
                placeholderTextColor={colors.gray}
                selectionColor={colors.black}
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
            <ActivityIndicator size="small" color={colors.secondary} />
          ) : (
            <View>
              {activeTimeCount ? (
                <View style={otpVertificationScreenStyle.countTime}>
                  <ActivityIndicator
                    size="small"
                    color={colors.secondary}
                    style={{ marginRight: 5 }}
                  />
                  <Paragraph theme="baseBold">
                    00:{timerCount.toString().padStart(2, '0')}
                  </Paragraph>
                </View>
              ) : (
                <View>
                  <SmallPrimaryButton
                    onPress={handleResendOtp}
                    theme="full-rounded-bold"
                    title="Gửi lại"
                  />
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
    </CustomerTemplate>
  );
};
export default OTPVertification;

import { SafeAreaView, View, TextInput, ActivityIndicator } from 'react-native';
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
  BlackParagraph,
  RoseParagraph,
  SmallPrimaryButton,
} from '@present-native/atoms';

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
    <SafeAreaView>
      <View style={otpVertificationScreenStyle.container}>
        <View style={{ marginTop: 5 }}>
          <BlackParagraph theme="normalMedium">
            Mã OTP gồm 4 chữ số được gửi tới số
            <BlackParagraph theme="normalBold"> {phoneNumber} </BlackParagraph>
            thông qua tin nhắn
            <BlackParagraph theme="normalBold"> SMS</BlackParagraph>
          </BlackParagraph>
        </View>
        <View style={{ marginTop: 30 }}></View>
        <BlackParagraph theme="largeMedium">
          Nhập mã OTP
          <RoseParagraph theme="largeMedium"> *</RoseParagraph>
        </BlackParagraph>

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
                  <BlackParagraph theme="normalBold">
                    00:{timerCount.toString().padStart(2, '0')}
                  </BlackParagraph>
                </View>
              ) : (
                <View>
                  <SmallPrimaryButton
                    onPress={() => {
                      setActiveTimeCount(true);
                      setTimerCount(30);
                    }}
                    theme="full-rounded-bold"
                    title="Gửi lại"
                  />
                </View>
              )}
            </View>
          )}
        </View>

        {activeWarning && (
          <View style={{ marginTop: 15 }}>
            <RoseParagraph theme="normalMedium">
              Mã OTP bạn vừa nhập không hợp lệ. Bạn có thể thử thêm {countWrong}{' '}
              lần nữa
            </RoseParagraph>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
export default OTPVertification;

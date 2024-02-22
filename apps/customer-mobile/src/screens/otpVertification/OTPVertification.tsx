import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
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
    setLoadingOTP(true); // Start loading
    setActiveTimeCount(false);
    // Call api to check otp
    onVerifyOtp({ otp })
      .then((msg) => {
        navigation.navigate('Home');
      })
      .catch((error) => {
        if (countWrong === 1) {
          navigation.navigate('Login');
        } else {
          setCountWrong(countWrong - 1);
          setActiveWarning(true);
        }
      })
      .finally(() => {
        setLoadingOTP(false); // Stop loading after 1 second
        //Set input otp blank
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
        <Text style={{ fontSize: 14, marginTop: 5 }}>
          Mã OTP gồm 4 chữ số được gửi tới số
          <Text style={{ fontWeight: 'bold' }}> {phoneNumber} </Text>
          thông qua tin nhắn
          <Text style={{ fontWeight: 'bold' }}> SMS</Text>
        </Text>

        <Text style={{ fontSize: 16, marginTop: 30 }}>
          Nhập mã OTP
          <Text style={{ fontSize: 16, color: colors.rose }}> *</Text>
        </Text>

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
                  <Text style={{ fontWeight: 'bold' }}>
                    00:{timerCount.toString().padStart(2, '0')}
                  </Text>
                </View>
              ) : (
                <View>
                  <TouchableOpacity
                    onPress={handleResendOtp}
                    style={otpVertificationScreenStyle.buttonSendAgain}
                  >
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                      Gửi lại
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
        </View>

        {activeWarning && (
          <Text
            style={{
              marginTop: 15,
              color: colors.rose,
              fontSize: 14,
              fontWeight: '500',
            }}
          >
            Mã OTP bạn vừa nhập không hợp lệ. Bạn có thể thử thêm {countWrong}{' '}
            lần nữa
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};
export default OTPVertification;

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
import { useForm } from 'react-hook-form';

const MAX_TRY = 4;
const OTP_LENGTH = 4;

type otpInputFormType = {
  otp: string;
};

const OTPVertification: React.FC<OTPVertificationProps> = ({
  route,
  navigation,
}) => {
  //Handle OTP
  const trueOTP = '1234'; // The true OTP to compare with
  const [countWrong, setCountWrong] = useState<number>(MAX_TRY);
  const [activeWarning, setActiveWarning] = useState(false);
  const [loadingOTP, setLoadingOTP] = useState(false);

  //Handle Timer
  const [activeTimeCount, setActiveTimeCount] = useState(true);
  const [timerCount, setTimerCount] = useState(30);

  const { handleSubmit, setValue, watch } = useForm<otpInputFormType>({
    defaultValues: {
      otp: '',
    },
  });
  const otpWatcher = watch('otp');

  // methods
  const onSuccessSubmitOTP = ({ otp }: otpInputFormType) => {
    console.log('CHECK: ', otp);
    // Call api to check otp
    // Wrong => ...

    setLoadingOTP(true); // Start loading
    setActiveTimeCount(false);

    setTimeout(() => {
      setLoadingOTP(false); // Stop loading after 1 second
      // Compare OTP
      if (otpWatcher !== trueOTP) {
        setCountWrong((countWrong) => {
          if (countWrong !== 1) return countWrong - 1;
          else return MAX_TRY;
        });
      }
      setActiveWarning(true);

      //Set input otp blank
      setValue('otp', '');
    }, 1000);
    // True
    navigation.navigate('OTPVertification');
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
    otpWatcher.length === OTP_LENGTH && handleSubmit(onSuccessSubmitOTP)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otpWatcher]);
  return (
    <SafeAreaView>
      <View style={otpVertificationScreenStyle.container}>
        <Text style={{ fontSize: 14, marginTop: 5 }}>
          Mã OTP gồm 4 chữ số được gửi tới số
          <Text style={{ fontWeight: 'bold' }}> (+84)337839146 </Text>
          thông qua tin nhắn
          <Text style={{ fontWeight: 'bold' }}> SMS</Text>
        </Text>

        <Text style={{ fontSize: 16, marginTop: 30 }}>
          Nhập mã OTP
          <Text style={{ fontSize: 16, color: colors.rose }}> *</Text>
        </Text>

        <View style={otpVertificationScreenStyle.inputContainer}>
          <TextInput
            style={otpVertificationScreenStyle.input}
            placeholder="● ● ● ●"
            placeholderTextColor={colors.gray}
            selectionColor={colors.black}
            keyboardType="numeric"
            maxLength={4}
            onChangeText={(value) => setValue('otp', value)}
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
                    onPress={() => {
                      setActiveTimeCount(true);
                      setTimerCount(30);
                    }}
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

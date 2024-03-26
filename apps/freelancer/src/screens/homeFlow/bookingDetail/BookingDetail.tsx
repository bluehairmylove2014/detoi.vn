import { freelancerScreensList } from '@constants/freelancerScreens';
import FreelancerTemplate from '@present-native/templates/FreelancerTemplate';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { BookingDetailStyle } from './styles';
import {
  CircleImage,
  FAIcon,
  HorizontalSpacer,
  Paragraph,
  PrimaryBtn,
  ServiceRequirementsInput,
  VerticalSpacer,
} from '@present-native/atoms';
import { orderDetail } from './__mock__';
import { COLOR_PALETTE } from '@present-native/styles';
import { useForm } from 'react-hook-form';
import {
  moneyInputSchema,
  useYupValidationResolver,
} from '@utils/validators/yup';

const title = ['Địa điểm', 'Thông tin dịch vụ', 'Giá trung bình dịch vụ'];
const moneyCurrentInAccount = 450000;
const detail = orderDetail;

type moneyInputFormType = {
  money: string;
};
const BookingDetail: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'BookingDetail'>
> = ({ route, navigation }) => {
  const formResolver = useYupValidationResolver(moneyInputSchema);
  const {
    control,
    handleSubmit,
    setError,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: formResolver,
  });
  const moneyWatch = watch('money');
  const onSuccessOrder = ({ money }: moneyInputFormType) => {
    const moneyValue = parseFloat(money);
    if (moneyValue + 30000 > moneyCurrentInAccount) {
      setError('money', {
        type: 'moneyAtLeast',
        message: 'Tài khoản phải có ít nhất' + moneyValue + 30000 + 'VND',
      });
      onErrorSubmit({
        money: {
          message: `Tài khoản phải có ít nhất ${moneyValue + 30000} VND`,
        },
      });
    } else {
      // Proceed with successful order processing
      console.log('Order submitted successfully');
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onErrorSubmit = (error: Record<string, any>) => {
    const errorMessage = error.money.message || 'Xảy ra lỗi';
    console.log(errorMessage);
  };

  return (
    <FreelancerTemplate>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={BookingDetailStyle.safeAreaStyle}>
          <View style={BookingDetailStyle.container}>
            <View style={BookingDetailStyle.locationContainer}>
              <View style={BookingDetailStyle.topContainer}>
                <Paragraph theme="baseBold" color="primary">
                  {title[0]}
                </Paragraph>
                <Paragraph theme="baseBold">14 km</Paragraph>
              </View>

              <VerticalSpacer size="s" />
              <Paragraph theme="smallRegular">
                {detail.address.ward}, {detail.address.district},{' '}
                {detail.address.province}, {detail.address.country}
              </Paragraph>
              <Paragraph theme="smallRegular">
                {detail.address.addressLine}
              </Paragraph>
            </View>

            <VerticalSpacer size="xl" />
            <View style={BookingDetailStyle.serviceInfoContainer}>
              <Paragraph theme="baseBold" color="primary">
                {title[1]}
              </Paragraph>
              <VerticalSpacer size="l" />
              <View style={BookingDetailStyle.serviceInfoContentContainer}>
                <View style={{ alignItems: 'center' }}>
                  <View style={{ width: 80, height: 80 }}>
                    <CircleImage
                      source={{
                        uri: orderDetail.serviceTypes[0].image,
                      }}
                    />
                  </View>

                  <VerticalSpacer size="s" />
                  <View style={{ width: 100 }}>
                    <Paragraph theme="smallSemibold" align="center">
                      {detail.serviceTypes[0].name}
                    </Paragraph>
                  </View>
                </View>

                <HorizontalSpacer size="xl" />
                <View>
                  <View style={BookingDetailStyle.serviceDetailContainer}>
                    <FAIcon iconName="faFlag" color={COLOR_PALETTE.secondary} />
                    <HorizontalSpacer size="l" />
                    <Paragraph theme="baseSemibold">
                      {detail.serviceTypes[0].name}
                    </Paragraph>
                  </View>
                  <VerticalSpacer size="m" />
                  <View style={BookingDetailStyle.serviceDetailContainer}>
                    <FAIcon iconName="faFlag" color={COLOR_PALETTE.secondary} />
                    <HorizontalSpacer size="l" />
                    <Paragraph theme="baseSemibold">
                      17:30 | Thứ 3, ngày 20/05/2014
                    </Paragraph>
                  </View>
                  <VerticalSpacer size="m" />
                  <View style={BookingDetailStyle.serviceDetailContainer}>
                    <FAIcon iconName="faDog" color={COLOR_PALETTE.secondary} />
                    <HorizontalSpacer size="l" />
                    <Paragraph theme="baseRegular">Nhà có thú cưng</Paragraph>
                  </View>
                  <VerticalSpacer size="m" />
                  <View style={BookingDetailStyle.serviceDetailContainer}>
                    <FAIcon
                      iconName="faCommentsSolid"
                      color={COLOR_PALETTE.secondary}
                    />
                    <HorizontalSpacer size="l" />
                    <Paragraph theme="smallRegular">
                      Yêu cầu thêm cho nhân viên
                    </Paragraph>
                  </View>
                </View>
              </View>
            </View>

            <VerticalSpacer size="xl" />
            <View>
              <View style={BookingDetailStyle.topContainer}>
                <Paragraph theme="baseBold" color="primary">
                  {title[2]}
                </Paragraph>
              </View>
              <VerticalSpacer size="m" />
              <Paragraph theme="largeBold">250.000đ</Paragraph>

              <VerticalSpacer size="xl" />
              <ServiceRequirementsInput
                type="number"
                labelIcon="faMoneyBills"
                label="Bạn muốn nhận đơn với giá bao nhiêu?"
                placeholder="Số tiền lớn hơn 50.000đ"
                control={control}
                inputName="money"
                isError={!!errors['money']}
                handleEndEditing={() => {
                  if (moneyWatch + 30000 > moneyCurrentInAccount)
                    setValue('money', '40000 hihi');
                }}
              />
            </View>

            <VerticalSpacer size="xxxl" />
            <VerticalSpacer size="xxxl" />
            <View style={{ paddingHorizontal: 70 }}>
              <PrimaryBtn
                title="Nhận đơn và báo giá"
                onPress={handleSubmit(onSuccessOrder, onErrorSubmit)}
              />
            </View>
            <VerticalSpacer size="xl" />
            <Paragraph theme="smallBold" align="center">
              Lưu ý:{' '}
              <Paragraph theme="smallRegular">
                Bạn phải nạp trước 5% phí dịch vụ vào tài khoản để nhận đơn,
                khách hàng sẽ trả tiền riêng cho bạn sau khi hoàn tất dịch vụ
              </Paragraph>
            </Paragraph>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </FreelancerTemplate>
  );
};

export default BookingDetail;

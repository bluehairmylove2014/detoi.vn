/* eslint-disable @typescript-eslint/no-unused-vars */
import { View } from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { freelancerScreensList } from '@constants/freelancerScreens';
import FreelancerTemplate from '@present-native/templates/FreelancerTemplate';
import { BannerTopSection } from '@present-native/molecules';
import {
  BaseLink,
  CircleImage,
  FAIcon,
  GrayDivider,
  Paragraph,
  PrimaryBtn,
  ServiceRequirementsInput,
  StaticServiceRequirementDetail,
  Title,
  VerticalSpacer,
} from '@present-native/atoms';
import { marketplaceOrderDetailStyles } from './styles';
import { COLOR_PALETTE } from '@present-native/styles';
import { formatCurrency } from '@utils/helpers';
import { useForm } from 'react-hook-form';
import { useYupValidationResolver } from '@utils/validators/yup';
import { freelancerMarketplaceOrderDetailForm } from '@utils/validators/yup/schemas';
import { SERVICE_MIN_PRICE, SERVICE_PLATFORM_FEE_AMOUNT } from '@constants/fee';
import { useAuthNavigation } from '@business-layer/business-logic/non-service-lib/navigation';
type formType = {
  orderPrice: number;
};
const MarketplaceOrderDetail: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'MarketplaceOrderDetail'>
> = ({ route }) => {
  const { navigateToScreenInSameStack } = useAuthNavigation();
  const {
    order,
    freelancer: { balance },
  } = route.params;
  const address = order.address;
  const service = order.serviceTypes[0];
  const [isNotAfford, setIsNotAfford] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<formType>({
    resolver: useYupValidationResolver(freelancerMarketplaceOrderDetailForm),
  });
  const orderPriceWatcher = watch('orderPrice');

  function handleReceiveOrder({ orderPrice }: formType) {
    if (typeof orderPrice === 'number') {
      if (SERVICE_PLATFORM_FEE_AMOUNT * orderPrice > balance) {
        setIsNotAfford(true);
      } else {
        navigateToScreenInSameStack('ReceiveOrderSuccess');
      }
    } else {
      setError('orderPrice', { type: 'invalid-type', message: '' });
    }
  }

  return (
    <FreelancerTemplate>
      <BannerTopSection
        url={service.image}
        title={`CHI TIẾT ĐƠN DỊCH VỤ`}
        subtitle={''}
      />
      <VerticalSpacer size="xxl" />

      <View style={marketplaceOrderDetailStyles.container}>
        {/* Location */}
        <View>
          <View style={marketplaceOrderDetailStyles.locationTitleContainer}>
            <View style={{ flexGrow: 1 }}>
              <Title theme="baseBold" color="primary" lineNumber={1}>
                Địa điểm:
              </Title>
            </View>
            <View style={{ flexShrink: 1 }}>
              <Paragraph theme="largeBold" lineNumber={1}>
                {`14km`}
              </Paragraph>
            </View>
          </View>
          <VerticalSpacer size="s" />
          <Paragraph theme="baseMedium" lineNumber={2}>
            {address.addressLine}
          </Paragraph>
        </View>

        <VerticalSpacer size="xl" />
        {/* Service Detail */}
        <View>
          <Title theme="baseBold" color="primary">
            Thông tin dịch vụ
          </Title>
          <VerticalSpacer size="xl" />
          <View style={marketplaceOrderDetailStyles.serviceDetailContainer}>
            <View style={{ width: 100 }}>
              <CircleImage source={{ uri: service.image }} />
            </View>
            <View style={marketplaceOrderDetailStyles.serviceDetailList}>
              <Paragraph theme="baseBold" align="left">
                {service.name}
              </Paragraph>
              <StaticServiceRequirementDetail
                iconName="faFlag"
                title="Dọn nhà theo phòng - 5 phòng"
              />
              <StaticServiceRequirementDetail
                iconName="faLocationDot"
                title="17:30  |  Thứ 3, ngày 20 - 5 - 2014"
              />
              <StaticServiceRequirementDetail
                iconName="faDog"
                title="Nhà có thú cưng"
              />
              <StaticServiceRequirementDetail
                iconName="faFlag"
                title="Yêu cầu thêm cho nhân viên"
                subTitle="Không có gì..."
              />
            </View>
          </View>
        </View>

        <VerticalSpacer size="xl" />
        <GrayDivider direction="horizontal" />
        <VerticalSpacer size="xl" />

        <View>
          <Title theme="baseBold" color="primary" lineNumber={1}>
            Giá trung bình dịch vụ{' '}
            <FAIcon
              iconName="faCircleQuestionRegular"
              color={COLOR_PALETTE.primary}
              size={12}
            />
          </Title>
          <Paragraph theme="baseBold" color="black" lineNumber={1}>
            {formatCurrency(order.estimatedPrice, 'vnd')}
          </Paragraph>
        </View>
        <VerticalSpacer size="xl" />
        <View>
          <ServiceRequirementsInput
            type="number"
            label="Bạn muốn nhận đơn với giá bao nhiêu?"
            labelIcon="faMoneyBills"
            placeholder="Ít nhất 50.000đ & Tài khoản đủ 2% số tiền (Phí nền tảng)"
            control={control}
            inputName="orderPrice"
            isError={!!errors['orderPrice']}
          />
          <VerticalSpacer size="m" />
          <Paragraph
            theme="smallRegular"
            color={errors['orderPrice'] ? 'rose' : 'black'}
            align="center"
          >
            {orderPriceWatcher < SERVICE_MIN_PRICE
              ? `Ít nhất ${formatCurrency(SERVICE_MIN_PRICE, 'vnd')}`
              : orderPriceWatcher > 0
              ? `(Tài khoản phải có ít nhất: ${formatCurrency(
                  SERVICE_PLATFORM_FEE_AMOUNT * orderPriceWatcher,
                  'vnd'
                )})`
              : ''}
          </Paragraph>
          {isNotAfford ? (
            <>
              <VerticalSpacer size="m" />
              <BaseLink screen="Home">
                <Paragraph
                  theme="baseBold"
                  color={'rose'}
                  align="center"
                  decoration="underline"
                >
                  Tài khoản không đủ. Nạp thêm?
                </Paragraph>
              </BaseLink>
            </>
          ) : null}
        </View>
        <VerticalSpacer size="xl" />
        <PrimaryBtn
          title="Báo giá ngay"
          onPress={handleSubmit(handleReceiveOrder)}
        />
      </View>
    </FreelancerTemplate>
  );
};

export default MarketplaceOrderDetail;

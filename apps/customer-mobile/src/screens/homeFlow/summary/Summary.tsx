/* eslint-disable react/jsx-pascal-case */
import { ActivityIndicator, View } from 'react-native';
import React from 'react';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { summaryStyles } from './styles';
import {
  FAIcon,
  Paragraph,
  PrimaryBtn,
  StaticServiceRequirementDetail,
  Title,
  VerticalSpacer,
} from '@present-native/atoms';
import {
  BannerTopSection,
  ServiceCircleButtonWithLabel,
} from '@present-native/molecules';
import { ChoosePaymentMethods } from '@present-native/molecules';
import { SummaryProps } from '../../../config';
import { useCurrentOrderService } from '@business-layer/business-logic/lib/category';
import { useCurrentOrderAddress } from '@business-layer/business-logic/lib/geocode';
import { formatCurrency } from '@utils/helpers';
import { useSelectFreelancerForOrder } from '@business-layer/business-logic/lib/order';

const Summary: React.FC<SummaryProps> = ({ route, navigation }) => {
  const { currentOrderService: service } = useCurrentOrderService();
  const { currentOrderAddress: address } = useCurrentOrderAddress();
  const { pricing, freelancerId, orderId } = route.params;
  const { onSelectFreelancerForOrder } = useSelectFreelancerForOrder();

  function handleCommitBooking() {
    // onSelectFreelancerForOrder(orderId, freelancerId, pricing)
    //   .then((msg) => {
    //     navigation.navigate('OnService');
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    navigation.navigate('OnService', { orderId });
  }

  return (
    <CustomerTemplate>
      <BannerTopSection
        url={service?.image ?? '#'}
        title={`DỊCH VỤ ${service?.name.toUpperCase()}`}
        subtitle={service?.description ?? ''}
      />
      <VerticalSpacer size="xxl" />
      {!service || !address ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <View style={summaryStyles.container}>
          {/* Location */}
          <View>
            <View style={summaryStyles.locationTitleContainer}>
              <View style={{ flexGrow: 1 }}>
                <Paragraph theme="largeBold" color="primary" lineNumber={1}>
                  Địa điểm:
                </Paragraph>
              </View>
              <View style={{ flexShrink: 1 }}>
                <Paragraph theme="largeBold" lineNumber={1}>
                  {address.amenity ?? ''}
                </Paragraph>
              </View>
            </View>
            <VerticalSpacer size="s" />
            <Paragraph theme="baseMedium" lineNumber={2}>
              {address.display_name}
            </Paragraph>
            <Paragraph theme="baseMedium" lineNumber={1}>
              257/43 Phòng 2014 Căn hộ Sunrise Continent
            </Paragraph>
          </View>

          <VerticalSpacer size="xl" />
          {/* Service Detail */}
          <View>
            <Title theme="baseBold" color="primary">
              Thông tin dịch vụ
            </Title>
            <VerticalSpacer size="xl" />
            <View style={summaryStyles.serviceDetailContainer}>
              <ServiceCircleButtonWithLabel
                serviceImageUrl={service.image}
                serviceName={service.name}
                width={100}
              />
              <View>
                <StaticServiceRequirementDetail
                  iconName="faFlag"
                  title="Dọn nhà theo phòng - 5 phòng"
                  hightlight={true}
                />
                <StaticServiceRequirementDetail
                  iconName="faFlag"
                  title="17:30  |  Thứ 3, ngày 20 - 5 - 2014"
                  hightlight={true}
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

          <VerticalSpacer size="xxxl" />
          {/* Payment method */}
          <View>
            <View style={summaryStyles.paymentMethodTitleContainer}>
              <View style={summaryStyles.paymentMethodTitle}>
                <FAIcon iconName="faCircleDollarToSlot" />
                <Title theme="baseBold">Thanh toán</Title>
              </View>
              <Title theme="largeBold">{formatCurrency(pricing, 'vnd')}</Title>
            </View>
            <VerticalSpacer size="l" />
            <ChoosePaymentMethods onSelect={() => {}} />
          </View>
          <VerticalSpacer size="xxxl" />
          <PrimaryBtn title="Đặt đơn ngay" onPress={handleCommitBooking} />
        </View>
      )}
    </CustomerTemplate>
  );
};

export default Summary;

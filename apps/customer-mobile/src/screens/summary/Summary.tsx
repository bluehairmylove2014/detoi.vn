import { View } from 'react-native';
import React from 'react';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { summaryStyles } from './styles';
import {
  FAIcon,
  Paragraph,
  PrimaryButton,
  StaticServiceRequirementDetail,
  Title,
  VerticalSpacer,
} from '@present-native/atoms';
import {
  BannerTopSection,
  ServiceCircleButtonWithLabel,
} from '@present-native/molecules';
import { ChoosePaymentMethods } from '@present-native/molecules';
import { SummaryProps } from '../../config';
import { useCurrentOrderService } from '@business-layer/business-logic/lib/category';

const Summary: React.FC<SummaryProps> = ({ route, navigation }) => {
  const { currentOrderService: service } = useCurrentOrderService();
  return (
    <CustomerTemplate>
      <BannerTopSection
        url={service?.image ?? '#'}
        title={`DỊCH VỤ ${service?.name.toUpperCase()}`}
        subtitle={service?.description ?? ''}
      />
      <VerticalSpacer size="xxl" />
      <View style={summaryStyles.container}>
        {/* Location */}
        <View>
          <View style={summaryStyles.locationTitleContainer}>
            <Paragraph theme="largeBold" color="primary">
              Địa điểm:
            </Paragraph>
            <Paragraph theme="largeBold" lineNumber={1}>
              Lottle Cinema Thủ Đức
            </Paragraph>
          </View>
          <VerticalSpacer size="s" />
          <Paragraph theme="baseMedium" lineNumber={1}>
            Joy Citipoint, Quốc Lộ 1A, KCX Linh Trung, KP.4, Thủ Đức, Hồ Chí
            Minh
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
              serviceImageUrl={
                'https://detoivn.sirv.com/services/dondep/n%C3%A2-nhapho.png'
              }
              serviceName={'Nhà / Nhà phố'}
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
            <Title theme="largeBold">800.000 đ</Title>
          </View>
          <VerticalSpacer size="l" />
          <ChoosePaymentMethods onSelect={() => {}} />
        </View>
        <VerticalSpacer size="xxxl" />
        <PrimaryButton
          title="Đặt đơn ngay"
          theme="square-rounded-bold"
          onPress={() => {}}
        />
      </View>
    </CustomerTemplate>
  );
};

export default Summary;

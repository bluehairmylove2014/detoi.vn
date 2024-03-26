/* eslint-disable @typescript-eslint/no-unused-vars */
import { View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { freelancerScreensList } from '@constants/freelancerScreens';
import FreelancerTemplate from '@present-native/templates/FreelancerTemplate';
import { BannerTopSection } from '@present-native/molecules';
import {
  CircleImage,
  FAIcon,
  GrayDivider,
  Paragraph,
  PrimaryBtn,
  StaticServiceRequirementDetail,
  Title,
  VerticalSpacer,
} from '@present-native/atoms';
import { incomingOrderDetailStyles } from './styles';
import { COLOR_PALETTE } from '@present-native/styles';
import { formatCurrency } from '@utils/helpers';
import { useAuthNavigation } from '@business-layer/business-logic/non-service-lib/navigation';

const IncomingOrderDetail: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'IncomingOrderDetail'>
> = ({ route }) => {
  const { navigateToScreenInSameStack } = useAuthNavigation();
  const { order } = route.params;
  const address = order.address;
  const service = order.serviceTypes[0];

  return (
    <FreelancerTemplate>
      <BannerTopSection
        url={service.image}
        title={`CHI TIẾT ĐƠN DỊCH VỤ`}
        subtitle={''}
      />
      <VerticalSpacer size="xxl" />

      <View style={incomingOrderDetailStyles.container}>
        {/* Location */}
        <View>
          <View style={incomingOrderDetailStyles.locationTitleContainer}>
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
          <View style={incomingOrderDetailStyles.serviceDetailContainer}>
            <View style={{ width: 100 }}>
              <CircleImage source={{ uri: service.image }} />
            </View>
            <View style={incomingOrderDetailStyles.serviceDetailList}>
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
            Giá dịch vụ{' '}
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
        <VerticalSpacer size="l" />
        <View>
          <Title theme="baseBold" color="primary" lineNumber={1}>
            Phương thức thanh toán
          </Title>
          <Paragraph theme="baseRegular" color="black" lineNumber={1}>
            Thanh toán tiền mặt sau khi hoàn thành dịch vụ
          </Paragraph>
        </View>
        <VerticalSpacer size="xl" />
        <PrimaryBtn title="Bắt đầu làm" onPress={() => {}} />
        <VerticalSpacer size="m" />
        <Paragraph theme="baseMedium" align="center">
          Lưu ý: Bạn sẽ tuyệt đối không được đóng ứng dụng hay tắt nguồn sau khi
          bắt đầu làm việc cho đến khi hoàn thành dịch vụ.
        </Paragraph>
      </View>
    </FreelancerTemplate>
  );
};

export default IncomingOrderDetail;

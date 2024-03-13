/* eslint-disable react/jsx-pascal-case */
import { View } from 'react-native';
import React from 'react';
import { ProvideDetailProps } from '../../config';
import {
  useCurrentOrderService,
  useGetServiceDetail,
  useServiceRequirementsUI,
} from '@business-layer/business-logic/lib/category';
import { BannerTopSection } from '@present-native/molecules';
import { PrimaryButton, Title, VerticalSpacer } from '@present-native/atoms';
import { screenHorizontalPadding } from '@present-native/styles';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';

const ProvideDetail: React.FC<ProvideDetailProps> = ({ route, navigation }) => {
  const { currentOrderService: service } = useCurrentOrderService();
  const { data: serviceDetail } = useGetServiceDetail(service?.id ?? '0');
  const { onGenerateUI } = useServiceRequirementsUI();

  const handlePressNext = () => {
    navigation.navigate('ProvideDate');
  };

  return (
    <CustomerTemplate>
      <BannerTopSection
        url={service?.image ?? '#'}
        title={`DỊCH VỤ ${service?.name.toUpperCase()}`}
        subtitle={service?.description ?? ''}
      />
      <VerticalSpacer size="xxl" />
      <View style={{ paddingHorizontal: screenHorizontalPadding }}>
        <Title theme="baseBold" color="primary">
          Nhập đầy đủ thông tin bên dưới
        </Title>
        {serviceDetail
          ? onGenerateUI({
              requirements: serviceDetail.requirements,
              additionalRequirements: serviceDetail.additionalRequirements,
            })
          : null}
        <VerticalSpacer size="xxxl" />
        <PrimaryButton title="Tiếp theo" onPress={handlePressNext} />
      </View>
    </CustomerTemplate>
  );
};

export default ProvideDetail;

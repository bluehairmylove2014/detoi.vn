/* eslint-disable react/jsx-pascal-case */
import { View } from 'react-native';
import React from 'react';
import { ProvideDetailProps } from '../../../config';
import {
  useCurrentOrderService,
  useGetServiceDetail,
  useServiceRequirementsUI,
} from '@business-layer/business-logic/lib/category';
import { BannerTopSection } from '@present-native/molecules';
import { PrimaryBtn, Title, VerticalSpacer } from '@present-native/atoms';
import { screenHorizontalPadding } from '@present-native/styles';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { FieldValues } from 'react-hook-form';
import { useSetPostOrderServiceContent } from '@business-layer/business-logic/lib/order';

const ProvideDetail: React.FC<ProvideDetailProps> = ({ route, navigation }) => {
  const { currentOrderService: service } = useCurrentOrderService();
  const { data: serviceDetail } = useGetServiceDetail(service?.id ?? '0');
  const { onGenerateUI, getForm } = useServiceRequirementsUI({
    requirements: serviceDetail?.requirements ?? [],
    additionalRequirements: serviceDetail?.additionalRequirements ?? [],
  });
  const { handleSubmit } = getForm();

  const handlePressNext = (data: FieldValues) => {
    onSetPostOrderServiceContent({ serviceContent: data });
    navigation.navigate('ProvideDate');
  };
  const { onSetPostOrderServiceContent } = useSetPostOrderServiceContent();

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
        {onGenerateUI()}
        <VerticalSpacer size="xxxl" />
        <PrimaryBtn title="Tiếp theo" onPress={handleSubmit(handlePressNext)} />
      </View>
    </CustomerTemplate>
  );
};

export default ProvideDetail;

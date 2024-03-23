/* eslint-disable react/jsx-pascal-case */
import { View } from 'react-native';
import React from 'react';
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
import { useAuthNavigation } from '@business-layer/business-logic/non-service-lib/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { customerScreensList } from '@constants/customerScreens';

const ProvideDetail: React.FC<
  NativeStackScreenProps<customerScreensList, 'ProvideDetail'>
> = ({ route, navigation }) => {
  const { currentOrderService: service } = useCurrentOrderService();
  const { navigateToScreenInSameStack } = useAuthNavigation();
  const { data: serviceDetail } = useGetServiceDetail(service?.id ?? '0');
  const { onGenerateUI, getForm } = useServiceRequirementsUI({
    requirements: serviceDetail?.requirements ?? [],
    additionalRequirements: serviceDetail?.additionalRequirements ?? [],
  });
  const { handleSubmit } = getForm();

  const handlePressNext = (data: FieldValues) => {
    if (!service) {
      console.error('ERROR: Service is undefined ProvideDetail');
    } else {
      onSetPostOrderServiceContent({
        serviceContent: { ...data, serviceTypeId: service.id },
      });
      navigateToScreenInSameStack('ProvideDate');
    }
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

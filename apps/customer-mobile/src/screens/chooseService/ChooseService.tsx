import { View } from 'react-native';
import React from 'react';
import { ChooseServiceProps } from '../../config';
import { provideDetailStyle } from './styles';
import { useGetCategoryDetail } from '@business-layer/business-logic/lib/category';
import {
  CommonLink,
  PrimaryTitle,
  VerticalSpacer,
} from '@present-native/atoms';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { ServicesList } from '@present-native/molecules';

const ChooseService: React.FC<ChooseServiceProps> = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const { data: categoryDetail } = useGetCategoryDetail(categoryId);

  const handleSelectService = (serviceId: string) => {
    navigation.navigate('ProvideDetail', { serviceId });
  };

  return (
    <CustomerTemplate>
      <View style={{ width: '100%', height: 150 }} />
      <View style={provideDetailStyle.container}>
        <View>
          <PrimaryTitle theme="primaryBold">
            Dịch vụ bạn muốn sử dụng
          </PrimaryTitle>
          <VerticalSpacer size="xs" />
          {categoryDetail && Array.isArray(categoryDetail.serviceTypes) ? (
            categoryDetail.serviceTypes.length > 0 ? (
              <ServicesList
                services={categoryDetail.serviceTypes}
                onSelectService={handleSelectService}
              />
            ) : null
          ) : null}
        </View>
        <VerticalSpacer size="xxxl" />
        <CommonLink
          theme="underline"
          size="small"
          title="Không tìm thấy loại hình bạn muốn?"
          align="center"
          toScreen=""
        />
      </View>
    </CustomerTemplate>
  );
};

export default ChooseService;

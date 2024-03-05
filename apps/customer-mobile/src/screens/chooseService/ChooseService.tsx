import { View } from 'react-native';
import React from 'react';
import { ChooseServiceProps } from '../../config';
import { provideDetailStyle } from './styles';
import {
  useCurrentOrderCategory,
  useCurrentOrderService,
  useGetCategoryDetail,
} from '@business-layer/business-logic/lib/category';
import { CommonLink, Title, VerticalSpacer } from '@present-native/atoms';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { BannerTopSection, ServicesList } from '@present-native/molecules';
import { IService } from '@business-layer/services/entities/service';

const ChooseService: React.FC<ChooseServiceProps> = ({ route, navigation }) => {
  const { currentOrderCategory: category } = useCurrentOrderCategory();
  const { setCurrentOrderService } = useCurrentOrderService();
  const { data: categoryDetail } = useGetCategoryDetail(category?.id ?? '0');

  const handleSelectService = (service: IService) => {
    setCurrentOrderService({ service });
    navigation.navigate('ProvideDetail');
  };

  return (
    <CustomerTemplate>
      <BannerTopSection
        url={category?.image ?? '#'}
        title={`DỊCH VỤ ${category?.name.toUpperCase()}`}
        subtitle={category?.description ?? ''}
      />
      <VerticalSpacer size="xxl" />
      <View style={provideDetailStyle.container}>
        <View>
          <Title theme="baseBold" color="primary">
            Dịch vụ bạn muốn sử dụng
          </Title>
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

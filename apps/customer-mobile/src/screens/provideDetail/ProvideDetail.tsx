import { View } from 'react-native';
import React from 'react';
import { ProvideDetailProps } from '../../config';
import { provideDetailStyle } from './styles';
import {
  useGetCategoryDetail,
  useServiceRequirementsUI,
} from '@business-layer/business-logic/lib/category';
import { testDataInput, testSwitch } from './__mock__';
import {
  PrimaryScrollView,
  PrimaryTitle,
  VerticalSpacer,
} from '@present-native/atoms';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { ServiceCircleButtonWithLabel } from '@present-native/molecules';
import { windowWidth } from '@constants/dimension';
import { screenHorizontalPadding } from '@present-native/styles';
import { GridLayout } from '@present-native/templates/GridLayout';

const DISPLAYED_SERVICES = 4;
const SERVICES_GAP = 12;

const ProvideDetail: React.FC<ProvideDetailProps> = ({ route, navigation }) => {
  const { onGenerateUI } = useServiceRequirementsUI();
  const { categoryId } = route.params;
  const { data: categoryDetail } = useGetCategoryDetail(categoryId);

  return (
    <CustomerTemplate>
      <View style={{ width: '100%', height: 150 }} />
      <View style={provideDetailStyle.container}>
        <View>
          <PrimaryTitle theme="primaryBold">
            Loại hình nhà ở của bạn
          </PrimaryTitle>
          <VerticalSpacer size="l" />
          <PrimaryScrollView direction="horizontal">
            {/* <View style={provideDetailStyle.serviceList}> */}
            {categoryDetail && Array.isArray(categoryDetail.serviceTypes) ? (
              categoryDetail.serviceTypes.length > 0 ? (
                <GridLayout
                  numColumns={DISPLAYED_SERVICES}
                  gap="l"
                  data={categoryDetail.serviceTypes}
                  renderItem={(st) => (
                    <ServiceCircleButtonWithLabel
                      serviceImageUrl={st.item.image}
                      serviceName={st.item.name}
                      width={
                        (windowWidth -
                          screenHorizontalPadding * 2 -
                          SERVICES_GAP * DISPLAYED_SERVICES) /
                        DISPLAYED_SERVICES
                      }
                      key={st.item.id}
                    />
                  )}
                />
              ) : null
            ) : null}
            {/* </View> */}
          </PrimaryScrollView>
          {onGenerateUI({
            requirements: testDataInput,
            additionalRequirements: testSwitch,
          })}
        </View>
      </View>
    </CustomerTemplate>
  );
};

export default ProvideDetail;

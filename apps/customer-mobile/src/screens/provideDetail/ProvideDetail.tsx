import { View } from 'react-native';
import React from 'react';
import { ProvideDetailProps } from '../../config';
import {
  useGetServiceDetail,
  useServiceRequirementsUI,
} from '@business-layer/business-logic/lib/category';

const ProvideDetail: React.FC<ProvideDetailProps> = ({ route, navigation }) => {
  const { serviceId } = route.params;
  const { data: serviceDetail } = useGetServiceDetail(serviceId);
  const { onGenerateUI } = useServiceRequirementsUI();
  console.log(serviceDetail);
  return (
    <View>
      {serviceDetail
        ? onGenerateUI({
            requirements: serviceDetail.requirements,
            additionalRequirements: serviceDetail.additionalRequirements,
          })
        : null}
    </View>
  );
};

export default ProvideDetail;

import { View } from 'react-native';
import React from 'react';
import { ProvideDetailProps } from '../../config';
import { provideDetailStyle } from './styles';
import { useServiceRequirementsUI } from '@business-layer/business-logic/lib/category';
import { testDataInput, testSwitch } from './__mock__';
import { PrimaryTitle } from '@present-native/atoms';

const ProvideDetail: React.FC<ProvideDetailProps> = ({ route, navigation }) => {
  const { onGenerateUI } = useServiceRequirementsUI();
  const { categoryId } = route.params;
  console.log('PAGE: ', categoryId);
  return (
    <View style={provideDetailStyle.container}>
      <View>
        <PrimaryTitle theme="primary">Loại hình nhà ở của bạn</PrimaryTitle>
        <View />
        {onGenerateUI({
          requirements: testDataInput,
          additionalRequirements: testSwitch,
        })}
      </View>
    </View>
  );
};

export default ProvideDetail;

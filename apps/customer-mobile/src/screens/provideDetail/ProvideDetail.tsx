import { View } from 'react-native';
import React from 'react';
import { ProvideDetailProps } from '../../config';
import { provideDetailStyle } from './styles';
import { useServiceRequirementsUI } from '@business-layer/business-logic/lib/category';
import { testDataInput, testSwitch } from './__mock__';

const ProvideDetail: React.FC<ProvideDetailProps> = ({ route, navigation }) => {
  const { onGenerateUI } = useServiceRequirementsUI();
  const { categoryId } = route.params;
  console.log('PAGE: ', categoryId);
  return (
    <View style={provideDetailStyle.container}>
      {onGenerateUI({
        requirements: testDataInput,
        additionalRequirements: testSwitch,
      })}
    </View>
  );
};

export default ProvideDetail;

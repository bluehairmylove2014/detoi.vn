import { View } from 'react-native';
import React from 'react';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { summaryStyles } from './styles';
import { Paragraph, Title } from '@present-native/atoms';

const Summary = () => {
  return (
    <CustomerTemplate>
      <View>
        <View>{/* TOP LABEL */}</View>
        <View style={summaryStyles.container}>
          {/* Location */}
          <View>
            <View style={summaryStyles.locationTitleContainer}>
              <Title theme="baseBold" color="primary">
                Địa điểm:
              </Title>
              <Paragraph theme="baseBold">Lottle Cinema Thủ Đức</Paragraph>
            </View>
            <Paragraph theme="smallMedium">
              Joy Citipoint, Quốc Lộ 1A, KCX Linh Trung, KP.4, Thủ Đức, Hồ Chí
              Minh
            </Paragraph>
            <Paragraph theme="smallMedium">
              257/43 Phòng 2014 Căn hộ Sunrise Continent
            </Paragraph>
          </View>
        </View>
      </View>
    </CustomerTemplate>
  );
};

export default Summary;

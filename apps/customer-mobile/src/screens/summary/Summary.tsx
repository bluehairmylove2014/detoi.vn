import { View } from 'react-native';
import React from 'react';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { summaryStyles } from './styles';
import { Paragraph, Title, TransparentView } from '@present-native/atoms';

const Summary = () => {
  return (
    <CustomerTemplate>
      <View>
        <TransparentView theme="vertical" />
        <View>{/* TOP LABEL */}</View>
        <View style={summaryStyles.container}>
          {/* Location */}
          <View>
            <View style={summaryStyles.locationTitleContainer}>
              <Paragraph theme="largeBold" color="primary">
                Địa điểm:
              </Paragraph>
              <Paragraph theme="largeBold" lineNumber={1}>
                Lottle Cinema Thủ Đức
              </Paragraph>
            </View>
            <Paragraph theme="baseMedium" lineNumber={1}>
              Joy Citipoint, Quốc Lộ 1A, KCX Linh Trung, KP.4, Thủ Đức, Hồ Chí
              Minh
            </Paragraph>
            <Paragraph theme="baseMedium" lineNumber={1}>
              257/43 Phòng 2014 Căn hộ Sunrise Continent
            </Paragraph>
          </View>
        </View>
      </View>
    </CustomerTemplate>
  );
};

export default Summary;

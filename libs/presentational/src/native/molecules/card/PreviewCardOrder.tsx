import { View, Text } from 'react-native';
import React from 'react';
import { IOrderDetail } from '@business-layer/services/entities';
import { previewCardOrderStyles } from './styles';
import { CircleImage, Paragraph, VerticalSpacer } from '@present-native/atoms';
import { distanceBetweenPoints } from '@utils/helpers';

type props = {
  orderDetail: IOrderDetail;
};
export const PreviewCardOrder: React.FC<props> = ({ orderDetail }) => {
  return (
    <View style={previewCardOrderStyles.container}>
      <View style={previewCardOrderStyles.orderImageWrapper}>
        <CircleImage
          source={{
            uri: orderDetail.serviceTypes[0].image,
          }}
        />
        <VerticalSpacer size="m" />
        <Paragraph theme="smallRegular" align="center" color="black">
          {distanceBetweenPoints(
            { lat: 10.823, lon: 106.6296 },
            { lat: orderDetail.address.lat, lon: orderDetail.address.lon }
          )}
        </Paragraph>
      </View>
      <View style={previewCardOrderStyles.orderDetailContainer}>
        <Paragraph theme="baseBold" align="left" color="black" lineNumber={1}>
          {orderDetail.serviceTypes[0].name}
        </Paragraph>
        <Paragraph
          theme="smallRegular"
          align="left"
          color="black"
          lineNumber={1}
        >
          {orderDetail.address.addressLine}
        </Paragraph>
        <Paragraph
          theme="smallRegular"
          align="left"
          color="black"
          lineNumber={1}
        >
          {orderDetail.startDate}
        </Paragraph>
      </View>
    </View>
  );
};

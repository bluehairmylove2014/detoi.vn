import { View, SafeAreaView } from 'react-native';
import React from 'react';
import { IOrderDetail } from '@business-layer/services/entities';
import { headerWithOrderStyles } from './styles';
import { CircleImage, Paragraph, Title } from '@present-native/atoms';
import { formatDate } from '@utils/helpers';
import { commonShadow } from '@present-native/styles';

type headerWithOrderProps = {
  orderData: IOrderDetail | undefined;
};
export const HeaderWithOrder: React.FC<headerWithOrderProps> = ({
  orderData,
}) => {
  return (
    <View style={[headerWithOrderStyles.container, commonShadow.top]}>
      <View style={headerWithOrderStyles.safeContainer}>
        {orderData ? (
          <>
            <View style={headerWithOrderStyles.imageContainer}>
              <CircleImage
                source={{
                  uri: orderData.serviceTypes
                    ? orderData.serviceTypes[0].image
                    : '',
                }}
              />
            </View>
            <View style={headerWithOrderStyles.orderDetailTextContainer}>
              <Title theme="baseBold" lineNumber={1}>
                {orderData.serviceTypes
                  ? orderData.serviceTypes[0].description
                  : 'Không có tên dịch vụ'}
              </Title>
              <Paragraph theme="smallRegular" lineNumber={1}>
                {orderData.address.addressLine}
              </Paragraph>
              <Paragraph theme="smallRegular" lineNumber={1}>
                {orderData.startTime.substring(0, 5)} |{' '}
                {formatDate(orderData.startDate).days},{' '}
                {formatDate(orderData.startDate).dateMonthYear}
              </Paragraph>
              <Paragraph
                theme="smallRegular"
                lineNumber={1}
                decoration="underline"
              >
                Cần hỗ trợ?
              </Paragraph>
            </View>
          </>
        ) : (
          <>
            <Paragraph theme="baseBold" color="black">
              Đang lấy thông tin đơn...
            </Paragraph>
          </>
        )}
      </View>
    </View>
  );
};

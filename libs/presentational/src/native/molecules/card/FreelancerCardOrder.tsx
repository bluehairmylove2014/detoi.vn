import { ImageBackground, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { IOrderDetail } from '@business-layer/services/entities';
import { freelancerCardOrderStyles } from './styles';
import { OverlayColor, Paragraph } from '@present-native/atoms';
import emptyOrderImg from '@assets/no-order.jpg';
import { formatCurrency, timeUntilStart } from '@utils/helpers';

type props = {
  orderData: IOrderDetail | undefined | null;
  width?: any;
};
export const FreelancerCardOrder: React.FC<props> = ({
  orderData,
  width = '100%',
}) => {
  const [orderStatus, setOrderStatus] = useState<string>(
    'Đang lấy dữ liệu đơn...'
  );
  const [{ hours, minutes }, setTimeUntilStart] = useState({
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    if (orderData === null) {
      setOrderStatus('Sắp tới không có đơn!');
    } else if (orderData) {
      setTimeUntilStart(
        timeUntilStart(orderData.startDate, orderData.startTime)
      );
    }
  }, [orderData]);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={freelancerCardOrderStyles.container}
    >
      <ImageBackground
        source={
          orderData ? { uri: orderData.serviceTypes[0].image } : emptyOrderImg
        }
        style={[freelancerCardOrderStyles.imgBackground, { width }]}
        resizeMode="cover"
      >
        {orderData ? (
          <View style={freelancerCardOrderStyles.marginView}>
            <OverlayColor theme="black-gradient-top-bottom">
              <View style={freelancerCardOrderStyles.topTextView}>
                <View>
                  {hours > 0 ? (
                    <>
                      <Paragraph theme="smallBold" color="white">
                        Còn{' '}
                        <Paragraph
                          theme="smallBold"
                          color="secondary"
                          lineNumber={1}
                        >
                          {hours} giờ {minutes} phút
                        </Paragraph>
                      </Paragraph>
                      <Paragraph theme="smallBold" color="white" lineNumber={1}>
                        Cho tới giờ làm
                      </Paragraph>
                    </>
                  ) : (
                    <>
                      <Paragraph theme="smallBold" color="white">
                        Đã qua giờ làm{' '}
                        <Paragraph
                          theme="smallBold"
                          color="secondary"
                          lineNumber={1}
                        >
                          {Math.abs(hours)} giờ {Math.abs(minutes)} phút
                        </Paragraph>
                      </Paragraph>
                    </>
                  )}
                </View>
              </View>
            </OverlayColor>
          </View>
        ) : (
          <View />
        )}
        <View style={freelancerCardOrderStyles.marginView}>
          <OverlayColor theme="black-gradient-bottom-top">
            <View style={freelancerCardOrderStyles.bottomTextView}>
              {orderData ? (
                <>
                  <View style={{ flexShrink: 1 }}>
                    <Paragraph theme="smallMedium" color="white" lineNumber={1}>
                      {orderData.address.addressLine}
                    </Paragraph>

                    <Paragraph
                      theme="smallBold"
                      color="secondary"
                      lineNumber={1}
                    >
                      {orderData.serviceTypes[0].name}
                    </Paragraph>
                  </View>
                  <View
                    style={{
                      flexGrow: 1,
                      display: 'flex',
                      justifyContent: 'flex-end',
                      flexDirection: 'row',
                    }}
                  >
                    <Paragraph
                      theme="baseBold"
                      decoration="underline"
                      color="white"
                      lineNumber={1}
                    >
                      {formatCurrency(orderData.estimatedPrice, 'vnd')}
                    </Paragraph>
                  </View>
                </>
              ) : (
                <Paragraph theme="smallBold" color="white" lineNumber={1}>
                  {orderStatus}
                </Paragraph>
              )}
            </View>
          </OverlayColor>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

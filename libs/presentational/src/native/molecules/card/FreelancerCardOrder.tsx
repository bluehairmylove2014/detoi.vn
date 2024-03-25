import { ImageBackground, TouchableOpacity, View } from 'react-native';
import React from 'react';
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
                  <Paragraph theme="smallBold" color="white">
                    Còn{' '}
                    <Paragraph
                      theme="smallBold"
                      color="secondary"
                      lineNumber={1}
                    >
                      {timeUntilStart(orderData.startDate, orderData.startTime)}
                    </Paragraph>
                  </Paragraph>
                  <Paragraph theme="smallBold" color="white" lineNumber={1}>
                    Cho tới giờ làm
                  </Paragraph>
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
                  Không có đơn nào!
                </Paragraph>
              )}
            </View>
          </OverlayColor>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

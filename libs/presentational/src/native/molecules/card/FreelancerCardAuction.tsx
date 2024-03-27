import { ImageBackground, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { IOrderDetail } from '@business-layer/services/entities';
import { freelancerCardAuctionStyles } from './styles';
import { OverlayColor, Paragraph } from '@present-native/atoms';
import emptyOrderImg from '@assets/no-order.jpg';
import { formatCurrency, timeUntilStart } from '@utils/helpers';
import { COLOR_PALETTE } from '@present-native/styles';

export enum TypeAuction {
  NO_RESULT,
  REJECTED,
  ABOUT_TO_EXPIRE,
}

type props = {
  orderData: IOrderDetail | undefined | null;
  width?: any;
  typeAuction: TypeAuction;
};

type HeaderCardAuctionProps = {
  orderData: IOrderDetail;
  typeAuction:
    | TypeAuction.NO_RESULT
    | TypeAuction.REJECTED
    | TypeAuction.ABOUT_TO_EXPIRE;
};

type AuctionTagProps = {
  typeTag: TypeAuction;
};

const AuctionTag = React.memo(({ typeTag }: AuctionTagProps) => {
  if (typeTag === TypeAuction.REJECTED)
    return (
      <View
        style={{
          backgroundColor: COLOR_PALETTE.rose,
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderRadius: 5,
        }}
      >
        <Paragraph theme="smallBold" color="white">
          Sẽ xoá sau 24h
        </Paragraph>
      </View>
    );
  if (typeTag === TypeAuction.ABOUT_TO_EXPIRE)
    return (
      <View
        style={{
          backgroundColor: COLOR_PALETTE.soft,
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderRadius: 5,
        }}
      >
        <Paragraph theme="smallMedium" color="black">
          Sắp hết hạn
        </Paragraph>
      </View>
    );
  return <View />;
});

export const HeaderCardAuction = React.memo(
  ({ orderData, typeAuction }: HeaderCardAuctionProps) => {
    const { hours, minutes } = timeUntilStart(
      orderData.startDate,
      orderData.startTime
    );
    return (
      <View style={freelancerCardAuctionStyles.topTextView}>
        {typeAuction === TypeAuction.REJECTED ? (
          <View>
            <Paragraph theme="smallBold" color="white">
              <Paragraph theme="smallBold" color="secondary" lineNumber={1}>
                {hours} giờ {minutes} phút
              </Paragraph>
            </Paragraph>
            <Paragraph theme="smallBold" color="white" lineNumber={1}>
              Cho tới giờ làm
            </Paragraph>
          </View>
        ) : null}
        {typeAuction === TypeAuction.ABOUT_TO_EXPIRE ? (
          <View>
            <Paragraph theme="smallBold" color="white">
              Còn{' '}
              <Paragraph theme="smallBold" color="secondary" lineNumber={1}>
                {hours} giờ {minutes} phút
              </Paragraph>
            </Paragraph>
            <Paragraph theme="smallBold" color="white" lineNumber={1}>
              Cho tới giờ làm
            </Paragraph>
          </View>
        ) : null}
        {typeAuction !== TypeAuction.REJECTED &&
        typeAuction !== TypeAuction.ABOUT_TO_EXPIRE ? (
          <View>
            <Paragraph theme="smallBold" color="white">
              Chưa có kết quả...
            </Paragraph>
          </View>
        ) : null}
        <AuctionTag typeTag={typeAuction} />
      </View>
    );
  }
);

export const FreelancerCardAuction: React.FC<props> = ({
  orderData,
  typeAuction,
  width = '100%',
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={freelancerCardAuctionStyles.container}
    >
      <ImageBackground
        source={
          orderData ? { uri: orderData.serviceTypes[0].image } : emptyOrderImg
        }
        style={[freelancerCardAuctionStyles.imgBackground, { width }]}
        resizeMode="cover"
      >
        {orderData ? (
          <View style={freelancerCardAuctionStyles.marginView}>
            <OverlayColor theme="black-gradient-top-bottom">
              <HeaderCardAuction
                orderData={orderData}
                typeAuction={typeAuction}
              />
            </OverlayColor>
          </View>
        ) : (
          <View />
        )}
        <View style={freelancerCardAuctionStyles.marginView}>
          <OverlayColor theme="black-gradient-bottom-top">
            <View style={freelancerCardAuctionStyles.bottomTextView}>
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

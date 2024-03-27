import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { freelancerScreensList } from '@constants/freelancerScreens';
import { COLOR_PALETTE, screenHorizontalPadding } from '@present-native/styles';
import FreelancerTemplate from '@present-native/templates/FreelancerTemplate';
import { FreelancerCardAuction, TypeAuction } from '@present-native/molecules';
import { useEffect, useState } from 'react';
import {
  HorizontalSpacer,
  PrimaryBtn,
  PrimaryScrollView,
  SecondaryBtn,
  VerticalSpacer,
} from '@present-native/atoms';
import { orderListMockData } from '@present-native/organisms/order/__mock__';
import { windowWidth } from '@constants/dimension';
import { IOrderDetail } from '@business-layer/services/entities';
import { timeUntilStartNoFormatString } from '@utils/helpers';
import React from 'react';
import { ORDER_STATUS_AUCTION } from '@constants/orderStatusAuction';
import { HeaderWithTitle } from '@present-native/organisms';
import { auctioningOrdersScreenStyle } from './styles';

const AuctioningOrders: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'AuctioningOrders'>
> = () => {
  const [orderList, setOrderList] = useState<IOrderDetail[]>();

  useEffect(() => {
    setTimeout(() => {
      setOrderList(orderListMockData);
    }, 2000);
  }, []);

  const cardWidth = windowWidth - screenHorizontalPadding * 2;

  const typeAuction = (od: IOrderDetail): TypeAuction => {
    if (timeUntilStartNoFormatString(od.startDate, od.startTime).hours <= 5) {
      return TypeAuction.ABOUT_TO_EXPIRE;
    }
    return TypeAuction.NO_RESULT;
  };

  const convertOrderStatus = (statusId: string): TypeAuction | 'default' => {
    switch (statusId) {
      case ORDER_STATUS_AUCTION[0].id:
        return 'default';
      case ORDER_STATUS_AUCTION[1].id:
        return TypeAuction.NO_RESULT;
      case ORDER_STATUS_AUCTION[2].id:
        return TypeAuction.ABOUT_TO_EXPIRE;
      case ORDER_STATUS_AUCTION[3].id:
        return TypeAuction.REJECTED;
      default:
        return 'default';
    }
  };

  const [currentOrderStatusAuction, setCurrentOrderStatusAuction] = useState(
    ORDER_STATUS_AUCTION[0]
  );

  const orderListFiltered = (orderList: IOrderDetail[]) => {
    return orderList.filter(
      (od) =>
        timeUntilStartNoFormatString(od.startDate, od.startTime).hours > 0 &&
        (currentOrderStatusAuction.id === ORDER_STATUS_AUCTION[0].id ||
          convertOrderStatus(currentOrderStatusAuction.id) === typeAuction(od))
    );
  };

  function handleChangeFilter(criteria: { id: string; name: string }) {
    setCurrentOrderStatusAuction(criteria);
  }

  return (
    <FreelancerTemplate>
      <SafeAreaView style={auctioningOrdersScreenStyle.container}>
        <HeaderWithTitle title="ĐƠN ĐANG ĐẤU GIÁ" />
        <VerticalSpacer size="xl" />
        <PrimaryScrollView direction="horizontal">
          {ORDER_STATUS_AUCTION.map((sc) =>
            sc.id === currentOrderStatusAuction.id ? (
              <React.Fragment key={sc.id}>
                <PrimaryBtn
                  title={sc.name}
                  onPress={() => handleChangeFilter(sc)}
                  fontSize="small"
                  radius="full"
                  isFitContent={true}
                />
                <HorizontalSpacer size="m" />
              </React.Fragment>
            ) : (
              <React.Fragment key={sc.id}>
                <SecondaryBtn
                  key={sc.id}
                  title={sc.name}
                  onPress={() => handleChangeFilter(sc)}
                  fontSize="small"
                  radius="full"
                  isFitContent={true}
                />
                <HorizontalSpacer size="m" />
              </React.Fragment>
            )
          )}
        </PrimaryScrollView>
        <VerticalSpacer size="xl" />
        <View style={auctioningOrdersScreenStyle.cardWrapper}>
          {Array.isArray(orderList) && orderList.length > 0 ? (
            orderListFiltered(orderList).map((od) => (
              <FreelancerCardAuction
                width={cardWidth}
                orderData={od}
                key={od.id}
                typeAuction={typeAuction(od) as TypeAuction}
              />
            ))
          ) : orderList === undefined ? (
            <ActivityIndicator color={COLOR_PALETTE.primary} size={'large'} />
          ) : (
            <FreelancerCardAuction
              width={cardWidth}
              orderData={null}
              typeAuction={TypeAuction.NO_RESULT}
            />
          )}
        </View>
      </SafeAreaView>
    </FreelancerTemplate>
  );
};

export default AuctioningOrders;

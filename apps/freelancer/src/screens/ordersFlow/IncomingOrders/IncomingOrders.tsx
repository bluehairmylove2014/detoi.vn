import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { freelancerScreensList } from '@constants/freelancerScreens';
import { COLOR_PALETTE, screenHorizontalPadding } from '@present-native/styles';
import FreelancerTemplate from '@present-native/templates/FreelancerTemplate';
import { FreelancerCardOrder } from '@present-native/molecules';
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
import { HeaderWithTitle } from '@present-native/organisms';
import React from 'react';
import { ORDER_STATUS_INCOMING } from '@constants/orderStatusIncoming';
import { incomingOrdersScreenStyle } from './styles';

const IncomingOrders: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'IncomingOrders'>
> = () => {
  const [orderList, setOrderList] = useState<IOrderDetail[]>();
  useEffect(() => {
    setTimeout(() => {
      setOrderList(orderListMockData);
    }, 2000);
  }, []);

  const cardWidth = windowWidth - screenHorizontalPadding * 2;

  const orderListFiltered = (orderList: IOrderDetail[]) => {
    return orderList.filter(
      (od) => timeUntilStartNoFormatString(od.startDate, od.startTime).hours > 0
    );
  };
  const [currentOrderStatusAuction, setCurrentOrderStatusAuction] = useState(
    ORDER_STATUS_INCOMING[0]
  );
  function handleChangeFilter(criteria: { id: string; name: string }) {
    setCurrentOrderStatusAuction(criteria);
  }
  return (
    <FreelancerTemplate>
      <SafeAreaView style={incomingOrdersScreenStyle.container}>
        <HeaderWithTitle title="ĐƠN ĐANG ĐẤU GIÁ" />
        <VerticalSpacer size="xl" />
        <PrimaryScrollView direction="horizontal">
          {ORDER_STATUS_INCOMING.map((sc) =>
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
        <View style={incomingOrdersScreenStyle.cardWrapper}>
          {Array.isArray(orderList) && orderList.length > 0 ? (
            orderListFiltered(orderList).map((od) => (
              <FreelancerCardOrder
                width={cardWidth}
                orderData={od}
                key={od.id}
              />
            ))
          ) : orderList === undefined ? (
            <ActivityIndicator color={COLOR_PALETTE.primary} size={'large'} />
          ) : (
            <FreelancerCardOrder width={cardWidth} orderData={null} />
          )}
        </View>
      </SafeAreaView>
    </FreelancerTemplate>
  );
};

export default IncomingOrders;

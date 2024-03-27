import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { freelancerScreensList } from '@constants/freelancerScreens';
import { COLOR_PALETTE, screenHorizontalPadding } from '@present-native/styles';
import FreelancerTemplate from '@present-native/templates/FreelancerTemplate';
import { FreelancerCardOrder } from '@present-native/molecules';
import { useState } from 'react';
import { PrimaryScrollView, VerticalSpacer } from '@present-native/atoms';
import { windowWidth } from '@constants/dimension';
import { IOrderDetail } from '@business-layer/services/entities';
import { timeUntilStart } from '@utils/helpers';
import { HeaderWithTitle } from '@present-native/organisms';
import React from 'react';
import { ORDER_STATUS_INCOMING } from '@constants/orderStatusIncoming';
import { incomingOrdersScreenStyle } from './styles';
import { useGetFreelancerIncomingOrders } from '@business-layer/business-logic/lib/order';
import EmptyBoxWithLabel from '@present-native/molecules/empty/EmptyBoxWithLabel';
import OnPressCustomControlBar from '@present-native/molecules/controlBar/OnPressCustomControlBar';

const cardWidth = windowWidth - screenHorizontalPadding * 2;

const IncomingOrders: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'IncomingOrders'>
> = () => {
  const { data: orderList } = useGetFreelancerIncomingOrders();

  const orderListFiltered = (orderList: IOrderDetail[]) => {
    return orderList.filter(
      (od) => timeUntilStart(od.startDate, od.startTime).hours > 0
    );
  };
  const [currentOrderStatusIncoming, setCurrentOrderStatusIncoming] = useState(
    ORDER_STATUS_INCOMING[0]
  );
  function handleChangeFilter(criteria: { id: string; name: string }) {
    setCurrentOrderStatusIncoming(criteria);
  }
  return (
    <FreelancerTemplate>
      <View style={incomingOrdersScreenStyle.safeAreaContainer}>
        <SafeAreaView>
          <HeaderWithTitle title="ĐƠN SẮP TỚI" />
          <VerticalSpacer size="xl" />
          <PrimaryScrollView direction="horizontal">
            <OnPressCustomControlBar
              onPress={handleChangeFilter}
              itemList={ORDER_STATUS_INCOMING}
              activeItemId={currentOrderStatusIncoming.id}
            />
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
              <EmptyBoxWithLabel />
            )}
          </View>
        </SafeAreaView>
      </View>
    </FreelancerTemplate>
  );
};

export default IncomingOrders;

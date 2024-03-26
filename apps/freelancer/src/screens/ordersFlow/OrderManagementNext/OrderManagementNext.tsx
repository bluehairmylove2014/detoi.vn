import { ActivityIndicator, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { freelancerScreensList } from '@constants/freelancerScreens';
import {
  COLOR_PALETTE,
  screenHorizontalPadding,
  screenVerticalPadding,
} from '@present-native/styles';
import FreelancerTemplate from '@present-native/templates/FreelancerTemplate';
import { FreelancerCardOrder, TabList } from '@present-native/molecules';
import { useEffect, useState } from 'react';
import { BackButton, Title, VerticalSpacer } from '@present-native/atoms';
import { orderListMockData } from '@present-native/organisms/order/__mock__';
import { windowWidth } from '@constants/dimension';
import { IOrderDetail } from '@business-layer/services/entities';
import { timeUntilStartNoFormatString } from '@utils/helpers';

enum OrderTab {
  NEWEST,
  OLDEST,
  NEAREST,
  COMING,
}

type TabListContentProps = {
  label: string;
  value: OrderTab | 'default';
};

const OrderManagementNext: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'OrderManagementNext'>
> = () => {
  const tabListContent: TabListContentProps[] = [
    { label: 'Mới nhất', value: OrderTab.NEWEST },
    { label: 'Cũ nhất', value: OrderTab.OLDEST },
    { label: 'Vị trí gần nhất', value: OrderTab.NEAREST },
    { label: 'Sắp tới', value: OrderTab.COMING },
  ];
  const [indexSelectedTab, setIndexSelectedTab] = useState<number>(0);
  const [orderList, setOrderList] = useState<IOrderDetail[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOrderList(orderListMockData);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const cardWidth =
    windowWidth - screenHorizontalPadding * (orderList.length > 1 ? 3 : 2);

  const orderListFiltered = (orderList: IOrderDetail[]) => {
    return orderList.filter(
      (od) => timeUntilStartNoFormatString(od.startDate, od.startTime).hours > 0
    );
  };

  return (
    <FreelancerTemplate>
      <View
        style={{
          paddingHorizontal: screenHorizontalPadding,
          paddingVertical: screenVerticalPadding,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <BackButton color="primary" />
          <Title align="center" theme="baseMedium" color="primary">
            ĐƠN SẮP TỚI
          </Title>
          <View />
        </View>
        <VerticalSpacer size="l" />
        <TabList
          tabListContent={tabListContent.map(
            (item: TabListContentProps) => item.label
          )}
          indexSelectedTab={indexSelectedTab}
          setIndexSelectedTab={setIndexSelectedTab}
        />
        <VerticalSpacer size="l" />
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 15,
          }}
        >
          {Array.isArray(orderList) && orderList.length > 0 ? (
            orderListFiltered(orderList).map((od) => (
              <FreelancerCardOrder
                width={cardWidth}
                orderData={od}
                key={od.id}
              />
            ))
          ) : !isLoading ? (
            <FreelancerCardOrder width={cardWidth} orderData={null} />
          ) : (
            <ActivityIndicator color={COLOR_PALETTE.primary} size={'large'} />
          )}
        </View>
        <View></View>
      </View>
    </FreelancerTemplate>
  );
};

export default OrderManagementNext;

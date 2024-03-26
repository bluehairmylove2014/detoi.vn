import { ActivityIndicator, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { freelancerScreensList } from '@constants/freelancerScreens';
import {
  COLOR_PALETTE,
  screenHorizontalPadding,
  screenVerticalPadding,
} from '@present-native/styles';
import FreelancerTemplate from '@present-native/templates/FreelancerTemplate';
import {
  FreelancerCardAuction,
  TabList,
  TypeAuction,
} from '@present-native/molecules';
import { useEffect, useState } from 'react';
import { BackButton, Title, VerticalSpacer } from '@present-native/atoms';
import { orderListMockData } from '@present-native/organisms/order/__mock__';
import { windowWidth } from '@constants/dimension';
import { IOrderDetail } from '@business-layer/services/entities';
import { timeUntilStartNoFormatString } from '@utils/helpers';

type TabListContentProps = {
  label: string;
  value: TypeAuction | 'default';
};

const OrderManagement: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'OrderManagement'>
> = () => {
  const tabListContent: TabListContentProps[] = [
    { label: 'Mới nhất', value: 'default' },
    { label: 'Đang chờ', value: TypeAuction.NO_RESULT },
    { label: 'Sắp hết hạn', value: TypeAuction.ABOUT_TO_EXPIRE },
    { label: 'Bị từ chối', value: TypeAuction.REJECTED },
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

  const typeAuction = (od: IOrderDetail): TypeAuction => {
    if (timeUntilStartNoFormatString(od.startDate, od.startTime).hours < 24) {
      return TypeAuction.ABOUT_TO_EXPIRE;
    }
    return TypeAuction.NO_RESULT;
  };

  const orderListFiltered = (orderList: IOrderDetail[]) => {
    return orderList.filter(
      (od) =>
        timeUntilStartNoFormatString(od.startDate, od.startTime).hours > 0 &&
        (tabListContent[indexSelectedTab].value === 'default' ||
          tabListContent[indexSelectedTab].value === typeAuction(od))
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
            ĐƠN ĐANG ĐẤU GIÁ
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
              <FreelancerCardAuction
                width={cardWidth}
                orderData={od}
                key={od.id}
                typeAuction={typeAuction(od) as TypeAuction}
              />
            ))
          ) : !isLoading ? (
            <FreelancerCardAuction
              width={cardWidth}
              orderData={null}
              typeAuction={TypeAuction.NO_RESULT}
            />
          ) : (
            <ActivityIndicator color={COLOR_PALETTE.primary} size={'large'} />
          )}
        </View>
        <View></View>
      </View>
    </FreelancerTemplate>
  );
};

export default OrderManagement;

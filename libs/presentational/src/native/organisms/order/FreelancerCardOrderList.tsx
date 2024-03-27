import { View } from 'react-native';
import { FreelancerCardOrder } from '@present-native/molecules/card';
import { freelancerCardOrderListStyles } from './styles';
import { PrimaryScrollView } from '@present-native/atoms/scroll';
import { windowWidth } from '@constants/dimension';
import { screenHorizontalPadding } from '@present-native/styles';
import { IOrderDetail } from '@business-layer/services/entities';
import { useEffect, useState } from 'react';

type props = {
  orders: IOrderDetail[] | undefined;
};
export const FreelancerCardOrderList: React.FC<props> = ({ orders }) => {
  const [cardWidth, setCardWidth] = useState<number>(
    windowWidth - screenHorizontalPadding * 2
  );

  useEffect(() => {
    if (Array.isArray(orders)) {
      setCardWidth(
        windowWidth - screenHorizontalPadding * (orders.length > 1 ? 3 : 2)
      );
    }
  }, [orders]);
  return (
    <PrimaryScrollView direction="horizontal">
      <View style={freelancerCardOrderListStyles.container}>
        {typeof orders === 'undefined' ? (
          <FreelancerCardOrder width={cardWidth} orderData={undefined} />
        ) : orders.length === 0 ? (
          <FreelancerCardOrder width={cardWidth} orderData={null} />
        ) : (
          orders.map((od) => (
            <FreelancerCardOrder width={cardWidth} orderData={od} key={od.id} />
          ))
        )}
      </View>
    </PrimaryScrollView>
  );
};

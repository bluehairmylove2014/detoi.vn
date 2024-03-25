import { View } from 'react-native';
import { FreelancerCardOrder } from '@present-native/molecules/card';
import { freelancerCardOrderListStyles } from './styles';
import { PrimaryScrollView } from '@present-native/atoms/scroll';
import { windowWidth } from '@constants/dimension';
import { screenHorizontalPadding } from '@present-native/styles';
import { orderListMockData } from './__mock__';

export const FreelancerCardOrderList = () => {
  const orderList = orderListMockData;
  const cardWidth =
    windowWidth - screenHorizontalPadding * (orderList.length > 1 ? 3 : 2);
  return (
    <PrimaryScrollView direction="horizontal">
      <View style={freelancerCardOrderListStyles.container}>
        {Array.isArray(orderList) && orderList.length > 0 ? (
          orderList.map((od) => (
            <FreelancerCardOrder width={cardWidth} orderData={od} key={od.id} />
          ))
        ) : (
          <FreelancerCardOrder width={cardWidth} orderData={null} />
        )}
      </View>
    </PrimaryScrollView>
  );
};

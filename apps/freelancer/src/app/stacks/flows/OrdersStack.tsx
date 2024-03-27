import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { freelancerOrdersListStackParams } from '@constants/freelancerScreens';

// Import screen component here
import OrdersListScreen from '../../../screens/ordersFlow/OrdersList/OrdersList';
import AuctioningOrdersScreen from '../../../screens/ordersFlow/AuctioningOrders/AuctioningOrders';
import IncomingOrdersScreen from '../../../screens/ordersFlow/IncomingOrders/IncomingOrders';

const Stack = createNativeStackNavigator<freelancerOrdersListStackParams>();
export const OrdersStack = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <Stack.Navigator initialRouteName="OrdersList">
      {/* Then, put stack.screen for your screen component here (in the end) */}
      <Stack.Screen
        component={OrdersListScreen}
        name="OrdersList"
        options={{ headerShown: false }}
      />
     
      {isLogged ? (
        <Stack.Group key={'order-auth'} screenOptions={{ headerShown: false }}>
          <Stack.Screen
            component={IncomingOrdersScreen}
            name="IncomingOrders"
          />
          <Stack.Screen
            component={AuctioningOrdersScreen}
            name="AuctioningOrders"
          />
        </Stack.Group>
      ) : null}
    </Stack.Navigator>
  );
};

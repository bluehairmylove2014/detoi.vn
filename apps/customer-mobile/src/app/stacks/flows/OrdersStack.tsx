import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { customerOrdersListStackParams } from '@constants/customerScreens';

// Import screen component here
import OrdersListScreen from '../../../screens/ordersFlow/OrdersList/OrdersList';

const Stack = createNativeStackNavigator<customerOrdersListStackParams>();
export const OrdersStack = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <Stack.Navigator initialRouteName="OrdersList">
      {/* Then, put stack.screen for your screen component here (in the end) */}
      <Stack.Group
        key={'orders-non-auth'}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen component={OrdersListScreen} name="OrdersList" />
      </Stack.Group>
    </Stack.Navigator>
  );
};

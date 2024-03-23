import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { freelancerOrdersListStackParams } from '@constants/freelancerScreens';

// Import screen component here
import OrdersListScreen from '../../../screens/ordersFlow/OrdersList/OrdersList';

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
    </Stack.Navigator>
  );
};

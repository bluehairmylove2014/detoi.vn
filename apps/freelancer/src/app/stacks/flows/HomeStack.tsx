import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { freelancerHomeStackParams } from '@constants/freelancerScreens';

// Import screen component here
import HomeScreen from '../../../screens/homeFlow/home/Home';
import IntroScreen from '../../../screens/homeFlow/intro/Intro';
import ReceiveOrderSuccessScreen from '../../../screens/homeFlow/receiveOrderSuccess/ReceiveOrderSuccess';
import MarketplaceOrderDetailScreen from '../../../screens/homeFlow/marketplaceOrderDetail/MarketplaceOrderDetail';
import IncomingOrderDetailScreen from '../../../screens/homeFlow/incomingOrderDetail/IncomingOrderDetail';

const Stack = createNativeStackNavigator<freelancerHomeStackParams>();
export const HomeStack = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* Then, put stack.screen for your screen component here (in the end) */}
      <Stack.Group key={'home-non-auth'} screenOptions={{ headerShown: false }}>
        <Stack.Screen component={IntroScreen} name="Intro" />
      </Stack.Group>

      {isLogged ? (
        <Stack.Group key={'home-auth'} screenOptions={{ headerShown: false }}>
          <Stack.Screen component={HomeScreen} name="Home" />
          <Stack.Screen
            component={MarketplaceOrderDetailScreen}
            name="MarketplaceOrderDetail"
          />
          <Stack.Screen
            component={ReceiveOrderSuccessScreen}
            name="ReceiveOrderSuccess"
          />
          <Stack.Screen
            component={IncomingOrderDetailScreen}
            name="IncomingOrderDetail"
          />
        </Stack.Group>
      ) : null}
    </Stack.Navigator>
  );
};

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { customerTabParamList } from '../config';

// Import screen component here
import EndowScreen from '../screens/endow/Endow';
import MessageScreen from '../screens/message/Message';
import HomeScreen from '../screens/home/Home';
import SingleScreen from '../screens/singleService/SingleService';
import AccountScreen from '../screens/account/Account';

// Import atom molecules ...
import TabBarIcon from '@present-native/molecules/bottomTab/TabBarIcon';

export const Tab = createBottomTabNavigator<customerTabParamList>();
export const TabNavigationContainer = ({
  initRoute,
}: {
  initRoute?: keyof customerTabParamList;
}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={initRoute}
        screenOptions={{
          tabBarStyle: {
            paddingVertical: 5,
            height: 55,
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <Tab.Screen
          component={EndowScreen}
          name="Endow"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon
                focused={focused}
                iconName="faTags"
                tabBarLabel="Ưu đãi"
              />
            ),
          }}
        />
        <Tab.Screen
          component={MessageScreen}
          name="Message"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon
                focused={focused}
                iconName="faCommentDots"
                tabBarLabel="Tin nhắn"
              />
            ),
          }}
        />
        <Tab.Screen
          component={HomeScreen}
          name="Home"
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon
                focused={focused}
                iconName="faHouseFire"
                tabBarLabel="Trang chủ"
              />
            ),
          }}
        />
        <Tab.Screen
          component={SingleScreen}
          name="SingleService"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon
                focused={focused}
                iconName="faFileInvoiceDollar"
                tabBarLabel="Đơn dịch vụ"
              />
            ),
          }}
        />
        <Tab.Screen
          component={AccountScreen}
          name="Account"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon
                focused={focused}
                iconName="faUser"
                tabBarLabel="Tải khoản"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

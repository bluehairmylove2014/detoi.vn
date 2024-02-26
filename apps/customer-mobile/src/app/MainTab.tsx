import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { customerTabParamList } from '../config';

// Import screen component here
import HomeScreen from '../screens/home/Home';
import LoginScreen from '../screens/login/Login';
import { FAIcon } from '@present-native/atoms';
import { Text, View } from 'react-native';

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
          tabBarLabelStyle: {
            color: '#595753',
            marginBottom: 7,
          },
          headerShown: false,
        }}
      >
        {/* Then, put stack.screen for your screen component here (in the end) */}
        <Tab.Screen
          component={HomeScreen}
          name="Home"
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({ focused, color, size }) =>
              focused ? (
                <View
                  style={{
                    borderWidth: 1.5,
                    borderRadius: 999,
                    borderColor: '#C89300',
                    padding: 18,
                    backgroundColor: '#FFFFFF',
                    marginBottom: 30,
                  }}
                >
                  <FAIcon iconName="faTags" color={'#595753'} size={22} />
                </View>
              ) : (
                <View style={{ alignItems: 'center', gap: 3 }}>
                  <FAIcon iconName="faTags" color={'#595753'} size={20} />
                  <Text style={{ color: '#595753', fontSize: 11 }}>
                    Trang chủ
                  </Text>
                </View>
              ),
          }}
        />
        <Tab.Screen
          component={LoginScreen}
          name="Login"
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

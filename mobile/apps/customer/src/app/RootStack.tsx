import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { customerRootStackParamList } from '../config';
import HomeScreen from '../screens/home/Home';
import ChooseLocationScreen from '../screens/chooseLocation/ChooseLocation';

export const RStack = createNativeStackNavigator<customerRootStackParamList>();
export const RootNavigationContainer = ({
  initRoute,
}: {
  initRoute?: keyof customerRootStackParamList;
}) => {
  return (
    <NavigationContainer>
      <RStack.Navigator initialRouteName={initRoute}>
        <RStack.Screen component={HomeScreen} name="Home" />
        <RStack.Screen component={ChooseLocationScreen} name="ChooseLocation" />
      </RStack.Navigator>
    </NavigationContainer>
  );
};

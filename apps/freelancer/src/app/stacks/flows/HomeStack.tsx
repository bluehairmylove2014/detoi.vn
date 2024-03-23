import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { freelancerHomeStackParams } from '@constants/freelancerScreens';

// Import screen component here
import HomeScreen from '../../../screens/homeFlow/home/Home';

const Stack = createNativeStackNavigator<freelancerHomeStackParams>();
export const HomeStack = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* Then, put stack.screen for your screen component here (in the end) */}

      <Stack.Group key={'home-non-auth'} screenOptions={{ headerShown: false }}>
        <Stack.Screen component={HomeScreen} name="Home" />
      </Stack.Group>

      {/* {isLogged ? (
        <Stack.Group key={'home-auth'} screenOptions={{ headerShown: false }}>
          <Stack.Screen component={HomeScreen} name="Home" />
        </Stack.Group>
      ) : null} */}
    </Stack.Navigator>
  );
};

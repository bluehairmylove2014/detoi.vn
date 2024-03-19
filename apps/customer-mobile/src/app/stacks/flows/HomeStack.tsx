import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { customerRootStackParamList } from '../../../config';

// Import screen component here
import HomeScreen from '../../../screens/homeFlow/home/Home';
import ChooseLocationScreen from '../../../screens/homeFlow/chooseLocation/ChooseLocation';
import LoginScreen from '../../../screens/homeFlow/login/Login';
import OTPVertificationScreen from '../../../screens/homeFlow/otpVertification/OTPVertification';
import ChooseServiceScreen from '../../../screens/homeFlow/chooseService/ChooseService';
import ProvideDetailScreen from '../../../screens/homeFlow/provideDetail/ProvideDetail';
import ProvideDateScreen from '../../../screens/homeFlow/provideDate/ProvideDate';
import SummaryScreen from '../../../screens/homeFlow/summary/Summary';
import FreelanceerDetailScreen from '../../../screens/homeFlow/freelancerDetail/FreelancerDetail';
import OnServiceScreen from '../../../screens/homeFlow/onService/OnService';
import DetailImageScreen from '../../../screens/homeFlow/imageDetail/ImageDetail';
import MatchingScreen from '../../../screens/homeFlow/matching/Matching';
import RatingScreen from '../../../screens/homeFlow/rating/Rating';
import ReviewScreen from '../../../screens/homeFlow/review/Review';

const Stack = createNativeStackNavigator<customerRootStackParamList>();
export const HomeStack = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <Stack.Navigator initialRouteName="ProvideDate">
      {/* Then, put stack.screen for your screen component here (in the end) */}
      <Stack.Screen
        component={LoginScreen}
        name="Login"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={OTPVertificationScreen}
        name="OTPVertification"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={HomeScreen}
        name="Home"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={ChooseLocationScreen}
        name="ChooseLocation"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={ChooseServiceScreen}
        name="ChooseService"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={ProvideDetailScreen}
        name="ProvideDetail"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={ProvideDateScreen}
        name="ProvideDate"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={SummaryScreen}
        name="Summary"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={MatchingScreen}
        name="Matching"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={FreelanceerDetailScreen}
        name="FreelancerDetail"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={OnServiceScreen}
        name="OnService"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={DetailImageScreen}
        name="ImageDetail"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={RatingScreen}
        name="Rating"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={ReviewScreen}
        name="Review"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { customerHomeStackParams } from '@constants/customerScreens';

// Import screen component here
import HomeScreen from '../../../screens/homeFlow/home/Home';
import ChooseLocationScreen from '../../../screens/homeFlow/chooseLocation/ChooseLocation';
import ChooseServiceScreen from '../../../screens/homeFlow/chooseService/ChooseService';
import ProvideDetailScreen from '../../../screens/homeFlow/provideDetail/ProvideDetail';
import ProvideDateScreen from '../../../screens/homeFlow/provideDate/ProvideDate';
import SummaryScreen from '../../../screens/homeFlow/summary/Summary';
import FreelancerDetailScreen from '../../../screens/homeFlow/freelancerDetail/FreelancerDetail';
import OnServiceScreen from '../../../screens/homeFlow/onService/OnService';
import FreelancerServiceProvenScreen from '../../../screens/homeFlow/freelancerServiceProven/FreelancerServiceProven';
import MatchingScreen from '../../../screens/homeFlow/matching/Matching';
import RatingScreen from '../../../screens/homeFlow/rating/Rating';
import ReviewScreen from '../../../screens/homeFlow/review/Review';

const Stack = createNativeStackNavigator<customerHomeStackParams>();
export const HomeStack = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* Then, put stack.screen for your screen component here (in the end) */}

      <Stack.Group key={'home-non-auth'} screenOptions={{ headerShown: false }}>
        <Stack.Screen component={HomeScreen} name="Home" />
      </Stack.Group>
      {isLogged ? (
        <Stack.Group key={'home-auth'} screenOptions={{ headerShown: false }}>
          <Stack.Screen
            component={ChooseLocationScreen}
            name="ChooseLocation"
          />
          <Stack.Screen component={ChooseServiceScreen} name="ChooseService" />
          <Stack.Screen component={ProvideDetailScreen} name="ProvideDetail" />
          <Stack.Screen component={ProvideDateScreen} name="ProvideDate" />
          <Stack.Screen component={SummaryScreen} name="Summary" />
          <Stack.Screen component={MatchingScreen} name="Matching" />
          <Stack.Screen
            component={FreelancerDetailScreen}
            name="FreelancerDetail"
          />
          <Stack.Screen component={OnServiceScreen} name="OnService" />
          <Stack.Screen
            component={FreelancerServiceProvenScreen}
            name="FreelancerServiceProven"
          />
          <Stack.Screen component={RatingScreen} name="Rating" />
          <Stack.Screen component={ReviewScreen} name="Review" />
        </Stack.Group>
      ) : null}
    </Stack.Navigator>
  );
};

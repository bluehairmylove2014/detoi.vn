import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { freelancerTestStackParams } from '@constants/freelancerScreens';

// Import screen component here
import TestOverviewScreen from '../../../screens/testFlow/testOverview/TestOverview';
import OnTestScreen from '../../../screens/testFlow/onTest/OnTest';
import TestResultScreen from '../../../screens/testFlow/testResult/TestResult';

const Stack = createNativeStackNavigator<freelancerTestStackParams>();
export const TestStack = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <Stack.Navigator initialRouteName="OnTest">
      {/* Then, put stack.screen for your screen component here (in the end) */}
      <Stack.Group key={'test-auth'} screenOptions={{ headerShown: false }}>
        <Stack.Screen
          component={TestOverviewScreen}
          name="Test"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={OnTestScreen}
          name="OnTest"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={TestResultScreen}
          name="TestResult"
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { freelancerTestStackParams } from '@constants/freelancerScreens';

// Import screen component here
import TestPreviewScreen from '../../../screens/testFlow/testPreview/TestPreview';
import TestInProgressScreen from '../../../screens/testFlow/testInProgress/TestInProgress';
import TestResultScreen from '../../../screens/testFlow/testResult/TestResult';

const Stack = createNativeStackNavigator<freelancerTestStackParams>();
export const TestStack = () => {
  return (
    <Stack.Navigator initialRouteName="TestPreview">
      {/* Then, put stack.screen for your screen component here (in the end) */}
      <Stack.Group key={'test-auth'} screenOptions={{ headerShown: false }}>
        <Stack.Screen component={TestPreviewScreen} name="TestPreview" />
        <Stack.Screen component={TestInProgressScreen} name="TestInProgress" />
        <Stack.Screen component={TestResultScreen} name="TestResult" />
      </Stack.Group>
    </Stack.Navigator>
  );
};

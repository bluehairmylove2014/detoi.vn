import { BusinessLogicProvider } from '@business-layer/business-logic/provider/provider';
import { RootNavigationContainer } from './RootStack';
import { customerRootStackParamList, activeModules } from '../config';
import { Intro } from '@present-native/atoms';
import { useGoogleFonts } from '@business-layer/business-logic/non-service-lib/googleFont';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const isLogged = false;
  const initRoute: keyof customerRootStackParamList = isLogged
    ? 'HomeTab'
    : 'Intro';
  const { isLoading } = useGoogleFonts();

  if (isLoading) {
    return <Intro />;
  }
  return (
    <BusinessLogicProvider activeModules={activeModules}>
      <NavigationContainer>
        <RootNavigationContainer initRoute={initRoute} />
      </NavigationContainer>
    </BusinessLogicProvider>
  );
};

export default App;

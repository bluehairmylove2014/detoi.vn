import { BusinessLogicProvider } from '@business-layer/business-logic/provider/provider';
import { activeModules } from '../config/modules';
import CustomerTemplate from '@presentational/native/templates/CustomerTemplate';
import { RootNavigationContainer } from './RootStack';
import { TabNavigationContainer } from './MainTab';

const App = () => {
  // Can test other scren by modified this variable
  // Use this variable to test screen, not for main flow of app
  const login = true;

  return (
    <BusinessLogicProvider activeModules={activeModules}>
      <CustomerTemplate> 
        {login ? (
          <TabNavigationContainer initRoute="Home" />
        ) : (
          <RootNavigationContainer initRoute="Home" />
        )}
      </CustomerTemplate>
    </BusinessLogicProvider>
  );
};

export default App;

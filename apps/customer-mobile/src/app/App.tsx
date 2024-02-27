import { BusinessLogicProvider } from '@business-layer/business-logic/provider/provider';
import { activeModules } from '../config/modules';
import CustomerTemplate from '@presentational/native/templates/CustomerTemplate';
import { RootNavigationContainer } from './RootStack';
import { TabNavigationContainer } from './MainTab';

const App = () => {
  // Can test other scren by modified this variable
  const login = true;

  return (
    <BusinessLogicProvider activeModules={activeModules}>
      <CustomerTemplate>
        {login ? (
          <TabNavigationContainer initRoute="Home" />
        ) : (
          <RootNavigationContainer initRoute="Login" />
        )}
      </CustomerTemplate>
    </BusinessLogicProvider>
  );
};

export default App;

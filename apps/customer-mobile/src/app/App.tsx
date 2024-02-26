import { BusinessLogicProvider } from '@business-layer/business-logic/provider/provider';
import { activeModules } from '../config/modules';
import CustomerTemplate from '@presentational/native/templates/CustomerTemplate';
// import { RootNavigationContainer } from './RootStack';
import { TabNavigationContainer } from './MainTab';

const App = () => {
  return (
    <BusinessLogicProvider activeModules={activeModules}>
      <CustomerTemplate>
        {/* <RootNavigationContainer initRoute="Home" /> */}
        <TabNavigationContainer initRoute="Home" />
      </CustomerTemplate>
    </BusinessLogicProvider>
  );
};

export default App;

import { BusinessLogicProvider } from '@business-layer/business-logic/provider/provider';
import { activeModules } from '../config/modules';
import CustomerTemplate from '@presentational/native/templates/CustomerTemplate';
import { RootNavigationContainer } from './RootStack';

const App = () => {
  const isLogged = true;
  const initRoute = isLogged ? 'Home' : 'Intro';
  return (
    <BusinessLogicProvider activeModules={activeModules}>
      <CustomerTemplate>
        <RootNavigationContainer initRoute={initRoute} />
      </CustomerTemplate>
    </BusinessLogicProvider>
  );
};

export default App;

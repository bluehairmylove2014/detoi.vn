import { BusinessLogicProvider } from '@business-layer/business-logic/provider/provider';
import { activeModules } from '../config/modules';
import { RootNavigationContainer } from './RootStack';

const App = () => {
  const isLogged = true;
  const initRoute = isLogged ? 'Home' : 'Intro';
  return (
    <BusinessLogicProvider activeModules={activeModules}>
      <RootNavigationContainer initRoute={initRoute} />
    </BusinessLogicProvider>
  );
};

export default App;

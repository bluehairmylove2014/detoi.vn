// import { BusinessLogicProvider } from '@business-layer/business-logic/provider/provider';
// import { activeModules } from '../config/modules';
import CustomerTemplate from '@presentational/templates/CustomerTemplate';
import { RootNavigationContainer } from './RootStack';

const App = () => {
  return (
    // <BusinessLogicProvider activeModules={activeModules}>
    <CustomerTemplate>
      <RootNavigationContainer initRoute="Home" />
    </CustomerTemplate>
    // </BusinessLogicProvider>
  );
};

export default App;

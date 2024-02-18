// import { BusinessLogicProvider } from '@business-layer/business-logic/provider/provider';
// import { activeModules } from '../config/modules';
import CustomerTemplate from '@presentational/native/templates/CustomerTemplate';
import { RootNavigationContainer } from './RootStack';
import '@presentational/styles/global.scss';
import '@presentational/styles/animations.scss';
import '@presentational/styles/customClass.scss';
import '@presentational/styles/button.scss';
import '@presentational/styles/shadow.scss';

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

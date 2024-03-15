import { activeModules } from '../config';
import GlobalLogicWrapper from './GlobalLogicWrapper';
import { BusinessLogicProvider } from '@business-layer/business-logic/provider/provider';

const App = () => {
  return (
    <BusinessLogicProvider activeModules={activeModules}>
      <GlobalLogicWrapper />
    </BusinessLogicProvider>
  );
};

export default App;

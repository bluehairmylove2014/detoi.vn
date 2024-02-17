// import { BusinessLogicProvider } from '@business-layer/business-logic/provider/provider';
// import { activeModules } from '../config/modules';
// import CustomerTemplate from '@presentational/native/templates/CustomerTemplate';
import { RootNavigationContainer } from './RootStack';
import { SafeAreaView } from 'react-native';
import tw from 'twrnc';

const App = () => {
  return (
    // <BusinessLogicProvider activeModules={activeModules}>
    <SafeAreaView style={tw`w-full`}>
      <RootNavigationContainer initRoute="Home" />
    </SafeAreaView>
    // </BusinessLogicProvider>
  );
};

export default App;

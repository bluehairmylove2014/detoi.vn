import { PrimaryBtn, SecondaryBtn } from '@present-native/atoms';
import { View } from 'react-native';
import { needLoginBottomTabStyle } from './styles';
import { commonShadow } from '@present-native/styles';
import { useNavigation } from '@react-navigation/native';
import { useAuthNavigation } from '@business-layer/business-logic/non-service-lib/navigation';

function NeedLoginBottomTab() {
  const navigation = useNavigation();
  const { navigateToScreenInDifferentStack } = useAuthNavigation();
  return (
    <View style={[needLoginBottomTabStyle.container, commonShadow.shadowSm]}>
      <View style={needLoginBottomTabStyle.innerPadding}>
        <View style={needLoginBottomTabStyle.buttonWrapper}>
          <SecondaryBtn
            title="Đăng ký"
            fontSize="medium"
            radius="square"
            onPress={() => {
              navigateToScreenInDifferentStack('AuthStack', 'Login');
            }}
          />
        </View>
        <View style={needLoginBottomTabStyle.buttonWrapper}>
          <PrimaryBtn
            title="Đăng nhập"
            fontSize="medium"
            radius="square"
            onPress={() => {
              navigateToScreenInDifferentStack('AuthStack', 'Login');
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default NeedLoginBottomTab;

import { PrimaryBtn, SecondaryBtn } from '@present-native/atoms';
import { View } from 'react-native';
import { needLoginBottomTabStyle } from './styles';
import { commonShadow } from '@present-native/styles';
import { useNavigation } from '@react-navigation/native';

function NeedLoginBottomTab() {
  const navigation = useNavigation();
  return (
    <View style={[needLoginBottomTabStyle.container, commonShadow.top]}>
      <View style={needLoginBottomTabStyle.innerPadding}>
        <View style={needLoginBottomTabStyle.buttonWrapper}>
          <SecondaryBtn
            title="Đăng ký"
            fontSize="medium"
            radius="square"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
        <View style={needLoginBottomTabStyle.buttonWrapper}>
          <PrimaryBtn
            title="Đăng nhập"
            fontSize="medium"
            radius="square"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default NeedLoginBottomTab;

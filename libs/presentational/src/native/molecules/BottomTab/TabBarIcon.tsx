import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { FAIcon } from '@present-native/atoms';
import { BarIconSectionStyle } from '@present-native/styles/tabBarIcon';
import { View, Text } from 'react-native';

const TabBarIcon = ({
  focused,
  iconName,
  tabBarLabel,
}: {
  focused: boolean;
  iconName: nativeIconNameType;
  tabBarLabel: string;
}) =>
  focused ? (
    <View style={BarIconSectionStyle.active_icon_container}>
      <FAIcon iconName={iconName} color={'#595753'} size={22} />
    </View>
  ) : (
    <View style={BarIconSectionStyle.inactive_icon_container}>
      <FAIcon iconName={iconName} color={'#595753'} size={20} />
      <Text style={BarIconSectionStyle.label}>{tabBarLabel}</Text>
    </View>
  );

export default TabBarIcon;

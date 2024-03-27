import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { FAIcon } from '@present-native/atoms';
import { BarIconSectionStyle } from './styles';
import { View, Text } from 'react-native';
import { COLOR_PALETTE } from '@present-native/styles';

type tabNameType = 'endow' | 'messages' | 'home' | 'orders' | 'account';
const tabConfig: {
  [key in tabNameType]: {
    label: string;
    iconName: { inactive: nativeIconNameType; active: nativeIconNameType };
  };
} = {
  endow: {
    label: 'Ưu đãi',
    iconName: {
      inactive: 'faSunRegular',
      active: 'faSun',
    },
  },
  messages: {
    label: 'Tin nhắn',
    iconName: {
      inactive: 'faCommentsRegular',
      active: 'faComments',
    },
  },
  home: {
    label: 'Trang chủ',
    iconName: {
      inactive: 'faCompassRegular',
      active: 'faCompass',
    },
  },
  orders: {
    label: 'Đơn đặt',
    iconName: {
      inactive: 'faRectangleListRegular',
      active: 'faRectangleList',
    },
  },
  account: {
    label: 'Tài khoản',
    iconName: {
      inactive: 'faUserRegular',
      active: 'faUser',
    },
  },
};

const TabBarIcon = ({
  focused,
  tabName,
  notification,
}: {
  focused: boolean;
  tabName: tabNameType;
  notification?: boolean;
}) => (
  <View style={BarIconSectionStyle.icon_container}>
    <FAIcon
      iconName={tabConfig[tabName].iconName[focused ? 'active' : 'inactive']}
      color={COLOR_PALETTE[focused ? 'primary' : 'lightStone']}
      size={20}
    />
    {/* {notification && <View style={BarIconSectionStyle.new_notif}></View>} */}
    <Text
      style={[
        BarIconSectionStyle.iconLabel,
        { color: COLOR_PALETTE[focused ? 'primary' : 'lightStone'] },
      ]}
    >
      {tabConfig[tabName].label}
    </Text>
  </View>
);

export default TabBarIcon;

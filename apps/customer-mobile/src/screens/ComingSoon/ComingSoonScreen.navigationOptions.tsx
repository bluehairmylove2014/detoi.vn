import React from 'react';
import { View } from 'react-native';
// import { Ionicons } from "@expo/vector-icons";
import { StackNavigationOptions } from '@react-navigation/stack';
import platform from '@utils/helpers/Platform';
import { Layout } from '@presentational-mobile/constant';
import { ComponentsStyle } from '@presentational-mobile/style';

const iconStyle = { paddingRight: Layout.PADDING_HORIZONTAL };

const navigationOptionsAndroid = (): StackNavigationOptions => ({
  ...ComponentsStyle.transitionBetweenScreenPresets,
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerTitle: () => null,
  headerRight: () => null,
});

const navigationOptionsIOS = ({ navigation }): StackNavigationOptions => ({
  headerStyle: {
    ...ComponentsStyle.header,
    borderBottomWidth: 0,
  },
  headerTitle: () => null,
  headerLeft: () => null,
  headerRight: () => (
    <View style={iconStyle}>
      {/* <Ionicons
        name="md-close"
        size={32}
        color={Colors.grey100}
        onPress={() => {
          navigate(navigation).goBack();
        }}
      /> */}
      ICON
    </View>
  ),
});

const navigationOptions = platform.isAndroid
  ? navigationOptionsAndroid
  : navigationOptionsIOS;

export default navigationOptions;

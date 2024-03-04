import { SafeAreaView, View } from 'react-native';
import React from 'react';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { topLabelStyle } from '../home/styles';
import ServiceInfoMatching from '@present-native/molecules/serviceInfoMatching/ServiceInfoMatching';

export default function Matching() {
  return (
    <CustomerTemplate>
      <View style={topLabelStyle.event}>
        <SafeAreaView style={topLabelStyle.event_safeView}>
          <View style={topLabelStyle.event_content}>
            <ServiceInfoMatching />
          </View>
        </SafeAreaView>
      </View>
      {/* <View
        style={{ flex: 1, margin: 'auto', backgroundColor: colors.softBg }}
      ></View>
      <SafeAreaView>
        <View style={{ backgroundColor: colors.soft, minHeight: 400 }}>
          <Text>Matchingggg</Text>
        </View>
      </SafeAreaView> */}
    </CustomerTemplate>
  );
}

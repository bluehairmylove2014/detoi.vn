import { SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import ServiceInfoMatching from '@present-native/molecules/serviceInfoMatching/ServiceInfoMatching';
import { matchingScreenStyle, topLabelStyle } from './style';
import { CircleImage } from '@present-native/atoms/image';
import { Paragraph } from '@present-native/atoms';
import { colors } from '@present-native/styles';

export default function Matching() {
  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          minHeight: '100%',
          height: 'auto',
          padding: 20,
          overflow: 'hidden',
          backgroundColor: colors.soft,
        }}
      >
        <ServiceInfoMatching />
      </View>
      <Text>Hello</Text>
    </SafeAreaView>
    // <CustomerTemplate>
    //   <View style={matchingScreenStyle.container}>
    //     <View style={topLabelStyle.container}>
    //       <View style={topLabelStyle.event}>
    //         <SafeAreaView>
    //           {/* <View style={topLabelStyle.event_content}></View> */}
    //         </SafeAreaView>
    //       </View>
    //     </View>
    //   </View>
    //   {/* <View
    //     style={{ flex: 1, margin: 'auto', backgroundColor: colors.softBg }}
    //   ></View>
    //   <SafeAreaView>
    //     <View style={{ backgroundColor: colors.soft, minHeight: 400 }}>
    //       <Text>Matchingggg</Text>
    //     </View>
    //   </SafeAreaView> */}
    // </CustomerTemplate>
  );
}

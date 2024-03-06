import { SafeAreaView, View } from 'react-native';
import React from 'react';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import ServiceInfoMatching from '@present-native/molecules/serviceInfoMatching/ServiceInfoMatching';
import { matchingResultStyle, serviceInfo } from './style';
import { CustomButton, Title } from '@present-native/atoms';
import TextLoading from '@present-native/molecules/textLoading/TextLoading';

export default function Matching() {
  return (
    <CustomerTemplate>
      <SafeAreaView>
        <View style={serviceInfo.container}>
          <ServiceInfoMatching />
        </View>
        <View style={matchingResultStyle.container}>
          <View style={matchingResultStyle.filter_container}>
            <Title theme="baseBold" color="primary">
              Chọn để xem chi tiết
            </Title>
            <View style={matchingResultStyle.button_filter}>
              <CustomButton
                title="Sắp xếp"
                size="small"
                theme="primary"
                iconName="faArrowUpWideShort"
                onPress={() => console.log('Lọc')}
              />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 500,
            }}
          >
            <TextLoading title="Đang ghép cặp" />
          </View>
        </View>
      </SafeAreaView>
    </CustomerTemplate>
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

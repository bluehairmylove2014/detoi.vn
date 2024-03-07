import { SafeAreaView, View } from 'react-native';
import React, { useState } from 'react';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import ServiceInfoMatching from '@present-native/molecules/serviceInfoMatching/ServiceInfoMatching';
import {
  matchingLoading,
  matchingResultStyle,
  matchingScreenStyle,
  serviceInfoSectionStyle,
} from './style';
import { CustomButton, Title } from '@present-native/atoms';
import TextLoading from '@present-native/molecules/textLoading/TextLoading';

export default function Matching() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [serviceInfo, setServiceInfo] = useState({
    uri_image: 'https://detoivn.sirv.com/customer_avt/user-avt%20(2).png',
    service_name: 'Dọn nhà phổ thông',
    service_address: 'Joy Citipoint, Quốc Lộ 1A, KCX Lnh Trung',
    service_time: '17:30 | Thứ 3, 20 - 5 - 2014',
  });

  return (
    <CustomerTemplate>
      <SafeAreaView style={matchingScreenStyle.container}>
        <View style={serviceInfoSectionStyle.container}>
          <ServiceInfoMatching
            uri_image={serviceInfo.uri_image}
            service_name={serviceInfo.service_name}
            service_address={serviceInfo.service_name}
            service_time={serviceInfo.service_time}
          />
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
          <View style={matchingLoading.container}>
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

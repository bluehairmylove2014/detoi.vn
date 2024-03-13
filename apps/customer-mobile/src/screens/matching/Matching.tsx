import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import ServiceInfoMatching from '@present-native/molecules/serviceInfoMatching/ServiceInfoMatching';
import {
  matchingLoading,
  matchingResultStyle,
  matchingScreenStyle,
  serviceInfoSectionStyle,
} from './style';
import { PrimaryButton_new, Title } from '@present-native/atoms';
import TextLoading from '@present-native/molecules/textLoading/TextLoading';
import { IMatchedFreelancer } from '@business-layer/services/entities';
import { FreelancerMatchingThumbnail } from '@present-native/molecules';
import { freelancerMatchingThumbnailStyle } from '@present-native/styles/matching';
import { windowWidth } from '@constants/dimension';

export default function Matching() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [serviceInfo, setServiceInfo] = useState({
    uri_image: 'https://detoivn.sirv.com/customer_avt/user-avt%20(2).png',
    service_name: 'Dọn nhà phổ thông',
    service_address: 'Joy Citipoint, Quốc Lộ 1A, KCX Lnh Trung',
    service_time: '17:30 | Thứ 3, 20 - 5 - 2014',
  });

  // Call api
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [matchingResult, setMatchingResult] = useState<IMatchedFreelancer[]>([
    {
      id: '1',
      avatar: 'https://detoivn.sirv.com/freelancer/avatars/f1.png',
      teamMemberCount: 1,
      isTeam: false,
      loveCount: 99,
      orderCount: 1000,
      positiveReviewCount: 100,
      previewPrice: 800.0,
      rating: 5,
    },
    {
      id: '2',
      avatar: 'https://detoivn.sirv.com/freelancer/avatars/f1.png',
      teamMemberCount: 1,
      isTeam: false,
      loveCount: 99,
      orderCount: 1000,
      positiveReviewCount: 100,
      previewPrice: 800.0,
      rating: 5,
    },
  ]);

  const [currentResults, setCurrentResults] = useState<IMatchedFreelancer[]>(
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (matchingResult.length > currentResults.length) {
        setCurrentResults((prevResults) => [
          ...prevResults,
          matchingResult[prevResults.length],
        ]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentResults, matchingResult]);

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
              <PrimaryButton_new
                title="Sắp xếp"
                size="small"
                iconName="faArrowUpWideShort"
                iconPosition="left"
                onPress={() => console.log('Lọc')}
              />
            </View>
          </View>
          {currentResults.length > 0 ? (
            <View style={freelancerMatchingThumbnailStyle.container}>
              {currentResults.map((item, index) => {
                return (
                  <FreelancerMatchingThumbnail
                    key={index}
                    freelancerMatched={item}
                    onPress={() => console.log('Press Freelancer thumbnail')}
                  />
                );
              })}
            </View>
          ) : (
            <View style={matchingLoading.container}>
              <TextLoading title="Đang ghép cặp" />
            </View>
          )}
        </View>
      </SafeAreaView>
      {/* <View style={styles.container}>
        <Button title="Show Options" />
        <Modal
          visible={false}
          transparent={true}
          animationType="slide"
          // onRequestClose={toggleModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>This is your modal content</Text>
              <Button title="Close" />
            </View>
          </View>
        </Modal>
      </View> */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: windowWidth,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
});

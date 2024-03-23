/* eslint-disable @typescript-eslint/no-unused-vars */
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { onServiceScreenStyle } from './styles';
import {
  FAIcon,
  HorizontalSpacer,
  OutlineBtn,
  Paragraph,
  RatingStars,
  VerticalSpacer,
} from '@present-native/atoms';
import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { COLOR_PALETTE, commonShadow } from '@present-native/styles';
import { CircleImage } from '@present-native/atoms/image';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { IOrderDetail } from '@business-layer/services/entities';
import { formatCurrency, formatDate } from '@utils/helpers';
import ProgressBar from 'react-native-animated-progress';
import { useEffect, useState } from 'react';
import React from 'react';
import { useGetOrderDetail } from '@business-layer/business-logic/lib/order';
import { useAuthNavigation } from '@business-layer/business-logic/non-service-lib/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { customerScreensList } from '@constants/customerScreens';

const STAGES_LIST: { icon: nativeIconNameType; name: string }[] = [
  { icon: 'faStreetView', name: 'Chưa đến giờ hoạt động' },
  {
    icon: 'faTruckFast',
    name: 'Đang di chuyển, hãy kiên nhẫn',
  },
  { icon: 'faPeopleCarryBox', name: 'Đang làm việc' },
  { icon: 'faHouseCircleCheck', name: 'Đã hoàn thành dịch vụ' },
];

const OnService: React.FC<
  NativeStackScreenProps<customerScreensList, 'OnService'>
> = ({ route, navigation }) => {
  // const order: IOrderDetail = {
  //   id: 'ad',
  //   address: {
  //     id: 'bfe62025-1c71-4bd3-8e60-08dc477097d1',
  //     lat: 37.5124176,
  //     lon: 127.1024889,
  //     addressLine:
  //       'Woori Bank, Jamsil-ro, Jamsil 6(yuk)-dong, Songpa-gu, Seoul, 05551, South Korea',
  //     ward: 'Songpa-gu',
  //     district: 'Seoul',
  //     province: '05551',
  //     country: 'South Korea',
  //   },
  //   estimatedPrice: 750000,
  //   startTime: '14:00:00',
  //   startDate: '2024-03-24',
  //   finishTime: '00:00:00',
  //   finishDate: '0001-01-01',
  //   freelancer: {
  //     id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  //     fullName: 'Phan Dương Minh',
  //     avatar:
  //       'https://www.womenonbusiness.com/wp-content/uploads/2018/05/employee-management.png',
  //     rating: 4.5,
  //   },
  //   serviceStatus: 'Chưa đến giờ hoạt động',
  //   serviceTypes: [
  //     {
  //       id: '3b8a2d6a-b0e7-46af-a688-397cea642603',
  //       name: 'Phòng trọ',
  //       basePrice: 30000,
  //       description: 'Dọn dẹp Phòng trọ',
  //       image: 'https://detoivn.sirv.com/services/dondep/phongtro.png',
  //     },
  //   ],
  // };
  const { orderId } = route.params;
  const { navigateToScreenInSameStack } = useAuthNavigation();
  const { data: order } = useGetOrderDetail(orderId);
  console.log(order);
  const [currentStage, setCurrentStage] = useState<number>(0);

  useEffect(() => {
    if (order && order.serviceStatus) {
      Object.values(STAGES_LIST).find((sv, i) => {
        if (sv.name === order.serviceStatus) {
          setCurrentStage(i);
          return true;
        }
        return false;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order?.serviceStatus]);

  useEffect(() => {
    setTimeout(() => {
      if (currentStage < STAGES_LIST.length - 1) {
        setCurrentStage(currentStage + 1);
      }
    }, 4000);

    // if (order && currentStage === STAGES_LIST.length - 1) {
    //   navigateToScreenInSameStack('Rating', {
    //     params: {
    //       orderId: order.id,
    //       orderPrice: order.serviceTypes[0].basePrice,
    //     },
    //   });
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStage]);

  return (
    <CustomerTemplate>
      {/* <HeaderWithOrder orderData={order} /> */}
      <View style={onServiceScreenStyle.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={onServiceScreenStyle.mapStyle}
          zoomEnabled={true}
          region={{
            latitude: order?.address.lat ?? 10.762622,
            longitude: order?.address.lon ?? 106.660172,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{
              latitude: order?.address.lat ?? 10.762622,
              longitude: order?.address.lon ?? 106.660172,
            }}
            title="Địa điểm đến"
            description="Địa điểm cần được dọn dẹp"
          />
        </MapView>
        <TouchableOpacity
          style={[onServiceScreenStyle.backButton, commonShadow.top]}
          onPress={() => {}}
        >
          <FAIcon iconName="faArrowLeftLong" size={15} />
        </TouchableOpacity>

        <View style={onServiceScreenStyle.popupWrapper}>
          <View style={onServiceScreenStyle.billWrapper}>
            <View
              style={[onServiceScreenStyle.billContainer, commonShadow.top]}
            >
              {order ? (
                <>
                  <View style={onServiceScreenStyle.infoBillContainer}>
                    <View style={onServiceScreenStyle.infoEmployee}>
                      <View style={{ overflow: 'hidden', width: '100%' }}>
                        <Paragraph theme="baseBold">
                          {order.serviceTypes[0].name}
                        </Paragraph>
                        <Paragraph theme="smallRegular" lineNumber={1}>
                          {order.address.addressLine}
                        </Paragraph>
                        <Paragraph theme="smallRegular" lineNumber={1}>
                          {order.startTime.substring(0, 5)} |{' '}
                          {formatDate(order.startDate).days},{' '}
                          {formatDate(order.startDate).dateMonthYear}
                        </Paragraph>
                      </View>
                    </View>

                    <View style={onServiceScreenStyle.infoPrice}>
                      <Paragraph
                        theme="baseBold"
                        color="black"
                        align="right"
                        lineNumber={1}
                      >
                        {formatCurrency(order.estimatedPrice ?? 0, 'vnd')}
                      </Paragraph>
                    </View>
                  </View>

                  <VerticalSpacer size="l" />
                  <View style={onServiceScreenStyle.statusContainer}>
                    {STAGES_LIST.map((sv, i) => {
                      const isActive = i <= currentStage;
                      const color = isActive
                        ? COLOR_PALETTE.primary
                        : COLOR_PALETTE.gray;
                      return (
                        <React.Fragment key={`stage-${i}`}>
                          {i > 0 ? (
                            <View style={{ flexGrow: 1 }}>
                              <ProgressBar
                                height={5}
                                {...(isActive
                                  ? { progress: 100 }
                                  : {
                                      indeterminate: i === currentStage + 1,
                                      indeterminateDuration: 4000,
                                    })}
                                backgroundColor={color}
                              />
                            </View>
                          ) : null}
                          <FAIcon iconName={sv.icon} color={color} size={20} />
                        </React.Fragment>
                      );
                    })}
                  </View>
                </>
              ) : (
                <ActivityIndicator size={'large'} />
              )}
            </View>
          </View>
          <View style={onServiceScreenStyle.billWrapper}>
            <View
              style={[onServiceScreenStyle.billContainer, commonShadow.top]}
            >
              {order && order.freelancer ? (
                <>
                  <View style={onServiceScreenStyle.infoBillContainer}>
                    <View style={onServiceScreenStyle.infoEmployee}>
                      <View style={onServiceScreenStyle.avatarContainer}>
                        <CircleImage
                          source={{
                            uri: order.freelancer.avatar,
                          }}
                        />
                      </View>
                      <HorizontalSpacer size="l" />
                      <View style={{ overflow: 'hidden', width: '100%' }}>
                        <Paragraph theme="baseBold">
                          {order.freelancer.fullName}
                        </Paragraph>
                        <RatingStars point={order.freelancer.rating} />
                      </View>
                    </View>
                  </View>

                  <View style={onServiceScreenStyle.statusContainer}>
                    <TouchableOpacity
                      style={onServiceScreenStyle.chatBtn}
                      activeOpacity={0.6}
                    >
                      <View style={{ opacity: 0.7 }}>
                        <FAIcon iconName="faCommentsSolid" />
                      </View>
                      <Paragraph theme="baseRegular">
                        Liên hệ với nhân viên...
                      </Paragraph>
                    </TouchableOpacity>

                    <View style={{ opacity: 0.6 }}>
                      <OutlineBtn
                        title=""
                        color="black"
                        fontSize="medium"
                        iconName="faPhone"
                        iconPosition="left"
                        radius="square"
                        borderColor="black"
                        isFitContent={true}
                        onPress={() => {}}
                      />
                    </View>
                  </View>
                </>
              ) : (
                <ActivityIndicator size={'large'} />
              )}
            </View>
          </View>
        </View>
      </View>
    </CustomerTemplate>
  );
};
export default OnService;

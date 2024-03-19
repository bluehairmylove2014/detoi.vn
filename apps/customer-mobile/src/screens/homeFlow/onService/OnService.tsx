/* eslint-disable @typescript-eslint/no-unused-vars */
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { OnServiceProps } from '../../../config';
import { ActivityIndicator, Image, TouchableOpacity, View } from 'react-native';
import { onServiceScreenStyle } from './styles';
import {
  BaseLink,
  FAIcon,
  HorizontalSpacer,
  OutlineBtn,
  Paragraph,
  PrimaryBtn,
  RatingStars,
  SecondaryBtn,
  VerticalSpacer,
} from '@present-native/atoms';
import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { COLOR_PALETTE, commonShadow } from '@present-native/styles';
import { CircleImage } from '@present-native/atoms/image';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { IOrderDetail } from '@business-layer/services/entities';
import { formatCurrency, formatDate } from '@utils/helpers';
import CanScrollUpModal from '@present-native/templates/CanScrollUpModal';
import ProgressBar from 'react-native-animated-progress';
import { useEffect, useState } from 'react';
import React from 'react';
import { windowHeight, windowWidth } from '@constants/dimension';

const STAGES_LIST = {
  stage1: { icon: 'faStreetView', name: 'Chưa đến giờ hoạt động' },
  stage2: {
    icon: 'faTruckFast',
    name: 'Đang di chuyển, hãy kiên nhẫn',
  },
  stage3: { icon: 'faPeopleCarryBox', name: 'Đang làm việc' },
  stage4: { icon: 'faHouseCircleCheck', name: 'Đã hoàn thành dịch vụ' },
};

const OnService: React.FC<OnServiceProps> = ({ route, navigation }) => {
  const order: IOrderDetail = {
    address: {
      id: 'bfe62025-1c71-4bd3-8e60-08dc477097d1',
      lat: 37.5124176,
      lon: 127.1024889,
      addressLine:
        'Woori Bank, Jamsil-ro, Jamsil 6(yuk)-dong, Songpa-gu, Seoul, 05551, South Korea',
      ward: 'Songpa-gu',
      district: 'Seoul',
      province: '05551',
      country: 'South Korea',
    },
    estimatedPrice: 750000,
    startTime: '14:00:00',
    startDate: '2024-03-24',
    finishTime: '00:00:00',
    finishDate: '0001-01-01',
    freelancer: {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      fullName: 'Phan Dương Minh',
      avatar:
        'https://www.womenonbusiness.com/wp-content/uploads/2018/05/employee-management.png',
      rating: 4.5,
    },
    serviceStatus: 'Chưa đến giờ hoạt động',
    serviceTypes: [
      {
        id: '3b8a2d6a-b0e7-46af-a688-397cea642603',
        name: 'Phòng trọ',
        basePrice: 30000,
        description: 'Dọn dẹp Phòng trọ',
        image: 'https://detoivn.sirv.com/services/dondep/phongtro.png',
      },
    ],
  };
  const [currentStage, setCurrentStage] =
    useState<keyof typeof STAGES_LIST>('stage1');

  useEffect(() => {
    if (order && order.serviceStatus) {
      Object.values(STAGES_LIST).find((sv, i) => {
        if (sv.name === order.serviceStatus) {
          setCurrentStage(
            Object.keys(STAGES_LIST)[i] as keyof typeof STAGES_LIST
          );
          return true;
        }
        return false;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order.serviceStatus]);

  return (
    <CustomerTemplate>
      {/* <HeaderWithOrder orderData={order} /> */}
      <View style={onServiceScreenStyle.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={onServiceScreenStyle.mapStyle}
          zoomEnabled={true}
          region={{
            latitude: order.address.lat,
            longitude: order.address.lon,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{
              latitude: order.address.lat,
              longitude: order.address.lon,
            }}
            title="Địa điểm đến"
            description="Địa điểm cần được dọn dẹp"
          />
        </MapView>
        <TouchableOpacity
          style={[
            {
              borderRadius: 999,
              width: 40,
              aspectRatio: 1,
              overflow: 'hidden',
              backgroundColor: COLOR_PALETTE.white,
              position: 'absolute',
              top: 40,
              left: 10,
              zIndex: 9,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
            commonShadow.top,
          ]}
          onPress={() => {}}
        >
          <FAIcon iconName="faArrowLeftLong" size={15} />
        </TouchableOpacity>

        <CanScrollUpModal
          isActive={true}
          onClose={() => {}}
          backgroundColor="white"
          defaultShowChildren={
            <>
              <View
                style={[onServiceScreenStyle.billWrapper, commonShadow.top]}
              >
                <View style={onServiceScreenStyle.billContainer}>
                  {order && order.freelancer ? (
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
                        {Object.values(STAGES_LIST).map((sv, i) => {
                          const isCurrentStage =
                            STAGES_LIST[currentStage].name === sv.name;
                          return (
                            <React.Fragment key={`stage-${i}`}>
                              <FAIcon
                                iconName={sv.icon as nativeIconNameType}
                                color={
                                  isCurrentStage
                                    ? COLOR_PALETTE.primary
                                    : COLOR_PALETTE.gray
                                }
                                size={20}
                              />
                              {i < Object.keys(STAGES_LIST).length - 1 ? (
                                <View style={{ flexGrow: 1 }}>
                                  <ProgressBar
                                    height={5}
                                    indeterminateDuration={4000}
                                    indeterminate={isCurrentStage}
                                    backgroundColor={
                                      isCurrentStage
                                        ? COLOR_PALETTE.primary
                                        : COLOR_PALETTE.gray
                                    }
                                  />
                                </View>
                              ) : null}
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
              <VerticalSpacer size="m" />
              <View
                style={[onServiceScreenStyle.billWrapper, commonShadow.top]}
              >
                <View style={onServiceScreenStyle.billContainer}>
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
            </>
          }
          // needScrollUpToShowChildren={
          // <View style={onServiceScreenStyle.freelancerDetailWrapper}>
          //   <View style={{ width: 80 }}>
          //     <CircleImage source={{ uri: order.freelancer?.avatar }} />
          //   </View>
          //   <View>
          //     <Paragraph theme="baseBold">
          //       {order.freelancer?.fullName}
          //     </Paragraph>
          //     <Paragraph theme="smallRegular">Thanh toán COD</Paragraph>
          //   </View>
          // </View>
          // }
        />
      </View>
    </CustomerTemplate>
  );
};
export default OnService;

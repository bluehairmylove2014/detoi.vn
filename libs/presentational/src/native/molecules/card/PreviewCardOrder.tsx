import { View } from 'react-native';
import React from 'react';
import {
  ICoordinate,
  IFreelancerPreview,
  IOrderDetail,
} from '@business-layer/services/entities';
import { previewCardOrderStyles } from './styles';
import {
  FAIcon,
  HorizontalSpacer,
  Paragraph,
  PrimaryBtn,
  SquareImage,
} from '@present-native/atoms';
import { COLOR_PALETTE } from '@present-native/styles';
import { useAuthNavigation } from '@business-layer/business-logic/non-service-lib/navigation';

type props = {
  orderDetail: IOrderDetail;
  onNavigate: () => void;
  currentLatLon: ICoordinate | undefined;
};
export const PreviewCardOrder: React.FC<props> = ({
  orderDetail,
  currentLatLon,
  onNavigate,
}) => {
  return (
    <View style={previewCardOrderStyles.container}>
      <View style={previewCardOrderStyles.orderImageWrapper}>
        <SquareImage
          source={{
            uri: orderDetail.serviceTypes[0].image,
          }}
        />
      </View>
      <View style={previewCardOrderStyles.orderDetailContainer}>
        {/* <View style={previewCardOrderStyles.orderNameView}>
          <View style={{ flexGrow: 1 }}>
            <Paragraph
              theme="baseBold"
              align="left"
              color="black"
              lineNumber={1}
            >
              {orderDetail.serviceTypes[0].name}
            </Paragraph>
          </View>
          <View style={{ flexShrink: 1, opacity: 0.5 }}>
            {currentLatLon ? (
              <Paragraph
                theme="smallRegular"
                align="left"
                color="black"
                lineNumber={1}
              >
                {distanceBetweenPoints(
                  { lat: currentLatLon.lat, lon: currentLatLon.lon },
                  { lat: orderDetail.address.lat, lon: orderDetail.address.lon }
                )}
              </Paragraph>
            ) : null}
          </View>
        </View> */}
        <Paragraph theme="baseBold" align="left" color="black" lineNumber={1}>
          {orderDetail.serviceTypes[0].name}
        </Paragraph>
        <View style={previewCardOrderStyles.orderLineDetailView}>
          <View
            style={{
              opacity: 0.8,
            }}
          >
            <FAIcon
              iconName="faMapRegular"
              color={COLOR_PALETTE.black}
              size={14}
            />
          </View>
          <HorizontalSpacer size="s" />
          <Paragraph
            theme="smallRegular"
            align="left"
            color="black"
            lineNumber={1}
          >
            {orderDetail.address.addressLine}
          </Paragraph>
        </View>

        <View style={previewCardOrderStyles.orderLineDetailView}>
          <View
            style={{
              opacity: 0.8,
            }}
          >
            <FAIcon
              iconName="faClockRegular"
              color={COLOR_PALETTE.black}
              size={14}
            />
          </View>
          <HorizontalSpacer size="s" />
          <Paragraph
            theme="smallRegular"
            align="left"
            color="black"
            lineNumber={1}
          >
            {orderDetail.startTime.slice(0, 5)} | {orderDetail.startDate}
          </Paragraph>
        </View>
      </View>
      <View style={previewCardOrderStyles.linkButtonWrapper}>
        <PrimaryBtn
          iconName="faArrowRight"
          iconPosition="left"
          title=""
          onPress={onNavigate}
          fontSize="small"
        />
      </View>
    </View>
  );
};

import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { OnServiceProps } from '../../../config';
import { Image, View } from 'react-native';
import { onServiceScreenStyle } from './styles';
import {
  CommonLink,
  FAIcon,
  HorizontalSpacer,
  Paragraph,
  PrimaryBtn,
  VerticalSpacer,
} from '@present-native/atoms';
import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { COLOR_PALETTE } from '@present-native/styles';
import { CircleImage } from '@present-native/atoms/image';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const OnService: React.FC<OnServiceProps> = ({ route, navigation }) => {
  const statuses = [
    { icon: 'faStreetView', name: 'Chưa đến giờ hoạt động' },
    { icon: 'faTruckFast', name: 'Đang di chuyển, hãy kiên nhẫn' },
    { icon: 'faPeopleCarryBox', name: 'Đang làm việc' },
    { icon: 'faHouseCircleCheck', name: 'Đã hoàn thành dịch vụ' },
  ];

  const infoBill = {
    avaEmplyee: '',
    nameEmployee: 'Phan Dương Minh',
    payment: 'Thanh toán COD',
    totalMoney: '850.000',
    distance: '10',
  };

  const state_1 = {
    name: 'Chưa đến giờ hoạt động',
    notes: [
      {
        iconNote: 'faLocationDot',
        title: 'Tôi có thể theo dõi vị trí nhân viên không?',
        description:
          'Có, khi gần đến giờ làm việc, nhân viên bắt đầu di chuyển, lúc đó bản đồ vị trí nhân viên sẽ được hiển thị.',
      },
      {
        iconNote: 'faThumbsDown',
        title: 'Chất lượng dịch vụ không tốt',
        description:
          'Nếu chất lượng dịch vụ không được đảm bảo, hãy báo cáo chất lượng dịch vụ để chúng tôi có thể hỗ trợ bạn.',
      },
      {
        iconNote: 'faMoneyBills',
        title: 'Nhân viên yêu cầu thêm phụ phí',
        description:
          'Nhân viên không được yêu cầu thêm bất kì phụ phí nào, nếu có xảy ra, hãy báo cáo để chúng tôi đảm bảo quyền lợi cho bạn.',
      },
    ],
  };

  const state_2 = {
    name: 'Đang di chuyển, hãy kiên nhẫn ',
    postionDestination: {
      lat: 10.762853671759258,
      long: 106.68248487328377,
    },
    positionEmployee: {
      lat: 10.791932495476537,
      long: 106.63415636549603,
    },
  };

  // Calculate mid-point
  const midPointLatitude =
    (state_2.postionDestination.lat + state_2.positionEmployee.lat) / 2;
  const midPointLongitude =
    (state_2.postionDestination.long + state_2.positionEmployee.long) / 2;

  // Calculate difference
  const latitudeDelta =
    Math.abs(state_2.postionDestination.lat - state_2.positionEmployee.lat) *
    1.5; // Adjust the factor as needed
  const longitudeDelta =
    Math.abs(state_2.postionDestination.long - state_2.positionEmployee.long) *
    1.5; // Adjust the factor as needed

  // Set initialRegion
  const initialRegion = {
    latitude: midPointLatitude,
    longitude: midPointLongitude,
    latitudeDelta,
    longitudeDelta,
  };

  return (
    <CustomerTemplate>
      <View style={onServiceScreenStyle.container}>
        <View>
          <Paragraph color="primary" theme="baseBold">
            Các lưu ý chung cho dịch vụ
          </Paragraph>
          {state_1.name === statuses[0].name ? (
            <>
              {state_1.notes.map((note, index) => {
                return (
                  <View key={index}>
                    <VerticalSpacer size="m" />
                    <View>
                      <View style={onServiceScreenStyle.titleContainer}>
                        <FAIcon
                          iconName={note.iconNote as nativeIconNameType}
                          color={COLOR_PALETTE.black}
                          size={14}
                        />
                        <HorizontalSpacer size="m" />
                        <Paragraph theme="smallBold">{note.title}</Paragraph>
                      </View>
                      <View style={onServiceScreenStyle.contentContainer}>
                        <HorizontalSpacer size="m" />
                        <Paragraph theme="smallRegular">
                          {note.description}
                        </Paragraph>
                      </View>
                    </View>
                  </View>
                );
              })}

              <VerticalSpacer size="l" />
              <CommonLink
                theme="underline"
                size="extraSmallBold"
                align="center"
                title="Xem thêm các chính sách"
                toScreen=""
              />
            </>
          ) : (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <></>
          )}

          {state_2.name === statuses[1].name ? (
            <View style={{ height: 300 }}>
              <VerticalSpacer size="xl" />
              <MapView
                initialRegion={initialRegion}
                provider={PROVIDER_GOOGLE}
                style={onServiceScreenStyle.mapStyle}
                zoomEnabled={true}
              >
                {/* Render marker for destination */}
                <Marker
                  coordinate={{
                    latitude: state_2.postionDestination.lat,
                    longitude: state_2.postionDestination.long,
                  }}
                  title="Địa điểm đến"
                  description="Địa điểm cần được dọn dẹp"
                />
                {/* Render marker for employee */}
                <Marker
                  coordinate={{
                    latitude: state_2.positionEmployee.lat,
                    longitude: state_2.positionEmployee.long,
                  }}
                  title="Nhân Viên"
                  description="Vị trí hiện tại của nhân viên"
                >
                  <Image
                    source={require('./employeeDetoi.png')}
                    style={{ height: 40, width: 50 }}
                  />
                </Marker>
              </MapView>
            </View>
          ) : (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <></>
          )}
        </View>

        <VerticalSpacer size="xl" />
        <View style={onServiceScreenStyle.billContainer}>
          <View style={onServiceScreenStyle.infoBillContainer}>
            <View style={onServiceScreenStyle.infoEmployee}>
              <View style={onServiceScreenStyle.avatarContainer}>
                <CircleImage
                  source={{
                    uri: 'https://www.womenonbusiness.com/wp-content/uploads/2018/05/employee-management.png',
                  }}
                />
              </View>
              <HorizontalSpacer size="l" />
              <View>
                <Paragraph theme="baseBold">{infoBill.nameEmployee}</Paragraph>
                <Paragraph theme="baseRegular">{infoBill.payment}</Paragraph>
              </View>
            </View>

            <View>
              <Paragraph theme="baseBold" color="primary" align="right">
                {infoBill.totalMoney}đ
              </Paragraph>
              <Paragraph theme="baseSemibold" align="right">
                {infoBill.distance}km
              </Paragraph>
            </View>
          </View>

          <VerticalSpacer size="m" />
          <View>
            {statuses.map((status, index) => {
              let colorText: 'primary' | 'rose';
              let fontWeight: 'baseBold' | 'baseSemibold';
              let opacityText, colorIcon;

              if (status.name === state_1.name) {
                colorText = 'primary';
                opacityText = 1;
                colorIcon = COLOR_PALETTE.primary;
                fontWeight = 'baseBold';
              } else {
                colorText = 'rose';
                opacityText = 0.5;
                colorIcon = COLOR_PALETTE.black;
                fontWeight = 'baseSemibold';
              }

              return (
                <View key={index}>
                  <VerticalSpacer size="l" />
                  <View style={onServiceScreenStyle.statusContainer}>
                    <FAIcon
                      iconName={status.icon as nativeIconNameType}
                      color={colorIcon}
                      size={20}
                    />

                    <HorizontalSpacer size="xl" />
                    <View style={{ opacity: opacityText }}>
                      <Paragraph theme={fontWeight} color={colorText}>
                        {status.name}
                      </Paragraph>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>

          <VerticalSpacer size="xxxl" />
          <View style={onServiceScreenStyle.buttonsContainer}>
            <View style={{ flex: 1 }}>
              <PrimaryBtn title="Tin nhắn" onPress={() => {}} />
            </View>
            <HorizontalSpacer size="l" />
            <View style={{ flex: 1 }}>
              <PrimaryBtn title="Hỗ trợ" onPress={() => {}} />
            </View>
          </View>
        </View>
      </View>
    </CustomerTemplate>
  );
};
export default OnService;

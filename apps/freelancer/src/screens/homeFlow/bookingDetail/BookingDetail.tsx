import { freelancerScreensList } from '@constants/freelancerScreens';
import FreelancerTemplate from '@present-native/templates/FreelancerTemplate';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, View } from 'react-native';
import { BookingDetailStyle } from './styles';
import { Paragraph, VerticalSpacer } from '@present-native/atoms';

const detailExample = {
  distance: 12,
  address:
    'Joy Citipoint, Quốc Lộ 1A, KCX Linh Trung, KP.4, Thủ Đức, Hồ Chí Minh\n257/43 Phòng 2014 Căn hộ Sunrise Continent',
};
const title = ['Địa điểm', 'Thông tin dịch vụ', 'Giá trung bình dịch vụ'];

const BookingDetail: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'BookingDetail'>
> = ({ route, navigation }) => {
  return (
    <FreelancerTemplate>
      <SafeAreaView style={BookingDetailStyle.safeAreaStyle}>
        <View style={BookingDetailStyle.container}>
          <View style={BookingDetailStyle.locationContainer}>
            <View style={BookingDetailStyle.topContainer}>
              <Paragraph theme="baseBold" color="primary">
                {title[0]}
              </Paragraph>
              <Paragraph theme="baseBold">
                {detailExample.distance} km
              </Paragraph>
            </View>

            <VerticalSpacer size="s" />
            <Paragraph theme="smallRegular">{detailExample.address}</Paragraph>
          </View>

          <VerticalSpacer size="xxl" />
          <Paragraph theme="baseBold" color="primary">
            {title[1]}
          </Paragraph>
          <View style={BookingDetailStyle.serviceInfoContainer}>
            <View></View>
          </View>
        </View>
      </SafeAreaView>
    </FreelancerTemplate>
  );
};

export default BookingDetail;

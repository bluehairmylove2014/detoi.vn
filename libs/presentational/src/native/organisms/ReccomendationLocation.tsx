import {
  View,
  TouchableOpacity,
} from 'react-native';
import { BlackTitle, FAIcon, Paragraph } from '@present-native/atoms';
import { DividerHorizontal } from '@present-native/atoms';
import { colors } from '@present-native/styles';

enum ETypeLocation {
  history = 'lịch sử',
  apartment = 'chung cư',
}
const DATA_COMMENDATION_LOCATION = [
  {
    nameLocation: 'Lotte Cinema Thủ Đức',
    address:
      'Joy Citipoint, Quốc Lộ 1A, KCX Linh Trung, KP.4, P.Linh Trung, Thành Phố Thủ Đức',
    typeLocation: ETypeLocation.apartment,
  },
  {
    nameLocation: '1264/34A Kha Vạn Cân',
    address:
      '1264 Kha Vạn Cân, Khu Phố 2, Phường Linh Trung, Quận Thủ Đức, TP Hồ Chí Minh, Việt Nam',
    typeLocation: ETypeLocation.history,
  },
  {
    nameLocation: 'Công ty TNHH TM DV Sóng Thần',
    address:
      'Quốc lộ 1A, P.An Bình, TP. Dĩ An, Bình Dương, Hồ Chí Minh, Việt Nam',
    typeLocation: ETypeLocation.history,
  },
];
const domains: Record<string, JSX.Element> = {
  [ETypeLocation.apartment]: (
    <FAIcon iconName="faBuilding" color={colors.primary} size={10} />
  ),
  [ETypeLocation.history]: (
    <FAIcon iconName="faClockRotateLeft" color={colors.primary} size={10} />
  ),
};
export const ReccomendationLocation = () => {
  return (
    <>
      {DATA_COMMENDATION_LOCATION.map((recommendation_location, index) => {
        return (
          <View key={index} style={{ gap: 10 }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: colors.secondary,
                  padding: 5,
                  borderRadius: 99,
                }}
              >
                {domains[recommendation_location.typeLocation]}
              </View>
              <View style={{ width: '80%' }}>
                <BlackTitle>{recommendation_location.nameLocation}</BlackTitle>
                <Paragraph numberLine={1}>
                  {recommendation_location.address}
                </Paragraph>
              </View>
              <FAIcon iconName="faArrowRight" color={colors.black} size={18} />
            </TouchableOpacity>
            <DividerHorizontal />
          </View>
        );
      })}
    </>
  );
};

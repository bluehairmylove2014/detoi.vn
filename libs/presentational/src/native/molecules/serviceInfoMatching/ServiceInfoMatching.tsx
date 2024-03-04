import { BlackParagraph, BlackTitle } from '@present-native/atoms';
import { CircleImage } from '@present-native/atoms/image';
import { View, Text } from 'react-native';

export default function ServiceInfoMatching() {
  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <View style={{ maxWidth: 50, maxHeight: 50 }}>
        <CircleImage
          source={{
            uri: 'https://detoivn.sirv.com/customer_avt/user-avt%20(2).png',
          }}
          style={{ height: undefined, width: undefined }}
        />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column' }}>
        <BlackParagraph theme="largeBold">Dọn nhà phổ thông</BlackParagraph>
        <View></View>
        <Text numberOfLines={1}>Joy Citipoint, Quốc Lộ 1A, KCX Lnh Trung</Text>
      </View>
    </View>
  );
}

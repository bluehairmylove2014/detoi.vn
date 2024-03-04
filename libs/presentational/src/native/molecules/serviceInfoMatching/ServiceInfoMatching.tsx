import { Paragraph, PrimaryButton } from '@present-native/atoms';
import { CircleImage } from '@present-native/atoms/image';
import { View, Text } from 'react-native';

export default function ServiceInfoMatching() {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: 35,
          height: 35,
          flex: 2.5,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CircleImage
          source={{
            uri: 'https://detoivn.sirv.com/customer_avt/user-avt%20(2).png',
          }}
          style={{ height: undefined, width: undefined }}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: 1.5,
          flex: 9,
        }}
      >
        <Paragraph theme="largeBold" color="black">
          Dọn nhà phổ thông
        </Paragraph>
        <Paragraph theme="smallRegular" color="black" lineNumber={1}>
          Joy Citipoint, Quốc Lộ 1A, KCX Lnh Trung
        </Paragraph>
        <Paragraph theme="smallRegular" color="black" lineNumber={1}>
          17:30 | Thứ 3, 20 - 5 - 2014
        </Paragraph>
      </View>
      <View style={{ flex: 5, maxHeight: 40 }}>
        <PrimaryButton
          title="Hủy đơn"
          theme="square-rounded-bold"
          onPress={() => console.log('hello')}
        />
      </View>
    </View>
  );
}

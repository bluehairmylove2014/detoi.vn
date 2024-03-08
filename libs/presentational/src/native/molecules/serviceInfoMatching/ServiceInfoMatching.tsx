import { windowWidth } from '@constants/dimension';
import { OnlyBorderButton, Paragraph } from '@present-native/atoms';
import { CircleImage } from '@present-native/atoms/image';
import { matchingInfoSectionStyle } from '@present-native/styles/matching';
import { View, Text } from 'react-native';

export default function ServiceInfoMatching({
  uri_image,
  service_name,
  service_address,
  service_time,
}: {
  uri_image: string;
  service_name: string;
  service_address: string;
  service_time: string;
}) {
  return (
    <View style={matchingInfoSectionStyle.container}>
      <View style={matchingInfoSectionStyle.ava_image}>
        <CircleImage
          source={{
            uri: uri_image,
          }}
          style={{ height: undefined, width: undefined }}
        />
      </View>
      <View style={matchingInfoSectionStyle.service_info}>
        <Paragraph theme="largeBold" color="black" lineNumber={1}>
          {service_name}
        </Paragraph>
        <Paragraph theme="smallRegular" color="black" lineNumber={1}>
          {service_address}
        </Paragraph>
        <Paragraph theme="smallRegular" color="black" lineNumber={1}>
          {service_time}
        </Paragraph>
      </View>
      <View style={matchingInfoSectionStyle.cancel_button}>
        <OnlyBorderButton
          title="Hủy đơn"
          size="small"
          onPress={() => console.log('hello')}
        />
      </View>
    </View>
  );
}

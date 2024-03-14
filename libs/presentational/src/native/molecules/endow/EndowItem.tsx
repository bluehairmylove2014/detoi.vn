import { Paragraph } from '@present-native/atoms';
import { endowSectionStyle } from './styles';
import { View, TouchableOpacity, Image } from 'react-native';

const EndowItem = ({
  image,
  description,
  label,
}: {
  image: string;
  description: string;
  label: string;
}) => (
  <TouchableOpacity style={endowSectionStyle.item}>
    <View>
      <Image
        source={{ uri: image }}
        resizeMode="contain"
        style={endowSectionStyle.endow_image}
      />
    </View>
    <View style={endowSectionStyle.content}>
      <Paragraph theme="baseMedium">{description}</Paragraph>
      <Paragraph theme="smallRegular">{label}</Paragraph>
    </View>
  </TouchableOpacity>
);

export default EndowItem;

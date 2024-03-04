import { BlackParagraph, PrimaryParagraph } from '@present-native/atoms';
import { endowSectionStyle } from '@present-native/styles/endow';
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
      <BlackParagraph theme="normalMedium">{description}</BlackParagraph>
      <PrimaryParagraph theme="small">{label}</PrimaryParagraph>
    </View>
  </TouchableOpacity>
);

export default EndowItem;

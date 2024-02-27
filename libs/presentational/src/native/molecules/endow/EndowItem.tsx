import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import {
  BlackParagraph,
  FAIcon,
  PrimaryParagraph,
} from '@present-native/atoms';
import { endowSectionStyle } from '@present-native/styles/endow';
import { View, TouchableOpacity, Image } from 'react-native';

import EndowImage from '@assets/endow1.png';

const EndowItem = ({
  image,
  description,
  label,
}: {
  image?: string | null;
  description: string;
  label: string;
}) => (
  <TouchableOpacity style={endowSectionStyle.item}>
    <View>
      <Image
        source={EndowImage}
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

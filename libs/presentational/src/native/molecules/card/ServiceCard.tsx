import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import {
  BlackParagraph,
  FAIcon,
  PrimaryParagraph,
} from '@present-native/atoms';
import { ServiceCardSectionStyle } from '@present-native/styles/card';
import { View, TouchableOpacity, Image } from 'react-native';

type serviceCardType = {
  title: string;
  subtitle: string;
  iconName: nativeIconNameType;
  onPress: () => void;
};

const ServiceCard = ({
  title,
  subtitle,
  iconName,
  onPress,
}: serviceCardType) => (
  <TouchableOpacity style={ServiceCardSectionStyle.card}>
    <View>
      <PrimaryParagraph theme="small">{subtitle}</PrimaryParagraph>
      <BlackParagraph theme="smallBold">{title}</BlackParagraph>
    </View>
    <View style={ServiceCardSectionStyle.icon}>
      <FAIcon iconName={iconName} size={20} />
    </View>
  </TouchableOpacity>
);

export default ServiceCard;

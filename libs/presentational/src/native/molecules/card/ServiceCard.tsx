import { BlackParagraph, PrimaryParagraph } from '@present-native/atoms';
import { ServiceCardSectionStyle } from '@present-native/styles/card';
import { View, TouchableOpacity, Image } from 'react-native';
import ContainerIcon from '@assets/feedback.png';
import ShoppingBagIcon from '@assets/point.png';

const iconImgMapper = {
  container: ContainerIcon,
  shoppingBag: ShoppingBagIcon,
};

type serviceCardType = {
  title: string;
  subtitle: string;
  iconName: 'container' | 'shoppingBag';
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
      <Image source={iconImgMapper[iconName]} />
    </View>
  </TouchableOpacity>
);

export default ServiceCard;

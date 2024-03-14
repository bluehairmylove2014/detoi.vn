import { View } from 'react-native';
import { horizontalSpacerStyles } from './styles';

export const HorizontalSpacer = ({
  size,
}: {
  size: 'l' | 'm' | 's' | 'xs' | 'xl' | 'xxl' | 'xxxl';
}) => {
  return <View style={horizontalSpacerStyles[size]} />;
};

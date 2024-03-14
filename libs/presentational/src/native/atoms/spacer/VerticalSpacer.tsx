import { View } from 'react-native';
import { verticalSpacerStyles } from './styles';

export const VerticalSpacer = ({
  size,
}: {
  size: 'l' | 'm' | 's' | 'xs' | 'xl' | 'xxl' | 'xxxl';
}) => {
  return <View style={verticalSpacerStyles[size]} />;
};

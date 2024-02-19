import { View } from 'react-native';
import { verticalSpacerStyles } from '@present-native/styles/spacer';

export const VerticalSpacer = ({
  size,
}: {
  size: 'l' | 'm' | 's' | 'xs' | 'xl';
}) => {
  return <View style={verticalSpacerStyles[size]} />;
};

import { View } from 'react-native';
import { horizontalSpacerStyles } from '@present-native/styles/spacer';

export const HorizontalSpacer = ({
  size,
}: {
  size: 'l' | 'm' | 's' | 'xs' | 'xl';
}) => {
  return <View style={horizontalSpacerStyles[size]} />;
};

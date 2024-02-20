import { View } from 'react-native';
import { horizontalSpacerStyles } from '@present-native/styles/spacer';

export const HorizontalSpacer = ({
  size,
}: {
  size: 'l' | 'm' | 's' | 'xs' | 'xl' | 'xxl' | 'xxxl';
}) => {
  return <View style={horizontalSpacerStyles[size]} />;
};

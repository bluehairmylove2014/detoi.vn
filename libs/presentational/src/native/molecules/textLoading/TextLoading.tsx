import { View } from 'react-native';
import LineLoadingIndicator from '@present-native/atoms/loading/LineLoadingIndicator';
import { PrimaryTitle } from '@present-native/atoms';
import { LoadingIndicatorSectionStyle } from '@present-native/styles/loading';

export default function TextLoading({ title }: { title: string }) {
  return (
    <View style={LoadingIndicatorSectionStyle.container}>
      <PrimaryTitle theme="primary">{title}</PrimaryTitle>
      <LineLoadingIndicator />
    </View>
  );
}

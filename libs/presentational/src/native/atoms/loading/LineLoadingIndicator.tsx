import * as Progress from 'react-native-progress';
import { colors } from '@present-native/styles';

export default function LineLoadingIndicator() {
  return (
    <Progress.Bar
      color={colors.primary}
      indeterminateAnimationDuration={900}
      unfilledColor="rgba(0, 0, 0, 0.2)"
      borderWidth={0}
      indeterminate={true}
      width={150}
    />
  );
}

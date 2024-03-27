import { Animated, StyleSheet, View } from 'react-native';
import { HorizontalSpacer } from '../spacer';
import { FAIcon } from '../icon';
import { COLOR_PALETTE } from '@present-native/styles';
import { ProgressBarStyle } from './styles';
import { Paragraph } from '../text';

export const ProgressBarTime = ({
  widthProgress,
  timeCount,
}: {
  widthProgress: number;
  timeCount: string;
}) => {
  const progressWidth: `${number}%` = `${widthProgress}%`;
  const iconColor =
    widthProgress >= 4 ? COLOR_PALETTE.white : COLOR_PALETTE.primary;

  return (
    <View style={ProgressBarStyle.progressBar}>
      <HorizontalSpacer size="m" />
      <FAIcon iconName="faStopwatch" color={iconColor} size={17} />
      <HorizontalSpacer size="s" />
      <Paragraph theme="baseBold" color="primary">
        {timeCount}
      </Paragraph>

      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: COLOR_PALETTE.primary,
            width: progressWidth,
            position: 'absolute',
            flexDirection: 'row',
            alignItems: 'center',
          },
        ]}
      >
        <HorizontalSpacer size="m" />
        <FAIcon iconName="faStopwatch" color={iconColor} size={17} />
        <HorizontalSpacer size="s" />
        <Paragraph
          theme="baseBold"
          lineNumber={1}
          color="white"
          ellipsizeMode="clip"
        >
          {timeCount}
        </Paragraph>
      </Animated.View>
    </View>
  );
};

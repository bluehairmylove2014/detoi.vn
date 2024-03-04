import { View, Text } from 'react-native';
import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { FAIcon } from '../icon';
import {
  colors,
  staticServiceRequirementDetailStyles,
} from '@present-native/styles';
import { Paragraph } from './Paragraph';
import { HorizontalSpacer, VerticalSpacer } from '../spacer';

export const StaticServiceRequirementDetail = ({
  iconName,
  title,
  subTitle,
  hightlight = false,
}: {
  iconName: nativeIconNameType;
  title: string;
  subTitle?: string;
  hightlight?: boolean;
}) => {
  return (
    <View style={staticServiceRequirementDetailStyles.container}>
      <FAIcon iconName={iconName} color={colors.secondary} />
      <HorizontalSpacer size="m" />
      <View>
        <Paragraph theme={hightlight ? 'baseBold' : 'baseMedium'}>
          {title}
        </Paragraph>
        {subTitle ? (
          <>
            <VerticalSpacer size="s" />
            <Paragraph theme="smallRegular">{subTitle}</Paragraph>
          </>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

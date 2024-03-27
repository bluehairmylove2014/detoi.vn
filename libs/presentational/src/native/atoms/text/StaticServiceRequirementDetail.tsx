import { View, Text } from 'react-native';
import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { FAIcon } from '../icon';
import { COLOR_PALETTE } from '@styles/color';
import { Paragraph } from './Paragraph';
import { HorizontalSpacer, VerticalSpacer } from '../spacer';
import { staticServiceRequirementDetailStyles } from './styles';

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
      <View style={staticServiceRequirementDetailStyles.lineView}>
        <FAIcon iconName={iconName} color={COLOR_PALETTE.secondary} size={15} />
        <HorizontalSpacer size="m" />
        <Paragraph theme={hightlight ? 'baseBold' : 'baseMedium'}>
          {title}
        </Paragraph>
      </View>
      {subTitle ? (
        <View style={staticServiceRequirementDetailStyles.lineView}>
          <View style={{ width: 16, height: 5 }} />
          <HorizontalSpacer size="m" />
          <>
            <VerticalSpacer size="s" />
            <Paragraph theme="smallRegular">{subTitle}</Paragraph>
          </>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

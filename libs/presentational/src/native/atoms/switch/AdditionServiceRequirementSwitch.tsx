import { COLOR_PALETTE } from '@styles/color';
import { Control, FieldValues, UseFormSetValue } from 'react-hook-form';
import { Animated, Pressable, View } from 'react-native';
import { FAIcon } from '../icon';
import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { Paragraph } from '../text';
import { HorizontalSpacer } from '../spacer';
import { useState } from 'react';
import { serviceRequirementsSwitchStyle } from './styles';

const AdditionServiceRequirement = ({
  icon,
  label,
  autoSelect,
  control,
  setValue,
  selectName,
}: {
  icon: string;
  label: string;
  autoSelect: boolean;
  control?: Control<FieldValues, any, FieldValues>;
  setValue?: UseFormSetValue<FieldValues>;
  selectName?: string;
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const circlePosition = new Animated.Value(isEnabled ? 30 : 0);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    Animated.timing(circlePosition, {
      toValue: isEnabled ? 0 : 30,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={serviceRequirementsSwitchStyle.container}>
      <View style={serviceRequirementsSwitchStyle.labelContainer}>
        {icon ? (
          <FAIcon
            iconName={icon as nativeIconNameType}
            color={COLOR_PALETTE.secondary}
            size={25}
          />
        ) : (
          <></>
        )}
        <HorizontalSpacer size="l" />
        <Paragraph theme="largeMedium">{label}</Paragraph>
        <HorizontalSpacer size="l"></HorizontalSpacer>
      </View>
      <View style={{ alignSelf: 'flex-start' }}>
        <Pressable
          style={[
            serviceRequirementsSwitchStyle.switchButton,
            isEnabled
              ? serviceRequirementsSwitchStyle.switchButtonActive
              : null,
          ]}
          onPress={toggleSwitch}
        >
          <Animated.View
            style={[
              serviceRequirementsSwitchStyle.circle,
              isEnabled ? serviceRequirementsSwitchStyle.circleActive : null,
              { transform: [{ translateX: circlePosition }] },
            ]}
          />
        </Pressable>
      </View>
    </View>
  );
};

export { AdditionServiceRequirement };

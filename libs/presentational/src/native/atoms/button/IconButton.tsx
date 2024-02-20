import { TouchableHighlight, View, Text } from 'react-native';
import { FAIcon } from '../icon';
import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { colors, commonButtonStyles } from '@presentational/native/styles';
import React from 'react';

type iconButtonProps = {
  iconName: nativeIconNameType;
  iconSize?: number;
  notificationCount: number | null;
};

const DEFAULT_ICON_SIZE = 22;

const BellIconButton = ({
  iconName,
  iconSize = DEFAULT_ICON_SIZE,
  notificationCount,
}: iconButtonProps) => {
  // methods
  const handleBellClick = () => {
    // TODO
  };
  return (
    <TouchableHighlight
      onPress={handleBellClick}
      underlayColor={colors.softBg} // Màu nền khi button được nhấn
      style={commonButtonStyles.bellIconButton}
    >
      <View style={commonButtonStyles.bellIconButton_innerContainer}>
        <FAIcon iconName={iconName} size={iconSize} color={colors.primary} />
        {notificationCount ? (
          <View style={commonButtonStyles.bellIconButton_badge}>
            <Text style={commonButtonStyles.bellIconButton_badgeText}>
              {notificationCount}
            </Text>
          </View>
        ) : (
          <React.Fragment />
        )}
      </View>
    </TouchableHighlight>
  );
};

export { BellIconButton };

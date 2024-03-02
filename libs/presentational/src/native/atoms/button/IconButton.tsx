import { TouchableHighlight, View, Text, TouchableOpacity } from 'react-native';
import { FAIcon } from '../icon';
import { colors, commonButtonStyles } from '@presentational/native/styles';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

type iconButtonProps = {
  iconSize?: number;
  notificationCount: number | null;
};

const DEFAULT_ICON_SIZE = 22;

const BellIconButton = ({
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
        <FAIcon iconName="faBell" size={iconSize} color={colors.primary} />
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

type iconBackButtonProps = {
  iconSize?: number;
};

const BackButton = React.memo(
  ({ iconSize = DEFAULT_ICON_SIZE }: iconBackButtonProps) => {
    const navigation = useNavigation();
    const handleBackClick = () => {
      navigation.goBack();
    };
    return (
      <TouchableOpacity onPress={handleBackClick}>
        <FAIcon
          iconName="faArrowLeftLong"
          size={iconSize}
          color={colors.white}
        />
      </TouchableOpacity>
    );
  }
);

export { BellIconButton, BackButton };

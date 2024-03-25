import { TouchableHighlight, View, Text } from 'react-native';
import { FAIcon } from '../../icon';
import { COLOR_PALETTE } from '@styles/color';
import React from 'react';
import { bellBtnTheme } from './styles';
import { Props } from '@fortawesome/react-native-fontawesome';
import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';

const themeIcon: {
  [key: string]: {
    iconName: nativeIconNameType;
    color: Props['color'];
  };
} = {
  whitePrimary: {
    iconName: 'faBell',
    color: COLOR_PALETTE.primary,
  },
  none: {
    iconName: 'faBellRegular',
    color: COLOR_PALETTE.black,
  },
};

type iconButtonProps = {
  iconSize?: number;
  notificationCount: number | null;
  theme?: 'whitePrimary' | 'none';
};
const BellIconButton = ({
  iconSize = 22,
  notificationCount,
  theme = 'whitePrimary',
}: iconButtonProps) => {
  const styles = bellBtnTheme[theme];
  // methods
  const handleBellClick = () => {
    // TODO
  };
  return (
    <TouchableHighlight
      onPress={handleBellClick}
      underlayColor={COLOR_PALETTE.softBg} // Màu nền khi button được nhấn
      style={styles.bellIconButton}
    >
      <View style={styles.bellIconButton_innerContainer}>
        <FAIcon size={iconSize} {...themeIcon[theme]} />
        {notificationCount ? (
          <View style={styles.bellIconButton_badge}>
            <Text style={styles.bellIconButton_badgeText}>
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

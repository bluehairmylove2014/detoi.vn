import { TouchableHighlight } from 'react-native';
import { FAIcon } from '../icon';
import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { colors, commonButtonStyles } from '@presentational/native/styles';

type iconButtonProps = {
  iconName: nativeIconNameType;
  onPress: () => void;
  iconSize?: number;
};

const DEFAULT_ICON_SIZE = 20;

const WhitePrimaryIconButton = ({
  onPress,
  iconName,
  iconSize = DEFAULT_ICON_SIZE,
}: iconButtonProps) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.zinc} // Màu nền khi button được nhấn
      style={commonButtonStyles.button_icon_whitePrimary}
    >
      <FAIcon iconName={iconName} size={iconSize} color={colors.primary} />
    </TouchableHighlight>
  );
};

export { WhitePrimaryIconButton };

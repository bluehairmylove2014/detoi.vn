import { TouchableOpacity } from 'react-native';
import { Paragraph } from '../text';
import { secondaryButtonStyle } from '@present-native/styles';

const themeList = {
  'square-rounded-bold': { borderRadius: 5 },
  'full-rounded-bold': { borderRadius: 999 },
};

type commonButtonPros = {
  title: string;
  textColor?: 'primary' | 'black' | 'rose' | 'white';
  theme: 'square-rounded-bold' | 'full-rounded-bold';
  buttonColor?: keyof typeof secondaryButtonStyle;
  onPress: () => void;
};

export const SecondaryButton = ({
  title,
  textColor = 'white',
  theme = 'square-rounded-bold',
  buttonColor = 'secondary',
  onPress,
}: commonButtonPros) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...secondaryButtonStyle[buttonColor],
        ...themeList[theme],
      }}
    >
      <Paragraph theme="baseSemibold" color={textColor}>
        {title}
      </Paragraph>
    </TouchableOpacity>
  );
};

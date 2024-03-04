import { TouchableOpacity } from 'react-native';
import { commonButtonStyles } from '@present-native/styles';
import { Paragraph } from '../text';

const themeList = {
  'square-rounded-bold': { borderRadius: 5 },
  'full-rounded-bold': { borderRadius: 999 },
};
type commonButtonPros = {
  title: string;
  theme: 'square-rounded-bold' | 'full-rounded-bold';
  onPress: () => void;
};

const PrimaryButton = ({
  title,
  theme = 'square-rounded-bold',
  onPress,
}: commonButtonPros) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...commonButtonStyles.primaryButton,
        ...themeList[theme],
      }}
    >
      <Paragraph theme="baseBold">{title}</Paragraph>
    </TouchableOpacity>
  );
};

const SmallPrimaryButton = ({
  title,
  theme = 'square-rounded-bold',
  onPress,
}: commonButtonPros) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...commonButtonStyles.smallPrimaryButton,
        ...themeList[theme],
      }}
    >
      <Paragraph theme="smallBold">{title}</Paragraph>
    </TouchableOpacity>
  );
};

const BorderButton = ({
  title,
  theme = 'square-rounded-bold',
  onPress,
}: commonButtonPros) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...commonButtonStyles.borderButton,
        ...themeList[theme],
      }}
    >
      <Paragraph theme="smallBold">{title}</Paragraph>
    </TouchableOpacity>
  );
};

export { PrimaryButton, SmallPrimaryButton, BorderButton };

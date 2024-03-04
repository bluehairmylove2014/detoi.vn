import {
  commonLinkAlign,
  commonLinkFontSize,
  commonLinkThemes,
} from '@present-native/styles';
import { Link } from '@react-navigation/native';

type commonLinkProps = {
  theme?: 'underline' | 'italic' | 'normal';
  size?: 'small' | 'base' | 'large';
  align?: 'left' | 'center' | 'right';
  title: string;
  toScreen: string;
  params?: any;
};
export const CommonLink = ({
  theme = 'normal',
  size = 'base',
  align = 'left',
  title,
  toScreen,
  params,
}: commonLinkProps) => {
  return (
    <Link
      style={[
        commonLinkThemes[theme],
        commonLinkFontSize[size],
        commonLinkAlign[align],
      ]}
      to={{ screen: toScreen, params }}
    >
      {title}
    </Link>
  );
};

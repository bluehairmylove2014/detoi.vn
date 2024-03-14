import { linkStyle } from './styles';
import { Link } from '@react-navigation/native';

export const SubtitleLink = ({
  screenName,
  children,
  algin = 'left',
  decoration = 'none',
}: {
  screenName: string;
  children: React.ReactNode;
  algin?: 'left' | 'center' | 'right';
  decoration?: 'underline' | 'line-through' | 'none';
}) => {
  return (
    <Link
      to={{ screen: screenName }}
      style={[
        linkStyle.subtitleLink,
        { textAlign: algin, textDecorationLine: decoration },
      ]}
    >
      {children}
    </Link>
  );
};

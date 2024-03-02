import { linkStyle } from '@presentational/native/styles';
import { Link } from '@react-navigation/native';

export const SubtitleLink = ({
  screenName,
  children,
  algin = 'left',
}: {
  screenName: string;
  children: React.ReactNode;
  algin?: 'left' | 'center' | 'right';
}) => {
  return (
    <Link
      to={{ screen: screenName }}
      style={[linkStyle.subtitleLink, { textAlign: algin }]}
    >
      {children}
    </Link>
  );
};

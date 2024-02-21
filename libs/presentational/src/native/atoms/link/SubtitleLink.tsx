import { linkStyle } from '@presentational/native/styles';
import { Link } from '@react-navigation/native';

export const SubtitleLink = ({
  screenName,
  children,
}: {
  screenName: string;
  children: React.ReactNode;
}) => {
  return (
    <Link to={{ screen: screenName }} style={linkStyle.subtitleLink}>
      {children}
    </Link>
  );
};

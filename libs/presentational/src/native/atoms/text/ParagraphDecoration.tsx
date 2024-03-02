import { blackParagraphStyles } from '@present-native/styles';
import { Text } from 'react-native';

const BlackUnderlineParagraph = ({
  children,
  theme,
  align = 'left',
}: {
  children: React.ReactNode;
  theme: keyof typeof blackParagraphStyles;
  align?: 'left' | 'right' | 'center';
}) => (
  <Text
    style={[
      blackParagraphStyles[theme],
      { textAlign: align },
      { textDecorationLine: 'underline' },
    ]}
  >
    {children}
  </Text>
);

const BlackLimitLineParagraph = ({
  children,
  theme,
  align = 'left',
  numberLine,
}: {
  children: React.ReactNode;
  theme: keyof typeof blackParagraphStyles;
  align?: 'left' | 'right' | 'center';
  numberLine: number;
}) => (
  <Text
    style={[blackParagraphStyles[theme], { textAlign: align }]}
    numberOfLines={numberLine}
  >
    {children}
  </Text>
);

export { BlackUnderlineParagraph, BlackLimitLineParagraph };

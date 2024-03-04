import { TouchableHighlight, View } from 'react-native';
import { FAIcon, HorizontalSpacer, Paragraph } from '@present-native/atoms';
import {
  categoryAndServiceSearchBoxStyle,
  colors,
} from '@present-native/styles';

export const CategoryAndServiceSearchBox = () => {
  // methods
  const handleSearchBoxClick = () => {
    // TODO
  };

  return (
    <TouchableHighlight
      style={categoryAndServiceSearchBoxStyle.container}
      onPress={handleSearchBoxClick}
      underlayColor={colors.softBg}
    >
      <View style={categoryAndServiceSearchBoxStyle.inner}>
        <FAIcon iconName="faMagnifyingGlass" color={colors.primary} size={20} />
        <HorizontalSpacer size="l" />
        <Paragraph theme="baseRegular">Tìm dịch vụ ở đây...</Paragraph>
      </View>
    </TouchableHighlight>
  );
};

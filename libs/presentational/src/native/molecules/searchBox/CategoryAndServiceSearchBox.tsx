import { TouchableHighlight, View } from 'react-native';
import {
  FAIcon,
  HorizontalSpacer,
  PrimaryParagraph,
} from '@present-native/atoms';
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
        <PrimaryParagraph theme="light">Tìm dịch vụ ở đây...</PrimaryParagraph>
      </View>
    </TouchableHighlight>
  );
};

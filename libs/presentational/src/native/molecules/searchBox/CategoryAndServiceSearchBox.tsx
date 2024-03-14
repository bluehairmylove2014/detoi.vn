import { TouchableHighlight, View } from 'react-native';
import { FAIcon, HorizontalSpacer, Paragraph } from '@present-native/atoms';
import { COLOR_PALETTE } from '@styles/color';
import { categoryAndServiceSearchBoxStyle } from './styles';

export const CategoryAndServiceSearchBox = () => {
  // methods
  const handleSearchBoxClick = () => {
    // TODO
  };

  return (
    <TouchableHighlight
      style={categoryAndServiceSearchBoxStyle.container}
      onPress={handleSearchBoxClick}
      underlayColor={COLOR_PALETTE.softBg}
    >
      <View style={categoryAndServiceSearchBoxStyle.inner}>
        <FAIcon
          iconName="faMagnifyingGlass"
          color={COLOR_PALETTE.primary}
          size={20}
        />
        <HorizontalSpacer size="l" />
        <Paragraph theme="baseRegular">Tìm dịch vụ ở đây...</Paragraph>
      </View>
    </TouchableHighlight>
  );
};

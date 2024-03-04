import { View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { categoryThumbnailStyle } from '@present-native/styles/category';
import { colors } from '@present-native/styles';
import { Paragraph, Title } from '@present-native/atoms';
import { ICategory } from '@business-layer/services/entities';

export const CategoryThumbnail = ({
  category,
  onPress,
}: {
  category: ICategory;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={categoryThumbnailStyle.category} onPress={onPress}>
      <Image
        source={{ uri: category.image }}
        style={categoryThumbnailStyle.categoryImage}
      />
      <LinearGradient
        colors={[colors.transparent, colors.black]}
        style={categoryThumbnailStyle.categoryOverlay}
      />
      <View style={categoryThumbnailStyle.categoryName}>
        <Paragraph theme="baseBold" color="white" align="center">
          {category.name}
        </Paragraph>
      </View>
    </TouchableOpacity>
  );
};

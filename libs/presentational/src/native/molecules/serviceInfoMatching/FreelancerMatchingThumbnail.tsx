import { View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { categoryThumbnailStyle } from '@present-native/styles/category';
import { colors } from '@present-native/styles';
import { Title } from '@present-native/atoms';
import { IMatchedFreelancer } from '@business-layer/services/entities';

export const FreelancerMatchingThumbnail = ({
  freelancerMatched,
  onPress,
}: {
  freelancerMatched: IMatchedFreelancer;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={categoryThumbnailStyle.category} onPress={onPress}>
      <Image
        source={{ uri: freelancerMatched.avatar }}
        style={categoryThumbnailStyle.categoryImage}
      />
      <LinearGradient
        colors={[colors.transparent, colors.black]}
        style={categoryThumbnailStyle.categoryOverlay}
      />
      <View style={categoryThumbnailStyle.categoryName}>
        <Title theme="baseBold" color="white">
          {freelancerMatched.teamMemberCount}
        </Title>
      </View>
    </TouchableOpacity>
  );
};

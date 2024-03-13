import { View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { categoryThumbnailStyle } from '@present-native/styles/category';
import { colors } from '@present-native/styles';
import { FAIcon, Paragraph, Title } from '@present-native/atoms';
import { IMatchedFreelancer } from '@business-layer/services/entities';
import { freelancerMatchingThumbnailStyle } from '@present-native/styles/matching';
import { AirbnbRating } from 'react-native-ratings';

export const FreelancerMatchingThumbnail = ({
  freelancerMatched,
  onPress,
}: {
  freelancerMatched: IMatchedFreelancer;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      style={freelancerMatchingThumbnailStyle.thumbnail}
      onPress={onPress}
    >
      <Image
        source={{ uri: freelancerMatched.avatar }}
        style={freelancerMatchingThumbnailStyle.freelancerImage}
      />
      <LinearGradient
        colors={[colors.transparent, colors.black]}
        style={freelancerMatchingThumbnailStyle.freelancerOverlay}
      />
      <View style={freelancerMatchingThumbnailStyle.freelancerInfoContainer}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
          }}
        >
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <AirbnbRating
              count={5}
              defaultRating={freelancerMatched.rating}
              size={12}
              showRating={false}
            />
            <Paragraph theme="smallSemibold" color="secondary">
              {freelancerMatched.loveCount}+
            </Paragraph>
          </View>
          <Title theme="baseMedium" color="white">
            {/* {freelancerMatched.previewPrice.toLocaleString('vi-VN', {
                style: 'currency',
                currency: 'VND',
            })} */}
            800.000 đ
          </Title>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 3,
            gap: 2,
          }}
        >
          {freelancerMatched.isTeam ? (
            <FAIcon iconName="faPeopleGroup" size={13} color="white" />
          ) : (
            <FAIcon iconName="faPerson" size={13} color="white" />
          )}
          <Paragraph theme="smallSemibold" color="white">
            {freelancerMatched.teamMemberCount}
          </Paragraph>
        </View>
      </View>
    </TouchableOpacity>
  );
};

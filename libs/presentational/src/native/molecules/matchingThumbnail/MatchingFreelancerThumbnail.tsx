import { View, Text, Pressable } from 'react-native';
import React from 'react';
import {
  FAIcon,
  OverlayColor,
  Paragraph,
  SquareImage,
  StarsAndReviewCount,
  VerticalSpacer,
} from '@present-native/atoms';
import { COLOR_PALETTE } from '@present-native/styles';
import { IFreelancerAccountDetail } from '@business-layer/services/entities';

type matchingFreelancerDetailProps = {
  freelancerData: IFreelancerAccountDetail;
  onPress: (freelancerData: IFreelancerAccountDetail) => void;
};
const MatchingFreelancerThumbnail: React.FC<matchingFreelancerDetailProps> = ({
  freelancerData,
  onPress,
}) => {
  return (
    <Pressable
      style={{
        width: '47%',
        overflow: 'hidden',
        borderRadius: 8,
        position: 'relative',
      }}
      onPress={() => onPress && onPress(freelancerData)}
    >
      <SquareImage source={{ uri: freelancerData.account.avatar }} />
      <OverlayColor theme="black-gradient" />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          zIndex: 2,
          paddingHorizontal: 15,
          paddingBottom: 10,
          width: '100%',
        }}
      >
        <StarsAndReviewCount
          point={freelancerData.rating}
          reviewsCount={freelancerData.totalReviewCount}
        />
        <VerticalSpacer size="s" />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Paragraph theme="baseBold" color="white">
            800.000đ
          </Paragraph>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}
          >
            {freelancerData.isTeam ? (
              <FAIcon iconName="faPeopleGroup" color={COLOR_PALETTE.white} />
            ) : (
              <FAIcon iconName="faPerson" color={COLOR_PALETTE.white} />
            )}

            <Paragraph theme="smallBold" color="white">
              {freelancerData.teamMemberCount}
            </Paragraph>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default MatchingFreelancerThumbnail;

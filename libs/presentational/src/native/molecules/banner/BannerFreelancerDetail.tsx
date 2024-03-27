import { bannerFreelancerDetailStyle } from './styles';
import React from 'react';
import { Image, View } from 'react-native';
import {
  OutlineBtn,
  OverlayColor,
  Paragraph,
  PrimaryBtn,
  Title,
  VerticalSpacer,
} from '@present-native/atoms';
import { COLOR_PALETTE } from '@present-native/styles';
import { RatingStars } from '@present-native/atoms/rating';
import { formatCurrency } from '@utils/helpers/MoneyConverter';
import { useNavigation } from '@react-navigation/native';
import { AuthHeader } from '@present-native/organisms';

type BannerChooseLocationProps = {
  url: string;
  ratingNumber: number;
  ratingCount: number;
  fullName: string;
  isTeam: boolean;
  balance: number;
  onSelectFreelancer: () => void;
};

export const BannerFreelancerDetail: React.FC<BannerChooseLocationProps> =
  React.memo(
    ({
      url,
      ratingNumber,
      ratingCount,
      fullName,
      isTeam,
      balance,
      onSelectFreelancer,
    }) => {
      const navigation = useNavigation();
      return (
        <View style={bannerFreelancerDetailStyle.container}>
          <Image
            source={{ uri: url }}
            style={bannerFreelancerDetailStyle.image}
          />
          <OverlayColor theme="black-gradient-bottom-top" />

          <View style={[bannerFreelancerDetailStyle.contentContainer]}>
            <AuthHeader childs={['CIRCLE_BACK_BUTTON']} />
            <View style={bannerFreelancerDetailStyle.body}>
              <View style={bannerFreelancerDetailStyle.wrapperTypeFreelancer}>
                <Paragraph theme="largeMedium" color="white">
                  {isTeam ? 'Đội ngũ' : 'Cá nhân'}
                </Paragraph>
                <RatingStars point={ratingNumber} reviewsCount={ratingCount} />
              </View>
              <Title theme="largeBold" color="white">
                {fullName}
              </Title>
              <Title theme="baseBold" color="white">
                {formatCurrency(balance, 'vnd')}
              </Title>
              <VerticalSpacer size="l" />
              <View style={bannerFreelancerDetailStyle.buttonContainer}>
                <View style={bannerFreelancerDetailStyle.buttonWrapper}>
                  <PrimaryBtn
                    title="Chọn người này"
                    fontSize="medium"
                    radius="full"
                    onPress={onSelectFreelancer}
                  />
                </View>
                <View style={bannerFreelancerDetailStyle.buttonWrapper}>
                  <OutlineBtn
                    title="Yêu thích"
                    color="white"
                    fontSize="medium"
                    radius="full"
                    onPress={() => {}}
                    iconName="faHeartRegular"
                    borderColor="white"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      );
    }
  );

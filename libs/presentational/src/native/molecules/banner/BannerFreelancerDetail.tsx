import { bannerFreelancerDetailStyle } from './styles';
import React from 'react';
import { Image, View } from 'react-native';
import {
  FAIcon,
  OutlineBtn,
  OverlayColor,
  Paragraph,
  PrimaryBtn,
  Title,
  VerticalSpacer,
} from '@present-native/atoms';
import { COLOR_PALETTE, screenHorizontalPadding } from '@present-native/styles';
import { onConvertNumberToCurrency } from '@utils/helpers/MoneyConverter';
import { ETypeDisplayHeader, Header } from '@present-native/organisms';
import { windowWidth } from '@constants/dimension';
import { useNavigation } from '@react-navigation/native';

type BannerChooseLocationProps = {
  url: string;
  ratingNumber: number;
  fullName: string;
  isTeam: boolean;
  balance: number;
};

export const BannerFreelancerDetail: React.FC<BannerChooseLocationProps> =
  React.memo(({ url, ratingNumber, fullName, isTeam, balance }) => {
    const navigation = useNavigation();
    return (
      <View style={bannerFreelancerDetailStyle.container}>
        <Image
          source={{ uri: url }}
          style={bannerFreelancerDetailStyle.image}
        />
        <OverlayColor theme="black-gradient" />

        <View style={[bannerFreelancerDetailStyle.contentContainer]}>
          <Header typeDisplay={[ETypeDisplayHeader.BACK_BUTTON_BACKGROUND]} />
          <View style={bannerFreelancerDetailStyle.body}>
            <View style={bannerFreelancerDetailStyle.wrapperTypeFreelancer}>
              <Paragraph theme="largeMedium" color="white">
                {isTeam ? 'Đội ngũ' : 'Cá nhân'}
              </Paragraph>
              <View style={bannerFreelancerDetailStyle.rating}>
                {Array.from({
                  length: ratingNumber,
                }).map(() => (
                  <FAIcon
                    iconName="faStar"
                    color={COLOR_PALETTE.yellow}
                    size={15}
                  />
                ))}
              </View>
              <Paragraph theme="smallRegular" color="yellow">
                99+
              </Paragraph>
            </View>
            <Title theme="largeBold" color="white">
              {fullName}
            </Title>
            <Title theme="baseBold" color="white">
              {onConvertNumberToCurrency(balance, true)}
            </Title>
            <VerticalSpacer size="l" />
            <View style={bannerFreelancerDetailStyle.buttonContainer}>
              <View style={bannerFreelancerDetailStyle.buttonWrapper}>
                <PrimaryBtn
                  title="Chọn người này"
                  fontSize="small"
                  radius="full"
                  onPress={() => {
                    navigation.navigate('Summary');
                  }}
                />
              </View>
              <View style={bannerFreelancerDetailStyle.buttonWrapper}>
                <OutlineBtn
                  title="Yêu thích"
                  fontSize="small"
                  radius="full"
                  onPress={() => {}}
                  iconName="faHeart"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  });

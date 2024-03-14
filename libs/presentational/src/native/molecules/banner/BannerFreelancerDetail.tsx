import { bannerFreelancerDetailStyle } from '@present-native/styles/banner';
import React from 'react';
import { Image, View } from 'react-native';
import {
  BackButton,
  FAIcon,
  OnlyBorderButton,
  OverlayColor,
  Paragraph,
  PrimaryButton,
  Title,
  VerticalSpacer,
} from '@present-native/atoms';
import { LocationSearchBox } from '../searchBox';
import { colors, screenHorizontalPadding } from '@present-native/styles';
import { onConvertNumberToCurrency } from '@utils/helpers/MoneyConverter';
import { ETypeDisplayHeader, Header } from '@present-native/organisms';
import { windowWidth } from '@constants/dimension';

type BannerChooseLocationProps = {
  url: string;
  ratingNumber: number;
  fullName: string;
  isTeam: boolean;
  balance: number;
};

export const BannerFreelancerDetail: React.FC<BannerChooseLocationProps> =
  React.memo(({ url, ratingNumber, fullName, isTeam, balance }) => {
    return (
      <View style={bannerFreelancerDetailStyle.container}>
        <Image
          source={{ uri: url }}
          style={bannerFreelancerDetailStyle.image}
        />
        <OverlayColor theme="black-gradient" />

        <View style={[bannerFreelancerDetailStyle.contentContainer]}>
          <Header typeDisplay={[ETypeDisplayHeader.BACK_BUTTON_BACKGROUND]} />
          <View style={{ width: '100%', gap: 2 }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
              }}
            >
              <Paragraph theme="largeMedium" color="white">
                {isTeam ? 'Đội ngũ' : 'Cá nhân'}
              </Paragraph>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                {Array.from({
                  length: ratingNumber,
                }).map(() => (
                  <FAIcon iconName="faStar" color={colors.yellow} size={15} />
                ))}
              </View>
              <Paragraph theme="smallRegular" color="yellow">
                {' '}
                99+
              </Paragraph>
            </View>
            <Title theme="largeBold" color="white">
              {fullName}
            </Title>
            <Title theme="baseBold" color="white">
              {onConvertNumberToCurrency(balance, true)}
            </Title>
            <VerticalSpacer size='l' />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                maxWidth: windowWidth,
                gap: 10,
              }}
            >
              <View
                style={{
                  width: (windowWidth - screenHorizontalPadding * 2) / 2,
                }}
              > 
                <PrimaryButton
                  title="Chọn người này"
                  size="small"
                  radius="full"
                  onPress={() => {}}
                />
              </View>
              <View
                style={{
                  width: (windowWidth - screenHorizontalPadding * 2) / 2,
                }}
              >
                <OnlyBorderButton
                  title="Yêu thích"
                  size="small"
                  radius="full"
                  onPress={() => {}}
                  color="white"
                  iconName="faHeart"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  });

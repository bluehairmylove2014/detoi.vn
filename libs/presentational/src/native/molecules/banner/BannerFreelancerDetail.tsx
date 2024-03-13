import { bannerFreelancerDetailStyle } from '@present-native/styles/banner';
import React from 'react';
import { Image, View } from 'react-native';
import {
  BackButton,
  FAIcon,
  OverlayColor,
  Paragraph,
  PrimaryButton,
  SmallPrimaryButton,
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
        <OverlayColor theme="black-gradient"></OverlayColor>

        <View style={[bannerFreelancerDetailStyle.contentContainer]}>
          <Header typeDisplay={[ETypeDisplayHeader.BACK_BUTTON_BACKGROUND]} />
          <View style={{ width: '100%' }}>
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
            <View style={{display: 'flex', flexDirection:'row', maxWidth: windowWidth}}>
              <View
                style={{ width: windowWidth - screenHorizontalPadding * 2 }}
              >
                <SmallPrimaryButton
                  onPress={() => {}}
                  theme="full-rounded-bold"
                  title="Chọn người này"
                />
              </View>
              <View
                style={{ width: windowWidth - screenHorizontalPadding * 2 }}
              >
                <SmallPrimaryButton
                  onPress={() => {}}
                  theme="full-rounded-bold"
                  title="Chọn người này"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  });

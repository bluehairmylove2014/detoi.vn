import { bannerTopSectionStyle } from './styles';
import React from 'react';
import { Image, View } from 'react-native';
import {
  BackButton,
  OverlayColor,
  Paragraph,
  Title,
  VerticalSpacer,
} from '@present-native/atoms';
import { LocationSearchBox } from '../searchBox';

type BannerChooseLocationProps = {
  url: string;
  title: string;
  subtitle?: string;
  enableSearchBox?: boolean;
  searchBoxOnChange?: (value: string) => void;
};

export const BannerTopSection: React.FC<BannerChooseLocationProps> = React.memo(
  ({
    url,
    title,
    subtitle,
    enableSearchBox = false,
    searchBoxOnChange = (value: string) => {},
  }) => {
    return (
      <View style={bannerTopSectionStyle.container}>
        <Image source={{ uri: url }} style={bannerTopSectionStyle.image} />
        <OverlayColor theme="black-gradient-bottom-top"></OverlayColor>
        <View
          style={[
            bannerTopSectionStyle.contentContainer,
            { bottom: enableSearchBox ? -25 : 30 },
          ]}
        >
          <View style={bannerTopSectionStyle.headerTitleContainer}>
            <BackButton />
            <Title theme="baseBold" color="white" align="center">
              {title}
            </Title>
            <View style={{ width: 20 }} />
          </View>
          <VerticalSpacer size="m" />
          {subtitle ? (
            <View style={bannerTopSectionStyle.headerSubtitleContainer}>
              <Paragraph
                theme="baseRegular"
                align="center"
                lineNumber={2}
                color="white"
              >
                {subtitle}
              </Paragraph>
            </View>
          ) : null}

          <VerticalSpacer size="l" />
          {enableSearchBox ? (
            <LocationSearchBox onChange={searchBoxOnChange} />
          ) : (
            <></>
          )}
        </View>
      </View>
    );
  }
);

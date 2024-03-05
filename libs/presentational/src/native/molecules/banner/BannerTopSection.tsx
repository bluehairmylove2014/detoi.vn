import { bannerTopSectionStyle } from '@present-native/styles/banner';
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
  subtitle: string;
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
        <OverlayColor theme="black-gradient"></OverlayColor>
        <View
          style={[
            bannerTopSectionStyle.contentContainer,
            { bottom: enableSearchBox ? -25 : 30 },
          ]}
        >
          <View style={bannerTopSectionStyle.headerTitleContainer}>
            <BackButton />
            <Title theme="largeBold" color="white" align="center">
              {title}
            </Title>
            <View style={{ width: 20 }} />
          </View>
          <VerticalSpacer size="m" />
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

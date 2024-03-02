import { bannerTopSectionStyle } from '@present-native/styles/banner';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import { OverlayColor } from '@present-native/atoms';

type BannerChooseLocationProps = {
  url: string;
  children?: React.ReactNode;
};

export const BannerTopSection: React.FC<BannerChooseLocationProps> = React.memo(
  ({ url, children }) => {
    return (
      <ImageBackground
        source={{ uri: url }}
        style={bannerTopSectionStyle.container}
        imageStyle={bannerTopSectionStyle.containerImage}
      >
        <OverlayColor theme="black-gradient">{children}</OverlayColor>
      </ImageBackground>
    );
  }
);

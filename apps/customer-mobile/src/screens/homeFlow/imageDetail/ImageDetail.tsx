import React from 'react';
import { ImageBackground, ImageSourcePropType, View } from 'react-native';
import { ImageDetailProps } from '../../../config';
import { Header, ETypeDisplayHeader } from '@present-native/organisms';
import { OverlayColor } from '@present-native/atoms';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { iamgeDetailScreenStyle } from './styles';

const ImageDetail: React.FC<ImageDetailProps> = ({ route, navigation }) => {
  const { imageUrl } = route.params;
  return (
    <CustomerTemplate isHideTransparentView={false}>
      <ImageBackground
        style={iamgeDetailScreenStyle.imageSection}
        source={{ uri: imageUrl } as ImageSourcePropType}
        resizeMode="cover"
      >
        <OverlayColor theme="black-gradient" />
        <View style={{ zIndex: 999 }}>
          <Header typeDisplay={[ETypeDisplayHeader.BACK_BUTTON_BACKGROUND]} />
        </View>
      </ImageBackground>
      <View style={iamgeDetailScreenStyle.descriptionSection}></View>
    </CustomerTemplate>
  );
};

export default ImageDetail;

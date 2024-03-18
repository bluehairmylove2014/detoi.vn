import React from 'react';
import { ImageBackground, ImageSourcePropType, View } from 'react-native';
import { FreelancerServiceProvenProps } from '../../../config';
import { OverlayColor } from '@present-native/atoms';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { iamgeDetailScreenStyle } from './styles';

const FreelancerServiceProven: React.FC<FreelancerServiceProvenProps> = ({ route, navigation }) => {
  const { imageUrl } = route.params;
  return (
    <CustomerTemplate>
      <ImageBackground
        style={iamgeDetailScreenStyle.imageSection}
        source={{ uri: imageUrl } as ImageSourcePropType}
        resizeMode="cover"
      >
        <OverlayColor theme="black-gradient" />
        <View style={{ zIndex: 999 }}>
          {/* <Header typeDisplay={[ETypeDisplayHeader.BACK_BUTTON_BACKGROUND]} /> */}
        </View>
      </ImageBackground>
      <View style={iamgeDetailScreenStyle.descriptionSection}></View>
    </CustomerTemplate>
  );
};

export default FreelancerServiceProven;

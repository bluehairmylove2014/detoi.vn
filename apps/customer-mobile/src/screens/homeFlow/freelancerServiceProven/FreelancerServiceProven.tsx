import React from 'react';
import { ImageBackground, ImageSourcePropType, View } from 'react-native';
import { OverlayColor } from '@present-native/atoms';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { iamgeDetailScreenStyle } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { customerScreensList } from '@constants/customerScreens';

const FreelancerServiceProven: React.FC<
  NativeStackScreenProps<customerScreensList, 'FreelancerServiceProven'>
> = ({ route, navigation }) => {
  const { imageUrl } = route.params;
  return (
    <CustomerTemplate>
      <ImageBackground
        style={iamgeDetailScreenStyle.imageSection}
        source={{ uri: imageUrl } as ImageSourcePropType}
        resizeMode="cover"
      >
        <OverlayColor theme="black-gradient-bottom-top" />
        <View style={{ zIndex: 999 }}>
          {/* <Header typeDisplay={[ETypeDisplayHeader.BACK_BUTTON_BACKGROUND]} /> */}
        </View>
      </ImageBackground>
      <View style={iamgeDetailScreenStyle.descriptionSection}></View>
    </CustomerTemplate>
  );
};

export default FreelancerServiceProven;

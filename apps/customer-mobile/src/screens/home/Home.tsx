import { View, SafeAreaView, Image } from 'react-native';
import React, { useState } from 'react';
import { HomeProps } from '../../config';
import { homeScreenStyle } from './styles';
import {
  FAIcon,
  HorizontalSpacer,
  PrimaryTitle,
  SmallParagraph,
  VerticalSpacer,
  WhitePrimaryIconButton,
} from '@present-native/atoms';
import { IEvent } from '@business-layer/services/entities';
import { colors } from '@presentational/native/styles';
import { SubtitleLink } from '@present-native/atoms';

const Home: React.FC<HomeProps> = ({ route, navigation }) => {
  // Event must be get from API
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [event, setEvent] = useState<IEvent>({
    title: 'Chào đón những người dùng đầu tiên - ưu đãi lên đến 70k',
    subtitle: 'Xem ưu đãi ngay!',
    screenName: 'ChooseLocation',
    image: 'https://detoivn.sirv.com/events/001.png',
  });

  return (
    <View style={homeScreenStyle.container}>
      <View style={homeScreenStyle.topLabel_container}>
        <View style={homeScreenStyle.topLabel_event}>
          <SafeAreaView style={homeScreenStyle.topLabelEvent_safeView}>
            <View style={homeScreenStyle.topLabelEvent_content}>
              <PrimaryTitle>{event.title}</PrimaryTitle>
              <VerticalSpacer size="m" />
              <SubtitleLink screenName="ChooseLocation">
                <SmallParagraph>{event.subtitle}</SmallParagraph>
                <HorizontalSpacer size="m" />
                <FAIcon
                  iconName="faCircleArrowRight"
                  color={colors.primary}
                  size={14}
                />
              </SubtitleLink>
            </View>
            <View style={homeScreenStyle.topLabelEvent_spacer} />
            <Image
              source={{ uri: event.image }}
              style={homeScreenStyle.topLabelEvent_image}
            />
          </SafeAreaView>
        </View>
        <View style={homeScreenStyle.topLabel_interaction}>
          <WhitePrimaryIconButton iconName="faBell" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default Home;

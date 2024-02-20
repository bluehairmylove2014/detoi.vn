import { View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { HomeProps } from '../../config';
import { homeScreenStyle, topLabelStyle, serviceSectionStyle } from './styles';
import {
  FAIcon,
  HorizontalSpacer,
  PrimaryTitle,
  PrimaryParagraph,
  VerticalSpacer,
  BellIconButton,
  SubtitleLink,
} from '@present-native/atoms';
import { ICategory, IEvent } from '@business-layer/services/entities';
import { colors } from '@present-native/styles';
import { CategoryAndServiceSearchBox } from '@present-native/molecules';
import { LinearGradient } from 'expo-linear-gradient';

const Home: React.FC<HomeProps> = ({ route, navigation }) => {
  // Event must be get from API
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [event, setEvent] = useState<IEvent>({
    title: 'Chào đón những người dùng đầu tiên - ưu đãi lên đến 70k',
    subtitle: 'Xem ưu đãi ngay!',
    screenName: 'ChooseLocation',
    image: 'https://detoivn.sirv.com/events/001.png',
  });

  // Real time get notifications
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [notifications, setNotification] = useState<number[] | null>([
    1, 2, 3, 4, 5,
  ]);

  // Get category from api
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [category, setCategory] = useState<ICategory[]>([
    {
      id: 0,
      image: 'https://detoivn.sirv.com/services/dondep/category.png',
      name: 'Dọn dẹp',
      description: '',
    },
    {
      id: 1,
      image: 'https://detoivn.sirv.com/services/suachua/category.png',
      name: 'Sửa chữa',
      description: '',
    },
    {
      id: 2,
      image: 'https://detoivn.sirv.com/services/chuyennhaphongtro/category.png',
      name: 'Chuyển nhà, phòng trọ',
      description: '',
    },
    {
      id: 3,
      image: 'https://detoivn.sirv.com/services/dicho/category.png',
      name: 'Đi chợ',
      description: '',
    },
    {
      id: 4,
      image: 'https://detoivn.sirv.com/services/vesinhmaylanh/category.png',
      name: 'Vệ sinh máy lạnh',
      description: '',
    },
  ]);

  return (
    <View style={homeScreenStyle.container}>
      <View style={topLabelStyle.container}>
        <View style={topLabelStyle.event}>
          <SafeAreaView style={topLabelStyle.event_safeView}>
            <View style={topLabelStyle.event_content}>
              <PrimaryTitle theme="event">{event.title}</PrimaryTitle>
              <VerticalSpacer size="m" />
              <SubtitleLink screenName="ChooseLocation">
                <PrimaryParagraph theme="small">
                  {event.subtitle}
                </PrimaryParagraph>
                <HorizontalSpacer size="m" />
                <FAIcon
                  iconName="faCircleArrowRight"
                  color={colors.primary}
                  size={14}
                />
              </SubtitleLink>
            </View>
            <View style={topLabelStyle.event_spacer} />
            <Image
              source={{ uri: event.image }}
              style={topLabelStyle.event_image}
            />
          </SafeAreaView>
        </View>
        <View style={topLabelStyle.interaction}>
          <View style={topLabelStyle.interaction_background_top} />
          <View style={topLabelStyle.interaction_background_bottom} />
          <View style={topLabelStyle.interaction_inner}>
            <BellIconButton
              iconName="faBell"
              notificationCount={notifications ? notifications.length : null}
            />
            <HorizontalSpacer size="l" />
            <CategoryAndServiceSearchBox />
          </View>
        </View>
      </View>
      <VerticalSpacer size="xxl" />
      <View style={serviceSectionStyle.container}>
        <PrimaryTitle theme="primary">
          Chúng tôi có thể giúp gì cho bạn?
        </PrimaryTitle>
        <VerticalSpacer size="xs" />
        <View style={serviceSectionStyle.categoriesContainer}>
          {Array.isArray(category) && category.length > 0
            ? category.map((c) => (
                <TouchableOpacity
                  style={serviceSectionStyle.category}
                  key={c.id}
                >
                  <Image
                    source={{ uri: c.image }}
                    style={serviceSectionStyle.categoryImage}
                  />
                  <LinearGradient
                    colors={[colors.transparent, colors.black]}
                    style={serviceSectionStyle.categoryOverlay}
                  />
                </TouchableOpacity>
              ))
            : null}
        </View>
      </View>
    </View>
  );
};

export default Home;

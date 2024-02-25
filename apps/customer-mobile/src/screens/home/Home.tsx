import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
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
  BlackParagraph,
} from '@present-native/atoms';
import { IEvent } from '@business-layer/services/entities';
import { colors } from '@present-native/styles';
import { CategoryAndServiceSearchBox } from '@present-native/molecules';
import CategoryThumbnail from '@present-native/molecules/category/CategoryThumbnail';
import { useGetAllCategories } from '@business-layer/business-logic/lib/category';

const Home: React.FC<HomeProps> = ({ route, navigation }) => {
  const { data: categories } = useGetAllCategories();

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
          {Array.isArray(categories) && categories.length > 0 ? (
            <>
              {categories.slice(0, 5).map((c) => (
                <CategoryThumbnail category={c} key={`category@${c.id}`} />
              ))}
              <TouchableOpacity
                style={serviceSectionStyle.categories_viewAllBtn}
              >
                <FAIcon
                  iconName="faArrowRightLong"
                  color={colors.primary}
                  size={20}
                />
                <VerticalSpacer size="s" />
                <PrimaryParagraph theme="smallBold">
                  Xem tất cả
                </PrimaryParagraph>
              </TouchableOpacity>
            </>
          ) : null}
        </View>
        <VerticalSpacer size="xs" />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={serviceSectionStyle.test}>
            <TouchableOpacity style={serviceSectionStyle.test.feedback}>
              <View>
                <PrimaryParagraph theme="small">Góp ý</PrimaryParagraph>
                <BlackParagraph theme="smallBold">
                  Thêm các dịch vụ khác
                </BlackParagraph>
              </View>
              <Image source={require('../../../assets/feedback.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={serviceSectionStyle.test.feedback}>
              <View>
                <PrimaryParagraph theme="small">Điểm tích lũy</PrimaryParagraph>
                <BlackParagraph theme="smallBold">106 điểm</BlackParagraph>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Image source={require('../../../assets/point.png')} />
                <PrimaryParagraph theme="small">Đổi ngay</PrimaryParagraph>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

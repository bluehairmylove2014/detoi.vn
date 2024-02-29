import { View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { HomeProps } from '../../config';
import {
  homeScreenStyle,
  topLabelStyle,
  serviceSectionStyle,
  endowSectionStyle,
  memberSectionStyle,
} from './styles';
import {
  FAIcon,
  HorizontalSpacer,
  PrimaryTitle,
  PrimaryParagraph,
  VerticalSpacer,
  BellIconButton,
  SubtitleLink,
  PrimaryScrollView,
} from '@present-native/atoms';
import { IEvent } from '@business-layer/services/entities';
import { colors } from '@present-native/styles';
import { CategoryAndServiceSearchBox } from '@present-native/molecules';
import CategoryThumbnail from '@present-native/molecules/category/CategoryThumbnail';
import { useGetAllCategories } from '@business-layer/business-logic/lib/category';
import EndowItem from '@present-native/molecules/endow/EndowItem';
import ServiceCard from '@present-native/molecules/card/ServiceCard';

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

  // Get point from api
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [point, setPoint] = useState(105);

  // Get endow from api
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [endows, setEndows] = useState([
    {
      image: null,
      description: 'Giảm nóng 20k cho lần đầu trải nghiệm dịch vụ',
      label: 'Tất cả dịch vụ',
    },

    {
      image: null,
      description: 'Dọn nhà cuối năm, giảm tới 50k',
      label: 'Dọn dẹp',
    },
  ]);

  // Get member from api
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [members, setMember] = useState(['']);

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

        {/* Other service */}
        <VerticalSpacer size="xs" />
        <View style={serviceSectionStyle.other_service}>
          <ServiceCard
            title="Thêm dịch vụ khác"
            subtitle="Góp ý"
            iconName="faBox"
            onPress={() => {
              console.log('Gop y');
            }}
          />
          <ServiceCard
            title={`${point} điểm`}
            subtitle="Điểm tích lũy"
            iconName="faShoppingBag"
            onPress={() => {
              console.log('Gop y');
            }}
          />
          {/* <TouchableOpacity style={serviceSectionStyle.card}>
            <View>
              <PrimaryParagraph theme="small">Góp ý</PrimaryParagraph>
              <BlackParagraph theme="smallBold">
                Thêm dịch vụ khác
              </BlackParagraph>
            </View>
            <Image source={require('../../../assets/feedback.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={serviceSectionStyle.card}>
            <View>
              <PrimaryParagraph theme="small">Điểm tích lũy</PrimaryParagraph>
              <BlackParagraph theme="smallBold">{point} điểm</BlackParagraph>
            </View>
            <Image source={require('../../../assets/point.png')} />
          </TouchableOpacity> */}
        </View>

        {/* Endow */}
        <VerticalSpacer size="xs" />
        <PrimaryTitle theme="primary">Ưu đãi dành riêng cho bạn</PrimaryTitle>
        <VerticalSpacer size="xs" />
        <PrimaryScrollView direction="horizontal">
          <View style={endowSectionStyle.container}>
            {Array.isArray(endows) && endows.length > 0 ? (
              <>
                {endows.map((item, index) => (
                  <EndowItem
                    key={index}
                    image={item.image}
                    description={item.description}
                    label={item.label}
                  />
                ))}
              </>
            ) : null}
          </View>
        </PrimaryScrollView>

        {/* Member */}
        {/* Use member state get from api */}
        <VerticalSpacer size="xs" />
        <PrimaryTitle theme="primary">Gói hội viên Detoi</PrimaryTitle>
        <VerticalSpacer size="xs" />
        <View style={memberSectionStyle.container}>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/member1.png')}
              style={memberSectionStyle.member_image}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/member2.png')}
              style={memberSectionStyle.member_image}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

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
  Title,
  Paragraph,
  VerticalSpacer,
  BellIconButton,
  SubtitleLink,
  PrimaryScrollView,
  Thumbnail,
} from '@present-native/atoms';
import { IEvent } from '@business-layer/services/entities';
import { colors } from '@present-native/styles';
import { CategoryAndServiceSearchBox } from '@present-native/molecules';
import { CategoryThumbnail } from '@present-native/molecules/category/CategoryThumbnail';
import { useGetAllCategories } from '@business-layer/business-logic/lib/category';
import EndowItem from '@present-native/molecules/endow/EndowItem';
import ServiceCard from '@present-native/molecules/card/ServiceCard';
import CustomerTemplate from '@presentational/native/templates/CustomerTemplate';

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
      image:
        'https://detoivn.sirv.com/voucher/_636da2ee-7b55-4d92-969f-b51607820058.jpg',
      description: 'Giảm nóng 20k cho lần đầu trải nghiệm dịch vụ',
      label: 'Tất cả dịch vụ',
    },

    {
      image: 'https://detoivn.sirv.com/voucher/sale.png',
      description: 'Dọn nhà cuối năm, giảm tới 50k',
      label: 'Dọn dẹp',
    },
  ]);

  // Get member from api
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [members, setMember] = useState([
    {
      id: '1',
      thumbnail:
        'https://detoivn.sirv.com/subscribe/_49dca4ad-3405-40d8-b33d-facfaeff071a.png',
    },
    {
      id: '2',
      thumbnail:
        'https://detoivn.sirv.com/subscribe/_3cf1c993-becb-4b65-bfe5-dda32fd03b31.png',
    },
  ]);

  // Real time get notifications
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [notifications, setNotification] = useState<number[] | null>([
    1, 2, 3, 4, 5,
  ]);

  return (
    <CustomerTemplate>
      <View style={homeScreenStyle.container}>
        <View style={topLabelStyle.container}>
          <View style={topLabelStyle.event}>
            <SafeAreaView style={topLabelStyle.event_safeView}>
              <View style={topLabelStyle.event_content}>
                <Title theme="baseMedium" color="primary">
                  {event.title}
                </Title>
                <VerticalSpacer size="m" />
                <SubtitleLink screenName="ChooseLocation">
                  <Paragraph theme="smallMedium" color="primary">
                    {event.subtitle}
                  </Paragraph>
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
          <Title theme="baseBold">Chúng tôi có thể giúp gì cho bạn?</Title>
          <VerticalSpacer size="xs" />
          <View style={serviceSectionStyle.categoriesContainer}>
            {Array.isArray(categories) && categories.length > 0 ? (
              <>
                {categories.slice(0, 5).map((c) => (
                  <CategoryThumbnail
                    category={c}
                    key={`category@${c.id}`}
                    onPress={() => {
                      navigation.navigate('ChooseService', {
                        categoryId: c.id,
                      });
                    }}
                  />
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
                  <Paragraph theme="smallBold" color="primary">
                    Xem tất cả
                  </Paragraph>
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
              iconName="container"
              onPress={() => {
                console.log('Gop y');
              }}
            />
            <ServiceCard
              title={`${point} điểm`}
              subtitle="Điểm tích lũy"
              iconName="shoppingBag"
              onPress={() => {
                console.log('Điểm tích lũy');
              }}
            />
          </View>

          {/* Endow */}
          <VerticalSpacer size="xs" />
          <Title theme="baseBold" color="primary">
            Ưu đãi dành riêng cho bạn
          </Title>
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
          {Array.isArray(members) && members.length > 0 ? (
            <>
              <VerticalSpacer size="xs" />
              <Title theme="baseBold" color="primary">
                Gói hội viên Detoi
              </Title>
              <VerticalSpacer size="xs" />
              <View style={memberSectionStyle.container}>
                {members.map((m) => (
                  <Thumbnail theme="fullWidth" image={m.thumbnail} key={m.id} />
                ))}
              </View>
            </>
          ) : null}
        </View>
      </View>
    </CustomerTemplate>
  );
};

export default Home;

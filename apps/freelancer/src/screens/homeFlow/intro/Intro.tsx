import {
  Paragraph,
  PrimaryBtn,
  SecondaryBtn,
  Title,
  VerticalSpacer,
} from '@present-native/atoms';
import { COLOR_PALETTE, screenHorizontalPadding } from '@present-native/styles';
import React, { useState } from 'react';
import { View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import {
  introScreenStyles,
  footIntroScreenStyles,
  bodyIntroScreenStyles,
} from './styles';

const DotPager = React.memo(({ isSelected }: { isSelected: boolean }) => {
  return (
    <View
      style={{
        height: 15,
        width: 15,
        borderRadius: 99,
        backgroundColor: isSelected
          ? COLOR_PALETTE.primary
          : COLOR_PALETTE.black,
        opacity: isSelected ? 1 : 0.3,
      }}
    />
  );
});

const CONTENTS_PAGINATION = [
  {
    title: 'Đa dạng dịch vụ',
    description:
      'Vô vàn dịch vụ đang cần bạn, hãy chọn các dịch vụ bạn có thể làm',
    image: require('../../../../assets/splash-intro-1.png'),
  },
  {
    title: 'Bạn tự định giá',
    description:
      'Phí dịch vụ do bạn hoàn toàn quyết định. Dịch vụ bạn làm, giá trị bạn định',
    image: require('../../../../assets/splash-intro-2.png'),
  },
  {
    title: 'Dễ dàng kết nối',
    description:
      'Hỗ trợ tìm và nhận đơn dễ dàng hơn phương pháp truyền thống gấp 2 lần',
    image: require('../../../../assets/splash-intro-3.png'),
  },
];

const Intro = React.memo(() => {
  const [indexPagination, setIndexPaginations] = useState<number>(0);

  const actionBackPage = React.useCallback(() => {
    setIndexPaginations((prevIndex) => prevIndex - 1);
  }, [setIndexPaginations]);

  const actionNextPage = React.useCallback(() => {
    setIndexPaginations((prevIndex) =>
      prevIndex + 1 < CONTENTS_PAGINATION.length ? prevIndex + 1 : prevIndex
    );
  }, [setIndexPaginations]);

  return (
    <SafeAreaView style={introScreenStyles.container}>
      <View style={introScreenStyles.body}>
        <VerticalSpacer size="xxxl" />
        {
          <View style={bodyIntroScreenStyles.bodyWrapper}>
            <Image
              source={CONTENTS_PAGINATION[indexPagination].image}
              style={bodyIntroScreenStyles.image}
            />
            <VerticalSpacer size="xl" />
            <View style={{ paddingHorizontal: screenHorizontalPadding }}>
              <Title theme="largeBold" align="center" color="primary">
                {CONTENTS_PAGINATION[indexPagination].title}
              </Title>
              <Paragraph align="center" theme="smallRegular">
                {CONTENTS_PAGINATION[indexPagination].description}
              </Paragraph>
            </View>
          </View>
        }
      </View>
      <View style={introScreenStyles.foot}>
        {indexPagination > 0 ? (
          <View style={footIntroScreenStyles.button}>
            <SecondaryBtn
              onPress={actionBackPage}
              title="Quay lại"
              iconName="faChevronLeft"
              iconPosition="left"
            />
          </View>
        ) : (
          <View style={footIntroScreenStyles.button} />
        )}
        <View style={footIntroScreenStyles.dotPagerWrapper}>
          {CONTENTS_PAGINATION.map((_, index) => (
            <TouchableOpacity onPress={() => setIndexPaginations(index)}>
              <DotPager isSelected={indexPagination === index} />
            </TouchableOpacity>
          ))}
        </View>
        <View style={footIntroScreenStyles.button}>
          <PrimaryBtn
            onPress={actionNextPage}
            title="Tiếp tục"
            iconName="faChevronRight"
            iconPosition="right"
          />
        </View>
      </View>
    </SafeAreaView>
  );
});

export default Intro;

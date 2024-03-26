import {
  Paragraph,
  PrimaryBtn,
  SecondaryBtn,
  Title,
  VerticalSpacer,
} from '@present-native/atoms';
import { screenHorizontalPadding } from '@present-native/styles';
import React, { useState } from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import {
  introScreenStyles,
  footIntroScreenStyles,
  bodyIntroScreenStyles,
} from './styles';
import { freelancerIntroGreeting } from '@constants/freelancerIntroGreeting';
import { DotPager } from '@present-native/molecules';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { freelancerScreensList } from '@constants/freelancerScreens';
import { useAuthNavigation } from '@business-layer/business-logic/non-service-lib/navigation';
import { useIsLogged } from '@business-layer/business-logic/lib/auth';

const Intro: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'Intro'>
> = ({ route, navigation }) => {
  const [indexPagination, setIndexPaginations] = useState<number>(0);
  const { navigateToScreenInSameStack, navigateToScreenInDifferentStack } =
    useAuthNavigation();
  const isLogged = useIsLogged();
  const handleBackPage = React.useCallback(() => {
    setIndexPaginations((prevIndex) => prevIndex - 1);
  }, [setIndexPaginations]);

  const handleNextPage = React.useCallback(() => {
    if (indexPagination + 1 === freelancerIntroGreeting.length) {
      isLogged
        ? navigateToScreenInSameStack('Home')
        : navigateToScreenInDifferentStack('AuthStack', 'Login');
      return;
    }
    setIndexPaginations((prevIndex) =>
      prevIndex + 1 < freelancerIntroGreeting.length ? prevIndex + 1 : prevIndex
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexPagination]);

  return (
    <SafeAreaView style={introScreenStyles.container}>
      <View style={introScreenStyles.body}>
        <VerticalSpacer size="xxxl" />
        {
          <View style={bodyIntroScreenStyles.bodyWrapper}>
            <Image
              source={freelancerIntroGreeting[indexPagination].image}
              style={bodyIntroScreenStyles.image}
            />
            <VerticalSpacer size="xl" />
            <View style={{ paddingHorizontal: screenHorizontalPadding }}>
              <Title theme="largeBold" align="center" color="primary">
                {freelancerIntroGreeting[indexPagination].title}
              </Title>
              <Paragraph align="center" theme="smallRegular" color="primary">
                {freelancerIntroGreeting[indexPagination].description}
              </Paragraph>
            </View>
          </View>
        }
      </View>
      <View style={introScreenStyles.foot}>
        {indexPagination > 0 ? (
          <View style={footIntroScreenStyles.button}>
            <SecondaryBtn
              fontSize="small"
              onPress={handleBackPage}
              title="Quay lại"
              iconName="faChevronLeft"
              iconPosition="left"
            />
          </View>
        ) : (
          <View style={footIntroScreenStyles.button} />
        )}
        <View style={footIntroScreenStyles.dotPagerWrapper}>
          <DotPager
            indexSelected={indexPagination}
            numberDot={freelancerIntroGreeting.length}
          />
        </View>
        <View style={footIntroScreenStyles.button}>
          <PrimaryBtn
            fontSize="small"
            onPress={handleNextPage}
            title="Tiếp tục"
            iconName="faChevronRight"
            iconPosition="right"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Intro;

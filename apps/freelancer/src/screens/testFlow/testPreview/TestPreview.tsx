import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { freelancerScreensList } from '@constants/freelancerScreens';
import {
  BaseLink,
  FAIcon,
  HorizontalSpacer,
  Paragraph,
  PrimaryBtn,
  Title,
  VerticalSpacer,
} from '@present-native/atoms';
import { COLOR_PALETTE } from '@present-native/styles';
import { useAuthNavigation } from '@business-layer/business-logic/non-service-lib/navigation';
import { testPreviewStyle } from './styles';
import { Test } from './mock';
import FreelancerTemplate from '@present-native/templates/FreelancerTemplate';
import { ITest } from '@business-layer/services/entities';

const reviewInfo = {
  title: 'Kiểm tra kiến thức!',
  description:
    'Hãy giúp chúng tôi trả lời 1 vài câu hỏi liên quan tới kỹ năng bạn đã chọn. Điểm càng cao, uy tín càng cao. (Bạn vẫn có thể làm lại bài kiểm tra sau khi đã tạo tài khoản thành công)',
};

const HAPPY_POINT = 40;

const TestPreview: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'TestPreview'>
> = () => {
  const { navigateToScreenInSameStack } = useAuthNavigation();
  const [test, setTest] = useState<ITest | undefined>(undefined);

  // Simulating a 2-second delay before setting the test data
  useEffect(() => {
    setTimeout(() => {
      setTest(Test);
    }, 2000);
  }, []);

  return (
    <FreelancerTemplate>
      <View style={testPreviewStyle.safeAreaContainer}>
        <SafeAreaView>
          <View style={testPreviewStyle.container}>
            <Title theme="largeBold" color="primary">
              {reviewInfo.title}
            </Title>

            <VerticalSpacer size="s" />
            <Paragraph theme="smallMedium" color="primary">
              {reviewInfo.description}
            </Paragraph>

            <VerticalSpacer size="xl" />
            {test === undefined ? (
              <View style={testPreviewStyle.loaderContain}>
                <ActivityIndicator size="large" color={COLOR_PALETTE.primary} />
                <VerticalSpacer size="m" />
                <Paragraph theme="baseBold" color="primary">
                  Bộ đề đang được tải
                </Paragraph>
              </View>
            ) : (
              <View>
                <View style={testPreviewStyle.flexRowCenterItem}>
                  <View style={testPreviewStyle.flexRowCenterItem}>
                    <View style={testPreviewStyle.iconContainer}>
                      <FAIcon
                        iconName="faFileCircleQuestion"
                        color={COLOR_PALETTE.primary}
                        size={17}
                      />
                    </View>
                    <HorizontalSpacer size="m" />
                    <Paragraph theme="baseBold" color="primary">
                      {test.totalQuestion} câu hỏi
                    </Paragraph>
                  </View>

                  <HorizontalSpacer size="xxxl" />

                  <View style={testPreviewStyle.flexRowCenterItem}>
                    <View style={testPreviewStyle.iconContainer}>
                      <FAIcon
                        iconName="faStopwatch"
                        color={COLOR_PALETTE.primary}
                        size={17}
                      />
                    </View>
                    <HorizontalSpacer size="m" />
                    <Paragraph theme="baseBold" color="primary">
                      {test.totalTime / 60} phút
                    </Paragraph>
                  </View>
                </View>

                <VerticalSpacer size="xl" />
                <PrimaryBtn
                  radius="full"
                  title="Bắt đầu ngay"
                  onPress={() =>
                    navigateToScreenInSameStack('TestInProgress', {
                      params: {
                        test: test,
                        pointToPass: HAPPY_POINT,
                      },
                    })
                  }
                  isFitContent={true}
                />
              </View>
            )}

            <VerticalSpacer size="xl" />
            <BaseLink screen="Home">
              <Paragraph
                theme="smallMedium"
                align="center"
                decoration="underline"
              >
                Tôi sẽ làm sau
              </Paragraph>
            </BaseLink>
          </View>
        </SafeAreaView>
      </View>
    </FreelancerTemplate>
  );
};

export default TestPreview;

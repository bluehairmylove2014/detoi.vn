import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { freelancerScreensList } from '@constants/freelancerScreens';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { testOverviewStyle } from './styles';
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

const overview = {
  title: 'Kiểm tra kiến thức!',
  description:
    'Hãy giúp chúng tôi trả lời 1 vài câu hỏi liên quan tới kỹ năng bạn đã chọn. Điểm càng cao, uy tín càng cao. (Bạn vẫn có thể làm lại bài kiểm tra sau khi đã tạo tài khoản thành công)',
  numberQuestion: 20,
  time: 5,
};

const TestOverview: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'Test'>
> = () => {
  const { navigateToScreenInSameStack } = useAuthNavigation();

  return (
    <CustomerTemplate>
      <View style={testOverviewStyle.container}>
        <Title theme="largeBold" color="primary">
          {overview.title}
        </Title>

        <VerticalSpacer size="s" />
        <Paragraph theme="smallMedium" color="primary">
          {overview.description}
        </Paragraph>

        <VerticalSpacer size="xl" />
        <View style={testOverviewStyle.flexRowCenterItem}>
          <View style={testOverviewStyle.flexRowCenterItem}>
            <View style={testOverviewStyle.iconContainer}>
              <FAIcon
                iconName="faFileCircleQuestion"
                color={COLOR_PALETTE.primary}
                size={17}
              />
            </View>
            <HorizontalSpacer size="m" />
            <Paragraph theme="baseBold" color="primary">
              {overview.numberQuestion} câu hỏi
            </Paragraph>
          </View>

          <HorizontalSpacer size="xxxl" />

          <View style={testOverviewStyle.flexRowCenterItem}>
            <View style={testOverviewStyle.iconContainer}>
              <FAIcon
                iconName="faStopwatch"
                color={COLOR_PALETTE.primary}
                size={17}
              />
            </View>
            <HorizontalSpacer size="m" />
            <Paragraph theme="baseBold" color="primary">
              {overview.time} phút
            </Paragraph>
          </View>
        </View>

        <VerticalSpacer size="xl" />
        <PrimaryBtn
          radius="full"
          title="Bắt đầu ngay"
          onPress={() => navigateToScreenInSameStack('OnTest')}
          isFitContent={true}
        />

        <VerticalSpacer size="xl" />
        <BaseLink screen="Home">
          <Paragraph theme="smallMedium" align="center" decoration="underline">
            Tôi sẽ làm sau
          </Paragraph>
        </BaseLink>
      </View>
    </CustomerTemplate>
  );
};

export default TestOverview;

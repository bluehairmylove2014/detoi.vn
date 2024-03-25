import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { freelancerScreensList } from '@constants/freelancerScreens';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
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
import { IQuestion } from '@business-layer/services/entities';

const reviewInfo = {
  title: 'Kiểm tra kiến thức!',
  description:
    'Hãy giúp chúng tôi trả lời 1 vài câu hỏi liên quan tới kỹ năng bạn đã chọn. Điểm càng cao, uy tín càng cao. (Bạn vẫn có thể làm lại bài kiểm tra sau khi đã tạo tài khoản thành công)',
  time: 5,
  pointToPass: 40,
};

const questionList: IQuestion[] = [
  {
    id: '1',
    question:
      'Bạn nên làm gì để vệ sinh thớt gỗ nhằm ngăn ngừa vi khuẩn tích tụ?',
    point: 10,
    answers: [
      {
        id: '1',
        answer: 'Ngâm trong dung dịch tẩy trắng',
        isCorrect: false,
      },
      {
        id: '2',
        answer: 'Ngâm trong dung dịch tẩy trắng',
        isCorrect: false,
      },
      {
        id: '3',
        answer: 'Rửa bằng giấm',
        isCorrect: false,
      },
      {
        id: '4',
        answer: 'Rửa bằng xà phòng và nước',
        isCorrect: true,
      },
    ],
  },
  {
    id: '1',
    question:
      'Bạn nên làm gì để vệ sinh thớt gỗ nhằm ngăn ngừa vi khuẩn tích tụ?',
    point: 10,
    answers: [
      {
        id: '1',
        answer: 'Ngâm trong dung dịch tẩy trắng',
        isCorrect: true,
      },
      {
        id: '2',
        answer: 'Ngâm trong dung dịch tẩy trắng',
        isCorrect: false,
      },
      {
        id: '3',
        answer: 'Rửa bằng giấm',
        isCorrect: false,
      },
      {
        id: '4',
        answer: 'Rửa bằng xà phòng và nước',
        isCorrect: false,
      },
    ],
  },
  {
    id: '1',
    question:
      'Bạn nên làm gì để vệ sinh thớt gỗ nhằm ngăn ngừa vi khuẩn tích tụ?',
    point: 10,
    answers: [
      {
        id: '1',
        answer: 'Ngâm trong dung dịch tẩy trắng',
        isCorrect: false,
      },
      {
        id: '2',
        answer: 'Ngâm trong dung dịch tẩy trắng',
        isCorrect: true,
      },
      {
        id: '3',
        answer: 'Rửa bằng giấm',
        isCorrect: false,
      },
      {
        id: '4',
        answer: 'Rửa bằng xà phòng và nước',
        isCorrect: false,
      },
    ],
  },
  {
    id: '1',
    question:
      'Bạn nên làm gì để vệ sinh thớt gỗ nhằm ngăn ngừa vi khuẩn tích tụ?',
    point: 10,
    answers: [
      {
        id: '1',
        answer: 'Ngâm trong dung dịch tẩy trắng',
        isCorrect: false,
      },
      {
        id: '2',
        answer: 'Ngâm trong dung dịch tẩy trắng',
        isCorrect: false,
      },
      {
        id: '3',
        answer: 'Rửa bằng giấm',
        isCorrect: false,
      },
      {
        id: '4',
        answer: 'Rửa bằng xà phòng và nước',
        isCorrect: true,
      },
    ],
  },
];

const TestPreview: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'TestPreview'>
> = () => {
  const { navigateToScreenInSameStack } = useAuthNavigation();

  return (
    <CustomerTemplate>
      <View style={testPreviewStyle.container}>
        <Title theme="largeBold" color="primary">
          {reviewInfo.title}
        </Title>

        <VerticalSpacer size="s" />
        <Paragraph theme="smallMedium" color="primary">
          {reviewInfo.description}
        </Paragraph>

        <VerticalSpacer size="xl" />
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
              {questionList.length} câu hỏi
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
              {reviewInfo.time} phút
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
                timeLimit: reviewInfo.time,
                questionList: questionList,
                pointToPass: reviewInfo.pointToPass,
              },
            })
          }
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

export default TestPreview;

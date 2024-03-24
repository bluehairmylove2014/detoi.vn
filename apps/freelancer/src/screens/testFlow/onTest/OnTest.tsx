import { freelancerScreensList } from '@constants/freelancerScreens';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OnTestStyle } from './styles';
import { View } from 'react-native';
import {
  AnswerButton,
  Paragraph,
  PrimaryBtn,
  ProgressBarTime,
  Title,
  VerticalSpacer,
} from '@present-native/atoms';
import { useEffect, useState } from 'react';
import { useAuthNavigation } from '@business-layer/business-logic/non-service-lib/navigation';

export type statusAnswerType = 'normal' | 'correct' | 'wrong' | 'noneSelect';

const TIME_LIMIT = 5;
const questionList = [
  {
    question:
      'Bạn nên làm gì để vệ sinh thớt gỗ nhằm ngăn ngừa vi khuẩn tích tụ?',
    point: 10,
    answers: [
      {
        answer: 'Ngâm trong dung dịch tẩy trắng',
        isCorrect: false,
      },
      {
        answer: 'Ngâm trong dung dịch tẩy trắng',
        isCorrect: false,
      },
      {
        answer: 'Rửa bằng giấm',
        isCorrect: false,
      },
      {
        answer: 'Rửa bằng xà phòng và nước',
        isCorrect: true,
      },
    ],
  },
  {
    question:
      'Bạn nên làm gì để vệ sinh thớt gỗ nhằm ngăn ngừa vi khuẩn tích tụ?',
    point: 10,
    answers: [
      {
        answer: 'Ngâm trong dung dịch tẩy trắng',
        isCorrect: false,
      },
      {
        answer: 'Ngâm trong dung dịch tẩy trắng',
        isCorrect: false,
      },
      {
        answer: 'Rửa bằng giấm',
        isCorrect: false,
      },
      {
        answer: 'Rửa bằng xà phòng và nước',
        isCorrect: true,
      },
    ],
  },
  {
    question:
      'Bạn nên làm gì để vệ sinh thớt gỗ nhằm ngăn ngừa vi khuẩn tích tụ?',
    point: 10,
    answers: [
      {
        answer: 'Ngâm trong dung dịch tẩy trắng',
        isCorrect: false,
      },
      {
        answer: 'Ngâm trong dung dịch tẩy trắng',
        isCorrect: false,
      },
      {
        answer: 'Rửa bằng giấm',
        isCorrect: false,
      },
      {
        answer: 'Rửa bằng xà phòng và nước',
        isCorrect: true,
      },
    ],
  },
  {
    question:
      'Bạn nên làm gì để vệ sinh thớt gỗ nhằm ngăn ngừa vi khuẩn tích tụ?',
    point: 10,
    answers: [
      {
        answer: 'Ngâm trong dung dịch tẩy trắng',
        isCorrect: false,
      },
      {
        answer: 'Ngâm trong dung dịch tẩy trắng',
        isCorrect: false,
      },
      {
        answer: 'Rửa bằng giấm',
        isCorrect: false,
      },
      {
        answer: 'Rửa bằng xà phòng và nước',
        isCorrect: true,
      },
    ],
  },
];

const OnTest: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'OnTest'>
> = () => {
  const [timerCount, setTimerCount] = useState<number>(TIME_LIMIT * 60);
  const [indexQuestionCurrent, setIndexQuestionCurrent] = useState(0);
  const [currentPoint, setCurrentPoint] = useState(0);
  const { navigateToScreenInSameStack } = useAuthNavigation();

  const [stateAnswerList, setStateAnswerList] = useState<statusAnswerType[]>([
    'normal',
    'normal',
    'normal',
    'normal',
  ]);

  const handleAnswerSelection = (
    indexAnswerCurrent: number,
    answerCurrentisCorrect: boolean
  ) => {
    const newStateAnswerList = [...stateAnswerList];

    if (answerCurrentisCorrect) {
      setCurrentPoint(currentPoint + questionList[indexQuestionCurrent].point);
      newStateAnswerList[indexAnswerCurrent] = 'correct';
    } else newStateAnswerList[indexAnswerCurrent] = 'wrong';

    // eslint-disable-next-line array-callback-return
    questionList[indexQuestionCurrent].answers.map((stateAnswer, index) => {
      if (index !== indexAnswerCurrent) {
        newStateAnswerList[index] = stateAnswer.isCorrect
          ? 'correct'
          : 'noneSelect';
      }
    });

    setStateAnswerList(newStateAnswerList);
  };

  const checkPoint = (point: number) => {
    if (currentPoint === 40)
      navigateToScreenInSameStack('TestResult', {
        params: {
          isSuccess: true,
          pointTest: 40,
        },
      });
    else {
      navigateToScreenInSameStack('TestResult', {
        params: {
          isSuccess: false,
          pointTest: currentPoint,
        },
      });
    }
  };

  const handleNextQuestion = () => {
    if (indexQuestionCurrent < 3) {
      const newStateAnswerList = [...stateAnswerList];

      // eslint-disable-next-line array-callback-return
      questionList[indexQuestionCurrent].answers.map((stateAnswer, index) => {
        newStateAnswerList[index] = 'normal';
      });

      setStateAnswerList(newStateAnswerList);
      setIndexQuestionCurrent(indexQuestionCurrent + 1);
    } else checkPoint(currentPoint);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerCount((prevTimerCount) => {
        if (prevTimerCount === 1) {
          clearInterval(interval);
          checkPoint(currentPoint);
        }
        return prevTimerCount - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CustomerTemplate>
      <View style={OnTestStyle.container}>
        <Title theme="largeBold" color="primary">
          Kiểm tra
        </Title>

        <VerticalSpacer size="xl" />
        <ProgressBarTime
          widthProgress={100 - (timerCount * 100) / 300}
          timeCount={`${Math.floor(timerCount / 60)
            .toString()
            .padStart(2, '0')}:${(timerCount % 60)
            .toString()
            .padStart(2, '0')}`}
        />

        <VerticalSpacer size="xxxl" />
        <View style={OnTestStyle.questionContainer}>
          <>
            <View style={OnTestStyle.questionPointContainer}>
              <Paragraph theme="smallMedium" color="gray">
                Câu hỏi {indexQuestionCurrent + 1}
              </Paragraph>
              <Paragraph theme="smallMedium" color="gray">
                {questionList[indexQuestionCurrent].point} điểm
              </Paragraph>
            </View>

            <VerticalSpacer size="l" />
            <Paragraph theme="baseBold">
              {questionList[indexQuestionCurrent].question}
            </Paragraph>

            <VerticalSpacer size="xl" />
            {questionList[indexQuestionCurrent].answers.map((answer, index) => {
              return (
                <View key={`answer-${index}`}>
                  <AnswerButton
                    answer={answer.answer}
                    index={index}
                    status={stateAnswerList[index]}
                    onPress={() =>
                      handleAnswerSelection(index, answer.isCorrect)
                    }
                  />
                  <VerticalSpacer size="xl" />
                </View>
              );
            })}

            <VerticalSpacer size="xxl" />
            <View style={{ paddingHorizontal: 100 }}>
              <PrimaryBtn
                title="Tiếp tục"
                radius="full"
                onPress={handleNextQuestion}
                fontSize="medium"
              />
            </View>
          </>
        </View>
      </View>
    </CustomerTemplate>
  );
};

export default OnTest;

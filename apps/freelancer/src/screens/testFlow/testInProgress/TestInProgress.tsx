import { freelancerScreensList } from '@constants/freelancerScreens';
import CustomerTemplate from '@present-native/templates/CustomerTemplate';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Animated, Easing, View } from 'react-native';
import {
  AnswerButton,
  Paragraph,
  PrimaryBtn,
  ProgressBarTime,
  Title,
  VerticalSpacer,
} from '@present-native/atoms';
import { useEffect, useRef, useState } from 'react';
import { useAuthNavigation } from '@business-layer/business-logic/non-service-lib/navigation';
import { TestInProgressStyle } from './styles';

export type statusAnswerType = 'normal' | 'correct' | 'wrong' | 'noneSelect';

const TestInProgress: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'TestInProgress'>
> = ({ route, navigation }) => {
  const { timeLimit, questionList, pointToPass } = route.params;

  const [timerCount, setTimerCount] = useState<number>(timeLimit * 60);
  const [isDisableContinute, setIsDisableContinue] = useState<boolean>(true);
  const [indexQuestionCurrent, setIndexQuestionCurrent] = useState(0);
  const [currentPoint, setCurrentPoint] = useState(0);
  const { navigateToScreenInSameStack } = useAuthNavigation();

  const [stateAnswerList, setStateAnswerList] = useState<statusAnswerType[]>([
    'normal',
    'normal',
    'normal',
    'normal',
  ]);
  const opacity = useRef(new Animated.Value(1)).current;

  const handleAnswerSelection = (
    indexAnswerCurrent: number,
    answerCurrentisCorrect: boolean
  ) => {
    setIsDisableContinue(false);
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
    if (currentPoint === pointToPass)
      navigateToScreenInSameStack('TestResult', {
        params: {
          isSuccess: true,
          pointTest: currentPoint,
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
    Animated.timing(opacity, {
      toValue: 0.5,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      if (indexQuestionCurrent < questionList.length - 1) {
        const newStateAnswerList = [...stateAnswerList];

        // eslint-disable-next-line array-callback-return
        questionList[indexQuestionCurrent].answers.map((stateAnswer, index) => {
          newStateAnswerList[index] = 'normal';
        });

        setStateAnswerList(newStateAnswerList);
        setIsDisableContinue(true);
        setIndexQuestionCurrent(indexQuestionCurrent + 1);
      } else checkPoint(currentPoint);

      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    });
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
      <View style={TestInProgressStyle.container}>
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
        <Animated.View
          style={{
            opacity: opacity,
          }}
        >
          <View style={TestInProgressStyle.questionContainer}>
            <>
              <View style={TestInProgressStyle.questionPointContainer}>
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
              {questionList[indexQuestionCurrent].answers.map(
                (answer, index) => {
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
                }
              )}

              <VerticalSpacer size="xxl" />
              <View style={{ paddingHorizontal: 100 }}>
                <PrimaryBtn
                  title="Tiếp tục"
                  radius="full"
                  onPress={handleNextQuestion}
                  fontSize="medium"
                  disabled={isDisableContinute}
                />
              </View>
            </>
          </View>
        </Animated.View>
      </View>
    </CustomerTemplate>
  );
};

export default TestInProgress;

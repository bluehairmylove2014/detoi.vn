import { freelancerScreensList } from '@constants/freelancerScreens';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Animated, Easing, SafeAreaView, View } from 'react-native';
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
import FreelancerTemplate from '@present-native/templates/FreelancerTemplate';

export type statusAnswerType = 'normal' | 'correct' | 'wrong' | 'noneSelect';

const TestInProgress: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'TestInProgress'>
> = ({ route, navigation }) => {
  const { test, pointToPass } = route.params;

  const [timerCount, setTimerCount] = useState<number>(test.totalTime);
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
    const newStateAnswerList = [...stateAnswerList];

    if (answerCurrentisCorrect) {
      setCurrentPoint(
        currentPoint + test.quizQuestions[indexQuestionCurrent].point
      );
      newStateAnswerList[indexAnswerCurrent] = 'correct';
    } else newStateAnswerList[indexAnswerCurrent] = 'wrong';

    test.quizQuestions[indexQuestionCurrent].answers.map(
      // eslint-disable-next-line array-callback-return
      (stateAnswer, index) => {
        if (index !== indexAnswerCurrent) {
          newStateAnswerList[index] = stateAnswer.isCorrect
            ? 'correct'
            : 'noneSelect';
        }
      }
    );

    setStateAnswerList(newStateAnswerList);
  };

  const checkPoint = (point: number) => {
    navigateToScreenInSameStack('TestResult', {
      params: {
        isSuccess: currentPoint === pointToPass,
        pointTest: currentPoint,
      },
    });
  };

  const handleNextQuestion = () => {
    Animated.timing(opacity, {
      toValue: 0.5,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      if (indexQuestionCurrent < test.quizQuestions.length - 1) {
        const newStateAnswerList = [...stateAnswerList];

        test.quizQuestions[indexQuestionCurrent].answers.map(
          // eslint-disable-next-line array-callback-return
          (stateAnswer, index) => {
            newStateAnswerList[index] = 'normal';
          }
        );

        setStateAnswerList(newStateAnswerList);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FreelancerTemplate>
      <View style={TestInProgressStyle.safeAreaContainer}>
        <SafeAreaView>
          <View style={TestInProgressStyle.container}>
            <Title theme="largeBold" color="primary">
              Kiểm tra
            </Title>

            <VerticalSpacer size="l" />
            <ProgressBarTime
              widthProgress={100 - (timerCount * 100) / test.totalTime}
              timeCount={`${Math.floor(timerCount / 60)
                .toString()
                .padStart(2, '0')}:${(timerCount % 60)
                .toString()
                .padStart(2, '0')}`}
            />

            <VerticalSpacer size="xxl" />
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
                      {test.quizQuestions[indexQuestionCurrent].point} điểm
                    </Paragraph>
                  </View>

                  <VerticalSpacer size="l" />
                  <Paragraph theme="baseBold">
                    {test.quizQuestions[indexQuestionCurrent].question}
                  </Paragraph>

                  <VerticalSpacer size="xl" />
                  {test.quizQuestions[indexQuestionCurrent].answers.map(
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
                          <VerticalSpacer size="l" />
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
                      disabled={
                        !stateAnswerList.every((status) => status !== 'normal')
                      }
                    />
                  </View>
                </>
              </View>
            </Animated.View>
          </View>
        </SafeAreaView>
      </View>
    </FreelancerTemplate>
  );
};

export default TestInProgress;

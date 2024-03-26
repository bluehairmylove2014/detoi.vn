import { SafeAreaView, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { freelancerScreensList } from '@constants/freelancerScreens';
import { TestResultStyle } from './styles';
import { useAuthNavigation } from '@business-layer/business-logic/non-service-lib/navigation';
import {
  Paragraph,
  PrimaryBtn,
  SquareImage,
  Title,
  VerticalSpacer,
} from '@present-native/atoms';
import FreelancerTemplate from '@present-native/templates/FreelancerTemplate';

const TestResult: React.FC<
  NativeStackScreenProps<freelancerScreensList, 'TestResult'>
> = ({ route, navigation }) => {
  const { isSuccess, pointTest } = route.params;
  const { navigateToScreenInDifferentStack } = useAuthNavigation();

  return (
    <FreelancerTemplate>
      <SafeAreaView style={TestResultStyle.safeAreaStyle}>
        <View style={TestResultStyle.container}>
          <View>
            <View style={{ alignItems: 'center' }}>
              {isSuccess ? (
                <SquareImage source={require('./successTest.png')} />
              ) : (
                <SquareImage source={require('./failTest.png')} />
              )}
            </View>

            <VerticalSpacer size="xxxl" />

            <Title theme="largeBold" align="center" color="primary">
              {isSuccess ? 'Chúc mừng!' : 'Xin chia buồn!'}
            </Title>
            <Paragraph theme="smallMedium" color="primary" align="center">
              Bạn đã hoàn thành bài kiểm tra với{' '}
              <Paragraph theme="smallBold" color="primary">
                {pointTest}
              </Paragraph>{' '}
              điểm
            </Paragraph>
            <Paragraph theme="smallMedium" color="primary" align="center">
              ( Để làm lại, chọn Tài khoản {'>'} Làm kiểm tra kỹ năng )
            </Paragraph>

            <VerticalSpacer size="xxxl" />
            <VerticalSpacer size="xxxl" />
            <VerticalSpacer size="xxxl" />
            <PrimaryBtn
              radius="full"
              title="Đến trang chủ"
              onPress={() =>
                navigateToScreenInDifferentStack('HomeStack', 'Home')
              }
              isFitContent={true}
            />
          </View>
        </View>
      </SafeAreaView>
    </FreelancerTemplate>
  );
};

export default TestResult;

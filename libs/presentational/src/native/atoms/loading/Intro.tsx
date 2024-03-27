import { View, Image, Animated, Text, SafeAreaView } from 'react-native';
import introSound from '@assets/sounds/detoi-with-bg-music.mp3';
import { useMp3Player } from '@business-layer/business-logic/non-service-lib/player';
import { useEffect, useRef } from 'react';
import { introStyles } from './styles';
import YeahImg from '@assets/yeah.png';
import { VerticalSpacer } from '../spacer';
import ProgressBar from 'react-native-animated-progress';
import { COLOR_PALETTE } from '@present-native/styles';

const Intro = () => {
  const { playSound } = useMp3Player(introSound);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    playSound();
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={introStyles.container}>
      <SafeAreaView>
        <View style={introStyles.introView}>
          <Animated.View style={{ opacity: fadeAnim }}>
            <View style={introStyles.imageWrapper}>
              <Image
                source={YeahImg}
                style={{ width: '100%', height: '100%' }}
              />
            </View>
            <VerticalSpacer size="m" />
            <Text style={introStyles.text}>Chào mừng đến với</Text>
            <Text style={introStyles.text}>DETOI Việt Nam</Text>
            <VerticalSpacer size="xl" />
            <ProgressBar
              height={5}
              animated={true}
              progress={100}
              progressDuration={6000}
              backgroundColor={COLOR_PALETTE.primary}
              trackColor={COLOR_PALETTE.gray}
            />
          </Animated.View>
        </View>
      </SafeAreaView>
    </View>
  );
};
export { Intro };

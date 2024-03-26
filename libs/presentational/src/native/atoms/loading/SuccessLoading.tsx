import { View, Image, Animated, Text, SafeAreaView } from 'react-native';
import sound from '@assets/sounds/detoi.mp3';
import { useMp3Player } from '@business-layer/business-logic/non-service-lib/player';
import { useEffect, useRef } from 'react';
import { introStyles } from './styles';
import YeahImg from '@assets/yeah.png';
import { VerticalSpacer } from '../spacer';
import { Title } from '../text';

type props = {
  title: string;
  onComplete: () => void;
  timeout?: number;
};
export const SuccessLoading: React.FC<props> = ({
  title,
  onComplete,
  timeout = 2500,
}) => {
  const { playSound } = useMp3Player(sound);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    playSound();
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      onComplete && onComplete();
    }, timeout);
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
            <Title theme="baseBold" color="black" align="center">
              {title}
            </Title>
          </Animated.View>
        </View>
      </SafeAreaView>
    </View>
  );
};

/* eslint-disable @typescript-eslint/no-unused-vars */
import { View } from 'react-native';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { freelancerScreensList } from '@constants/freelancerScreens';
import { homeScreenStyle } from './styles';
import { useAuthNavigation } from '@business-layer/business-logic/non-service-lib/navigation';
import {
  FreelancerCardOrderList,
  FreelancerHeader,
} from '@present-native/organisms';
import FreelancerTemplate from '@present-native/templates/FreelancerTemplate';

const Home: React.FC<NativeStackScreenProps<freelancerScreensList, 'Home'>> = ({
  route,
  navigation,
}) => {
  const { navigateToScreenInSameStack } = useAuthNavigation();

  return (
    <FreelancerTemplate>
      <View style={homeScreenStyle.container}>
        <FreelancerHeader />
        <FreelancerCardOrderList />
      </View>
    </FreelancerTemplate>
  );
};

export default Home;

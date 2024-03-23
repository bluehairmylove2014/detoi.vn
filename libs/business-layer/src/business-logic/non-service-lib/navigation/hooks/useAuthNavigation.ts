import { useContext } from 'react';
import { NavigationContext } from '@react-navigation/native';
import { useIsLogged } from '@business-layer/business-logic/lib/auth';
import {
  noCredentialCustomerScreensList,
  noCredentialFreelancerScreensList,
} from '../config';
import { customerScreensList } from '@constants/customerScreens';
import { customerStacksList } from '@constants/customerStacks';
import { freelancerStacksList } from '@constants/freelancerStacks';
import { freelancerScreensList } from '@constants/freelancerScreens';

export const useAuthNavigation = () => {
  const appType = process.env.EXPO_PUBLIC_APP_ROLE;
  if (typeof appType === 'undefined') {
    console.error('ERROR: Cannot find EXPO_PUBLIC_APP_ROLE');
  }
  const isLogged = useIsLogged();
  const navigation = useContext(NavigationContext);
  const noCredentialScreensList =
    appType === 'customer'
      ? noCredentialCustomerScreensList
      : noCredentialFreelancerScreensList;

  const navigateToScreenInSameStack = (
    screenName: keyof customerScreensList | keyof freelancerScreensList,
    options?: {
      params?: any;
      callbackOnSuccess?: () => void;
      callbackOnFail?: () => void;
    }
  ) => {
    if (!navigation) {
      console.error('ERROR: navigation is undefined');
      return;
    }
    if (isLogged || noCredentialScreensList.includes(screenName)) {
      options?.callbackOnSuccess && options.callbackOnSuccess();
      navigation.navigate(screenName, options?.params ?? {});
    } else {
      options?.callbackOnFail && options.callbackOnFail();
      navigation.navigate('AuthStack', { screenName: 'Login' });
    }
  };

  const navigateToScreenInDifferentStack = (
    stackName: keyof customerStacksList | keyof freelancerStacksList,
    screenName: keyof customerScreensList | keyof freelancerScreensList,
    options?: {
      params?: any;
      callbackOnSuccess?: () => void;
      callbackOnFail?: () => void;
    }
  ) => {
    if (!navigation) {
      console.error('ERROR: navigation is undefined');
      return;
    }
    if (isLogged || noCredentialScreensList.includes(screenName)) {
      options?.callbackOnSuccess && options.callbackOnSuccess();
      navigation.navigate(stackName, {
        screen: screenName,
        params: options?.params ?? {},
      });
    } else {
      options?.callbackOnFail && options.callbackOnFail();
      navigation.navigate('AuthStack', { screenName: 'Login' });
    }
  };

  return {
    navigateToScreenInSameStack,
    navigateToScreenInDifferentStack,
  };
};

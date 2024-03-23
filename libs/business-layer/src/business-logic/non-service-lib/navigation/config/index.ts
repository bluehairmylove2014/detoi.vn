import { customerScreensList } from '@constants/customerScreens';
import { freelancerScreensList } from '@constants/freelancerScreens';

export const noCredentialCustomerScreensList: (keyof customerScreensList)[] = [
  'Home',
  'Login',
  'OTPVertification',
];

export const noCredentialFreelancerScreensList: (keyof freelancerScreensList)[] =
  ['Login', 'OTPVertification'];

// This reducer handles actions to get and set the authentication token

import { AuthAction, AuthState } from '.';

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  try {
    switch (action.type) {
      case 'SET_TOKEN':
        return {
          ...state,
          token: action.payload,
        };
      case 'SET_REFRESH_TOKEN':
        return {
          ...state,
          refreshToken: action.payload,
        };
      case 'SET_ON_OTP_PHONE_NUMBER':
        console.log('SET: ', {
          ...state,
          onOtpPhoneNumber: action.payload,
        });
        return {
          ...state,
          onOtpPhoneNumber: action.payload,
        };
      case 'SET_ALL':
        return action.payload;
      default:
        return state;
    }
  } catch (error) {
    console.error('Error in authReducer: ', error);
    return state;
  }
};

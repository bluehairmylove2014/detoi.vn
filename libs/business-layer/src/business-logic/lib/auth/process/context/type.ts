export interface AuthState {
  onOtpPhoneNumber: string | null;
  token: string | null;
  refreshToken: string | null;
}

export type AuthAction =
  | {
      type: 'SET_TOKEN';
      payload: AuthState['token'];
    }
  | {
      type: 'SET_REFRESH_TOKEN';
      payload: AuthState['refreshToken'];
    }
  | {
      type: 'SET_ON_OTP_PHONE_NUMBER';
      payload: AuthState['onOtpPhoneNumber'];
    }
  | {
      type: 'SET_ALL';
      payload: AuthState;
    };

export type AuthContextType = {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
};

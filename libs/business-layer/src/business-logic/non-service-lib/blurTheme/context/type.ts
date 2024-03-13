export interface BlurThemeState {
  isOpened: boolean;
}

export type BlurThemeAction = {
  type: 'SET_IS_OPENED';
  payload: BlurThemeState['isOpened'];
};

export type BlurThemeContextType = {
  state: BlurThemeState;
  dispatch: React.Dispatch<BlurThemeAction>;
};

import { BlurThemeAction, BlurThemeState } from './type';

export const blurThemeReducer = (
  state: BlurThemeState,
  action: BlurThemeAction
): BlurThemeState => {
  try {
    switch (action.type) {
      case 'SET_IS_OPENED':
        return {
          ...state,
          isOpened: action.payload,
        };
      default:
        return state;
    }
  } catch (error) {
    console.error('Error in blurThemeReducer: ', error);
    return state;
  }
};

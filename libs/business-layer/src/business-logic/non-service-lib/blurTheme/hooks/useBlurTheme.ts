import { useBlurThemeContext } from '../context';

export const useBlurTheme = () => {
  const { state, dispatch } = useBlurThemeContext();

  const setOpenBlurTheme = (isOpen: boolean): void => {
    dispatch({
      type: 'SET_IS_OPENED',
      payload: isOpen,
    });
  };

  return {
    state,
    setOpenBlurTheme,
  };
};

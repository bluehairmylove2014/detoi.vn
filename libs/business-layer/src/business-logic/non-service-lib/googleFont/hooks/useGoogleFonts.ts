import { useFonts } from '@expo-google-fonts/montserrat';
import { fontsList } from '../config';

export const useGoogleFonts = () => {
  let [fontsLoaded] = useFonts(fontsList.Montserrat);
  return {
    isLoading: !fontsLoaded,
  };
};

import { loadCldr } from "react-native-globalize";
import en from "react-native-globalize/locale-data/en";
import fr from "react-native-globalize/locale-data/fr";

export const loadGlobalize = () => {
  loadCldr(en, fr);
};

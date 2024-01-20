import { loadCldr } from "react-native-globalize";
import en from "react-native-globalize/locale-data/en";
import fr from "react-native-globalize/locale-data/fr";
import vi from "react-native-globalize/locale-data/vi";

export const loadGlobalize = () => {
  loadCldr(vi, en, fr);
};

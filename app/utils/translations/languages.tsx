import { locale } from "expo-localization";

const supportedLanguages = {
  // Key-value pairs
  // State the name of the language in its own language :)
  en: "English",
  fr: "Français",
  vi: "Vietnamese"
};

const currentLanguage = Object.keys(supportedLanguages).includes(locale.substring(0, 2))
  ? locale.substring(0, 2)
  : supportedLanguages[0];

export { supportedLanguages, currentLanguage };

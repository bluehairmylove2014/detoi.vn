// eslint-disable-next-line @typescript-eslint/no-var-requires
import { writeFile } from "fs";

// Languages
const usedLanguages = [
  "en",
  "fr"
];
// Imports all files
const toBeImported = {
  AppStore: "./app-store",
  Act: "../../app/screens/Act/translations",
  Budget: "../../app/screens/Budget/translations",
  ComingSoon: "../../app/screens/ComingSoon/translations",
  Intro: "../../app/screens/Intro/translations",
  About: "../../app/screens/About/translations",
  UI: "../../app/utils/ui/translations",
  Calculation: "../../app/utils/calculation/translations",
};

// eslint-disable-next-line prefer-const
let imports = {};

Object.keys(toBeImported).forEach((key) => {
  imports[key] = {};
  imports[key].path = toBeImported[key];
  usedLanguages.forEach((lang) => {
    imports[key][lang] = import(`${imports[key].path}/${lang}.json`);
  });
});

//! PUTTING ALL TRANSLATIONS TOGETHER

const languageObjects = {};
usedLanguages.forEach((language) => {
  languageObjects[language] = {
    ...imports.AppStore[language],
    ...imports.Act[language],
    ...imports.Budget[language],
    ...imports.ComingSoon[language],
    ...imports.About[language],
    ...imports.Intro[language],
  };
});

//! WRITING JSONs
usedLanguages.forEach((language) => {
  writeFile(
    `scripts/poeditor/${language}.json`,
    JSON.stringify(languageObjects[language], null, "\t"),
    (err) => {
      if (err) throw err;
      console.log("✔", language);
    }
  );
});

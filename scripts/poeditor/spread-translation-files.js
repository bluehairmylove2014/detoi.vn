/* eslint-disable @typescript-eslint/no-var-requires */
import { writeFileSync } from "fs";
import { pickBy, identity } from "ramda";

const usedLanguages = ["en", "fr"];
const relPrefix = "../../";
const translationDirs = [
  { path: "app/screens/Act/translations", prefix: "ACT_SCREEN" },
  { path: "app/screens/Budget/translations", prefix: "BUDGET_SCREEN" },
  { path: "app/screens/ComingSoon/translations", prefix: "COMING_SOON_SCREEN" },
  { path: "app/screens/Intro/translations", prefix: "INTRO_SCREEN" },
  { path: "app/screens/About/translations", prefix: "ABOUT_SCREEN" },
  { path: "app/utils/ui/translations", prefix: "UI" },
  { path: "app/utils/calculation/translations", prefix: "CALCULATION" },
];

/**
 * Quickly reads JSON files
 * @param  {string} path Path to the JSON
 * @returns {object} JSON file as an object
 */
const getJSONfrom = async (path) => {
  // If the path ends with ".json", directly import the JSON file
  if (path.endsWith(".json")) {
    const jsonModule = await import(path);
    return JSON.parse(JSON.stringify(jsonModule.default));
  }

  // If the path does not end with ".json", assume it's a CommonJS module
  const jsonModule = await import(`${path}.json`);
  return JSON.parse(JSON.stringify(jsonModule.default));
};


usedLanguages.forEach((lang) => {
  console.group(lang.toUpperCase() + ":");
  // Get reference JSON file with the source-of-truth content that'll be copied across other translation files
  const reference = getJSONfrom(`./${lang}.json`);
  const ref = pickBy(identity, reference);

  // Browse all the translation dirs and make necessary changes in the corresponding files
  translationDirs.forEach(({ path, prefix }) => {
    // Select the file that matchs the current language
    const relPath = `${relPrefix + path}/${lang}.json`;
    const pathToWrite = `${path}/${lang}.json`;

    // Get its content
    const file = getJSONfrom(relPath);

    let keys = Object.keys(ref);
    keys = keys.filter((item) => item.startsWith(prefix));

    // Change content
    keys.forEach((key) => (file[key] = ref[key]));

    // remove keys with empty values
    const fileCleaned = pickBy(identity, file);

    // Merge changes to the file
    writeFileSync(pathToWrite, JSON.stringify(fileCleaned, null, "\t"));
    console.log("✔", path);
  });
  console.groupEnd();
});

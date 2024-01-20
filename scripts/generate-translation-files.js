const paths = [
  "app/screens/Act/translations/",
  "app/screens/Budget/translations/",
  "app/screens/ComingSoon/translations/",
  "app/screens/Intro/translations/",
  "app/screens/About/translations/",
  "app/utils/ui/translations/",
  "app/utils/calculation/translations/"
];

const englishFile = "en.json";

import { copyFile } from "fs";
import prompt from "prompt-sync";


// https://www.loc.gov/standards/iso639-2/php/code_list.php
const language = prompt("What is the new language ISO Code? ");
console.log("language", language);

const copyAndRename = (path) => {
  copyFile(path + englishFile, path + language + ".json", (err) => {
    if (err) throw err;
    console.log("Creation of " + path + language + ".json");
  });
};

paths.forEach(copyAndRename);

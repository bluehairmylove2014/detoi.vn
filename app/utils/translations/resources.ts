/* eslint import/order:0 */
/* SCREENS */
import * as Budget from "../../screens/Budget/translations";
import * as ComingSoon from "../../screens/ComingSoon/translations";
import * as Intro from "../../screens/Intro/translations";
import * as About from "../../screens/About/translations";
import * as Languages from "../../screens/Languages/translations";

/* COMPONENTS */

/* UTILS */
import * as UI from "utils/ui/translations";
import * as Calculation from "utils/calculation/translations";

const en = {
  ...Budget.en,
  ...ComingSoon.en,
  ...Intro.en,
  ...About.en,
  ...Languages.en,
  ...UI.en,
  ...Calculation.en,
};

const fr = {
  ...UI.fr,
  ...Calculation.fr,
  ...About.fr,
  ...Budget.fr,
  ...ComingSoon.fr,
  ...Intro.fr,
  ...Languages.fr,
};

const vi = {
  ...UI.vi,
  ...Calculation.vi,
  ...About.vi,
  ...Budget.vi,
  ...ComingSoon.vi,
  ...Intro.vi,
  ...Languages.vi,
};

export interface TranslationKeys
  extends UI.TranslationKeys,
  Calculation.TranslationKeys,
  Budget.TranslationKeys,
  ComingSoon.TranslationKeys,
  Intro.TranslationKeys,
  About.TranslationKeys,
  Languages.TranslationKeys { }


export { en, fr, vi };

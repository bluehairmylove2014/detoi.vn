/* eslint import/order:0 */
/* SCREENS */
import * as Act from "../../screens/Act/translations";
import * as Budget from "../../screens/Budget/translations";
import * as ComingSoon from "../../screens/ComingSoon/translations";
import * as Intro from "../../screens/Intro/translations";
import * as About from "../../screens/About/translations";
import * as ActDetail from "../../screens/ActDetail/translations";
import * as Languages from "../../screens/Languages/translations";

/* COMPONENTS */
import * as PermissionsRequest from "components/PermissionsRequest/translations";

/* UTILS */
import * as UI from "utils/ui/translations";
import * as Calculation from "utils/calculation/translations";

const en = {
  ...Act.en,
  ...Budget.en,
  ...ComingSoon.en,
  ...Intro.en,
  ...About.en,
  ...ActDetail.en,
  ...Languages.en,
  ...PermissionsRequest.en,
  ...UI.en,
  ...Calculation.en,
};
 
const fr = {
  ...UI.fr,
  ...Calculation.fr,
  ...About.fr,
  ...PermissionsRequest.fr,
  ...Act.fr,
  ...Budget.fr,
  ...ComingSoon.fr,
  ...Intro.fr,
  ...ActDetail.fr,
  ...Languages.fr,
};



export interface TranslationKeys
  extends UI.TranslationKeys,
  Calculation.TranslationKeys,
  PermissionsRequest.TranslationKeys,
  Act.TranslationKeys,
  Budget.TranslationKeys,
  ComingSoon.TranslationKeys,

  Intro.TranslationKeys,
  About.TranslationKeys,

  ActDetail.TranslationKeys,
  Languages.TranslationKeys {}


export { en, fr };

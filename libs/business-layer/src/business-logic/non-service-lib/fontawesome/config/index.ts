import {
  faAppleAlt,
  faArrowRight,
  faArrowLeft,
  faEnvelope,
  faPhone,
  faCircleQuestion,
  faBars,
  faStar as faStarSolid,
  faStarHalfStroke,
  faPlus,
  faMinus,
  faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faApple,
  faFacebookF,
  faGooglePlay,
  faInstagram,
  faWebflow,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

export const WEB_ICONS = {
  faAppleAlt,
  faApple,
  faGooglePlay,
  faCircleQuestion,
  faArrowRight,
  faArrowLeft,
  faFacebookF,
  faInstagram,
  faYoutube,
  faEnvelope,
  faPhone,
  faWebflow,
  faStarRegular,
  faStarSolid,
  faStarHalfStroke,
  faBar: faBars,
  plus: faPlus,
  minus: faMinus,
  faXmarkCircle,
};

export type webIconNameType = keyof typeof WEB_ICONS;

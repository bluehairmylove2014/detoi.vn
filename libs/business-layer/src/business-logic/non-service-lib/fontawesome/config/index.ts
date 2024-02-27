import {
  faCircleArrowRight,
  faBell,
  faMagnifyingGlass,
  faArrowRightLong,
  faTimes,
  faTags,
  faCommentDots,
  faFileInvoiceDollar,
  faUser,
  faHouseFire,
} from '@fortawesome/free-solid-svg-icons';
import { fa500px } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

export const NATIVE_ICONS = {
  faCircleArrowRight,
  faBell,
  faMagnifyingGlass,
  faArrowRightLong,
  faTimes,
  faTags,
  faCommentDots,
  faFileInvoiceDollar,
  faUser,
  faHouseFire
};

export type nativeIconNameType = keyof typeof NATIVE_ICONS;

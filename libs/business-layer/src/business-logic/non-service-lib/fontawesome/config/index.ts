import {
  faCircleArrowRight,
  faBell,
  faMagnifyingGlass,
  faArrowRightLong,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { fa500px } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

export const NATIVE_ICONS = {
  faCircleArrowRight,
  faBell,
  faMagnifyingGlass,
  faArrowRightLong,
  faTimes,
};

export type nativeIconNameType = keyof typeof NATIVE_ICONS;

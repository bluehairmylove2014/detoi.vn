import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import {
  faCircleQuestion as faCircleQuestionRegular,
  faComments as faCommentsRegular,
  faHeart as faHeartRegular,
  faUser as faUserRegular,
  faCompass as faCompassRegular,
  faRectangleList as faRectangleListRegular,
  faSun as faSunRegular,
  faStar as faStarEmptyStroke,
  faBell as faBellRegular,
  faMap as faMapRegular,
  faClock as faClockRegular,
} from '@fortawesome/free-regular-svg-icons';

const solidIgnoreKeys = [
  'IconDefinition',
  'IconLookup',
  'IconName',
  'IconPrefix',
  'IconPack',
  'prefix',
  'fas',
];

const solidIconPack: typeof solidIcons = Object.keys(solidIcons)
  .filter((sk, i) => !solidIgnoreKeys.includes(sk))
  .reduce((acc, sk) => {
    acc[sk] = solidIcons[sk as keyof typeof solidIcons];
    return acc;
  }, {} as Record<string, typeof solidIcons>);

export const NATIVE_ICONS = {
  faClockRegular,
  faMapRegular,
  faCircleQuestionRegular,
  faBellRegular,
  faCommentsRegular,
  faUserRegular,
  faRectangleListRegular,
  faSunRegular,
  faCompassRegular,
  faStarEmptyStroke,
  faHeartRegular,
  ...solidIconPack,
};

export type nativeIconNameType = keyof typeof NATIVE_ICONS;

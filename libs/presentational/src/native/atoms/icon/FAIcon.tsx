import { FontAwesomeIcon, Props } from '@fortawesome/react-native-fontawesome';
import {
  NATIVE_ICONS,
  nativeIconNameType,
} from '@business-layer/business-logic/non-service-lib/fontawesome';

export const FAIcon = ({
  iconName,
  ...restProps
}: {
  iconName: nativeIconNameType;
} & Omit<Props, 'icon'>) => {
  return <FontAwesomeIcon {...restProps} icon={NATIVE_ICONS[iconName]} />;
};

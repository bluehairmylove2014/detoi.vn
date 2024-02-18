import { FontAwesomeIcon, Props } from '@fortawesome/react-native-fontawesome';
import { CAPP_ICON_LIST } from '@business-layer/business-logic/non-service-lib/fontawesome';

export const FAIcon = ({
  iconName,
  ...restProps
}: {
  iconName: keyof typeof CAPP_ICON_LIST;
} & Omit<Props, 'icon'>) => {
  return <FontAwesomeIcon {...restProps} icon={CAPP_ICON_LIST[iconName]} />;
};

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { CWEB_ICON_LIST } from '@business-layer/business-logic/non-service-lib/fontawesome';

const defaultStyles: FontAwesomeIconProps['style'] = {
  bottom: '0px',
  position: 'relative',
};

function CWEBFAIcon({
  iconName,
  ...restProps
}: {
  iconName: keyof typeof CWEB_ICON_LIST;
} & Omit<FontAwesomeIconProps, 'icon'>) {
  return (
    <FontAwesomeIcon
      {...restProps}
      icon={CWEB_ICON_LIST[iconName]}
      style={{ ...defaultStyles, ...(restProps.style || {}) }}
    />
  );
}

export default CWEBFAIcon;

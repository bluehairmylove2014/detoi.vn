import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import {
  WEB_ICONS,
  webIconNameType,
} from '@business-layer/business-logic/non-service-lib/fontawesome';

const defaultStyles: FontAwesomeIconProps['style'] = {
  bottom: '0px',
  position: 'relative',
};

function CWEBFAIcon({
  iconName,
  ...restProps
}: {
  iconName: webIconNameType;
} & Omit<FontAwesomeIconProps, 'icon'>) {
  return (
    <FontAwesomeIcon
      {...restProps}
      icon={WEB_ICONS[iconName]}
      style={{ ...defaultStyles, ...(restProps.style || {}) }}
    />
  );
}

export default CWEBFAIcon;

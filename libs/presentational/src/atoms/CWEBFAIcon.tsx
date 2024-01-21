import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { CWEB_ICON_LIST } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

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
      icon={CWEB_ICON_LIST[iconName] as IconDefinition}
      style={{ ...defaultStyles, ...(restProps.style || {}) }}
    />
  );
}

export default CWEBFAIcon;

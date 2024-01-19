import { CWEB_ICON_LIST } from '@business-layer/business-logic/non-service-lib/fontawesome';
import CWEBFAIcon from './CWEBFAIcon';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

function IconButton({
  iconName,
  onClick,
  ...restProps
}: {
  iconName: keyof typeof CWEB_ICON_LIST;
  onClick: () => void;
} & Omit<FontAwesomeIconProps, 'icon'>) {
  return (
    <button type="button" onClick={onClick}>
      <CWEBFAIcon {...restProps} iconName={iconName} />
    </button>
  );
}

export default IconButton;

import { CWEB_ICON_LIST } from '@business-layer/business-logic/non-service-lib/fontawesome';
import CWEBFAIcon from './CWEBFAIcon';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

const shapeStyle = {
  circle: 'rounded-full',
  square: 'rounded-md',
};

const backgroundStyle = {
  default: 'bg-transparent',
  whiteYellow: 'bg-white hover:bg-yellow-500',
};

type iconButton = {
  shape?: 'circle' | 'square';
  background?: 'default' | 'whiteYellow';
  iconName: keyof typeof CWEB_ICON_LIST;
  onClick?: () => void;
  customSize?: string;
};

const DEFAULT_SIZE = '2rem';

function IconButton({
  shape,
  background,
  iconName,
  size,
  onClick,
  customSize,
  ...restProps
}: iconButton & Omit<FontAwesomeIconProps, 'icon'>) {
  const realSize = customSize ?? DEFAULT_SIZE;

  return (
    <button
      type="button"
      onClick={onClick}
      style={{ width: realSize, height: realSize }}
      className={`
      ${shapeStyle[shape || 'square']}  
      ${backgroundStyle[background || 'default']}`}
    >
      <CWEBFAIcon {...restProps} iconName={iconName} />
    </button>
  );
}

export default IconButton;

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { CWEB_ICON_LIST } from '@business-layer/business-logic/non-service-lib/fontawesome';

const shapeStyle = {
  circle: 'rounded-full',
  square: 'rounded-md',
};

const backgroundStyle = {
  none: 'bg-white',
  whiteYellow: 'bg-white hover:bg-yellow-500',
};

const defaultStyles: FontAwesomeIconProps['style'] = {
  bottom: '0px',
  position: 'relative',
};

type buttonWithIcon = {
  type?: 'button' | 'submit' | 'reset';
  shape: 'circle' | 'square';
  background?: 'whiteYellow' | 'none';
  onClick?: () => void;
  customSize?: string;
  iconName: keyof typeof CWEB_ICON_LIST;
};

function ButtonWithIcon({
  type,
  shape,
  onClick,
  customSize,
  background,
  iconName,
  ...restProps
}: buttonWithIcon & Omit<FontAwesomeIconProps, 'icon'>) {
  return (
    <button
      type={type}
      className={`w-8 h-8 relative overflow-hidden text-black 
                ${shapeStyle[shape]}  
                ${backgroundStyle[background || 'none']}`}
      style={{ width: customSize, height: customSize }}
      onClick={onClick}
    >
      <FontAwesomeIcon
        {...restProps}
        icon={CWEB_ICON_LIST[iconName]}
        style={{ ...defaultStyles, ...(restProps.style || {}) }}
      />
    </button>
  );
}

export default ButtonWithIcon;

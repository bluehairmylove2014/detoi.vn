import { CWEB_ICON_LIST } from '@business-layer/business-logic/non-service-lib/fontawesome';
import CWEBFAIcon from './CWEBFAIcon';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

const backgroundStyle = {
  default: 'bg-transparent',
  opacityIncrease: 'text-white opacity-60 hover:opacity-100',
  circle_modern: 'rounded-[50%] bg-white hover:rounded-md hover:bg-zinc',
};

type buttonStyleType = 'default' | 'circle_modern' | 'opacityIncrease';
type iconButton = {
  buttonStyle?: buttonStyleType;
  iconName: keyof typeof CWEB_ICON_LIST;
  onButtonClick?: () => void;
  customSize?: string;
};

const DEFAULT_SIZE = '2rem';
const DEFAULT_STYLE: buttonStyleType = 'default';

function IconButton({
  buttonStyle,
  iconName,
  size,
  onButtonClick,
  customSize,
  ...restProps
}: iconButton & Omit<FontAwesomeIconProps, 'icon'>) {
  const realSize = customSize ?? DEFAULT_SIZE;

  return (
    <button
      type="button"
      onClick={onButtonClick}
      style={{ width: realSize, height: realSize }}
      className={`
      ${backgroundStyle[buttonStyle ?? DEFAULT_STYLE]} transition-all`}
    >
      <CWEBFAIcon {...restProps} iconName={iconName} />
    </button>
  );
}

export default IconButton;

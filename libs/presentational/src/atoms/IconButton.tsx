import { CWEB_ICON_LIST } from '@business-layer/business-logic/non-service-lib/fontawesome';
import CWEBFAIcon from './CWEBFAIcon';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

const backgroundStyle = {
  default: 'bg-transparent',
  whiteIncrease: 'text-white opacity-60 hover:opacity-100',
  blackIncrease: 'text-black opacity-60 hover:opacity-100',
  circle_modern: 'rounded-[50%] bg-white hover:rounded-md hover:bg-zinc',
};

type buttonStyleType =
  | 'default'
  | 'circle_modern'
  | 'whiteIncrease'
  | 'blackIncrease';
type iconButton = {
  buttonStyle?: buttonStyleType;
  iconName: keyof typeof CWEB_ICON_LIST;
  onButtonClick?: () => void;
  customSize?: string;
};

function IconButton({
  buttonStyle = 'default',
  iconName,
  size,
  onButtonClick,
  customSize = '2rem',
  ...restProps
}: iconButton & Omit<FontAwesomeIconProps, 'icon'>) {
  return (
    <button
      type="button"
      onClick={onButtonClick}
      style={{ width: customSize, height: customSize }}
      className={`
      ${backgroundStyle[buttonStyle]} transition-all`}
    >
      <CWEBFAIcon {...restProps} iconName={iconName} />
    </button>
  );
}

export default IconButton;

'use client';
import Link from 'next/link';
import ButtonLoader from './ButtonLoader';

type buttonType = 'button' | 'submit' | 'link';
type buttonStyle =
  | 'fill-primary' // blue background, white color
  | 'fill-secondary' // gray background, black color
  | 'fill-white'
  | 'fill-black';
type commonButtonType = {
  children: React.ReactNode | string | number;
  style: buttonStyle;
  href?: string;
  disabled?: boolean;
  type?: buttonType;
  loading?: boolean;
  onClick?: (arg0: any) => void;
  isShortLoading?: boolean;
};

const defaultType = 'button';

function getTailwindClassStyle(style: buttonStyle) {
  switch (style) {
    case 'fill-primary':
      return {
        normal: 'btn-primary',
        // disabled: 'disabled:bg-cyan-500 disabled:cursor-not-allowed',
        // common: 'rounded text-white transition-colors',
      };
    case 'fill-secondary':
      return {
        normal: 'btn-secondary',
        // disabled: 'disabled:bg-gray-300 disabled:cursor-not-allowed',
        // common: 'rounded text-black transition-colors',
      };
    case 'fill-white':
      return {
        normal: 'btn-white',
        // disabled: 'disabled:bg-gray-300 disabled:cursor-not-allowed',
        // common: 'rounded text-white transition-colors',
      };
    case 'fill-black':
      return {
        normal: 'btn-black',
        // disabled: 'disabled:bg-gray-300 disabled:cursor-not-allowed',
        // common: 'rounded text-white transition-colors',
      };
    default:
      return {
        normal: '',
        disabled: 'disabled:bg-gray-300 disabled:cursor-not-allowed',
        common: '',
      };
  }
}

function CustomButton({
  children,
  style,
  href,
  disabled,
  loading,
  type,
  onClick,
  isShortLoading,
}: commonButtonType): JSX.Element {
  const {
    normal: normalStyle,
    disabled: disabledStyle,
    common: commonStyle,
  } = getTailwindClassStyle(style);

  return type === 'link' ? (
    <Link
      href={href ?? '#'}
      className={`${commonStyle} ${disabledStyle} ${normalStyle} btn block`}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`${commonStyle} ${disabledStyle} ${normalStyle} btn`}
      onClick={onClick}
      disabled={disabled || loading}
      type={type ?? defaultType}
    >
      {loading ? (
        <ButtonLoader label={isShortLoading ? '' : 'Chờ chút...'} />
      ) : (
        <>{children}</>
      )}
    </button>
  );
}

export default CustomButton;

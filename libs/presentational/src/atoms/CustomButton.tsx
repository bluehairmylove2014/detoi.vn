'use client';
import Link from 'next/link';
import ButtonLoader from './ButtonLoader';

type buttonType = 'button' | 'submit' | 'link';
type buttonStyle =
  | 'fill-primary' // blue background, white color
  | 'fill-secondary' // gray background, black color
  | 'fill-error' // red bg, white color
  | 'fill-green'
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
        normal: 'bg-blue-500 hover:bg-blue-700',
        disabled: 'disabled:bg-cyan-500 disabled:cursor-not-allowed',
        common: 'rounded text-white transition-colors',
      };
    case 'fill-secondary':
      return {
        normal: 'bg-gray-100 hover:bg-gray-300',
        disabled: 'disabled:bg-gray-300 disabled:cursor-not-allowed',
        common: 'rounded text-black transition-colors',
      };
    case 'fill-green':
      return {
        normal: 'bg-green-600 hover:bg-green-500',
        disabled: 'disabled:bg-gray-300 disabled:cursor-not-allowed',
        common: 'rounded text-white transition-colors',
      };
    case 'fill-error':
      return {
        normal: 'bg-rose-600 hover:bg-gray-500',
        disabled: 'disabled:bg-gray-300 disabled:cursor-not-allowed',
        common: 'rounded text-white transition-colors',
      };
    case 'fill-black':
      return {
        normal: 'bg-black hover:bg-neutral-800',
        disabled: 'disabled:bg-gray-300 disabled:cursor-not-allowed',
        common: 'rounded text-white transition-colors',
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
      className={`${commonStyle} ${disabledStyle} ${normalStyle} shadow-sm w-full py-2 font-semibold text-xs block`}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`${commonStyle} ${disabledStyle} ${normalStyle} shadow-sm w-full py-2 font-semibold text-xs`}
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

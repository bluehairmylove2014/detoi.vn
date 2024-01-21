'use client';
import Link from 'next/link';
import ButtonLoader from './ButtonLoader';

type buttonType = 'button' | 'submit' | 'link';
type buttonStyle = 'btn-primary' | 'btn-secondary' | 'btn-white' | 'btn-black';
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
  return type === 'link' ? (
    <Link href={href ?? '#'} className={`${style} btn btn-disable block`}>
      {children}
    </Link>
  ) : (
    <button
      className={`${style} btn btn-disable`}
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

import React, { ReactNode } from 'react';

interface ITextProps {
  children: ReactNode;
  style?: string;
  left?: boolean;
  right?: boolean;
  size?: 'xSmall' | 'small' | 'normal' | 'large' | 'xLarge';
}

export const Text = ({
  children,
  style,
  left,
  right,
  size = 'normal',
}: ITextProps): React.ReactElement => {
  const align = left ? 'text-left' : right ? 'text-right' : 'text-center';
  const fontSize =
    size === 'normal'
      ? 'text-base'
      : size === 'xSmall'
      ? 'text-xs'
      : size === 'small'
      ? 'text-sm'
      : size === 'large'
      ? 'text-lg'
      : 'text-xl';
  return (
    <p className={`text-  opacity-80 leading-10 ${fontSize} ${align} ${style}`}>
      {children}
    </p>
  );
};

import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  style?: string;
}

export const Heading = ({
  children,
  style = '',
  size = '4xl',
}: Props): React.ReactElement => {
  return (
    <p
      className={`text-${size} leading-[3rem] font-extrabold drop-shadow-md text-center ${style}`}
    >
      {children}
    </p>
  );
};

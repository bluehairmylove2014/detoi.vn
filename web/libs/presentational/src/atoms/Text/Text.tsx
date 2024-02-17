import React, { ReactNode } from 'react';

type TTextProps = {
  children: ReactNode;
  style?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
};

export const Text = ({
  children,
  style = '',
  align = 'center',
  size = 'base',
}: TTextProps): React.ReactElement => {
  const textAlign = `text-${align}`;
  const textSize = `text-${size}`; 
  return (
    <p
      className={`opacity-80 leading-10 ${textSize} ${textAlign} ${style}`}
    >
      {children}
    </p>
  );
};

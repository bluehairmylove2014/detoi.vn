import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  style?: string;
}

export const Head2 = ({ children, style }: Props): React.ReactElement => {
  return (
    <h2 className={`text-4xl leading-[3rem] font-extrabold drop-shadow-md text-center ${style}`} >
      {children}
    </h2>
  );
};

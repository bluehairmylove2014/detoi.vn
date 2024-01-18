import React from 'react';
import logo from '../assets/detoi.logo.svg';

export default function Logo() {
  return (
    <a href="#" className="flex items-center">
      <img
        src={logo.src}
        className="mr-[12px] md:block md:h-[50px] lg:h-[50px] md:mr-[1.29rem] lg:mr-[0.9rem]"
        alt="DeToi Logo"
      />
      <span className="self-center md:inline text-[20px] md:text-[20pxrem] lg:text-[1rem] font-semibold whitespace-nowrap underline italic">
        detoi
      </span>
    </a>
  );
}

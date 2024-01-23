'use client';

import React from 'react';
import logo from '@assets/detoi.logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="#" className="flex items-center">
      <Image
        src={logo}
        className="mr-[1.2rem] md:block md:h-[50px] lg:h-[50px] md:mr-[18px]"
        alt="DeToi Logo"
      />
      <span className="self-center hidden lg:inline text-[20px] lg:text-[1rem] font-semibold whitespace-nowrap underline italic">
        detoi@sunrise.continent
      </span>
      <span className="self-center inline lg:hidden text-[18px] font-semibold whitespace-nowrap underline italic">
        detoi
      </span>
    </Link>
  );
}

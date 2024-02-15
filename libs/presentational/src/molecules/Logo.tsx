import logo from '@assets/detoi.logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="#" className="flex items-center">
      <Image
        src={logo}
        className="mr-[1.2rem] md:mr-[18px]"
        alt="DeToi"
        priority={true}
        quality={100}
        width={40}
        height={40}
      />
      <span className="self-center hidden md:block lg:text-base font-semibold whitespace-nowrap underline italic">
        detoi@sunrise.continent
      </span>
    </Link>
  );
}

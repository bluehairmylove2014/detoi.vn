import Link from 'next/link';
import CWEBFAIcon from './CWEBFAIcon';

type nextArrowLinkProps = {
  label: string;
  style: 'none' | 'bordered';
  href: string;
  className?: string;
};
function NextArrowLabel({
  label,
  style,
  href,
  className = '',
}: nextArrowLinkProps) {
  return (
    <Link
      href={href}
      className={`${
        style === 'bordered' ? '' : ''
      } ${className} font-medium text-xs flex flex-row relative [&:hover>.line]:w-full`}
    >
      <span className="label relative right-0 mr-2 transition-all">
        {label}
      </span>
      <div className="icon2 relative right-0 transition-all">
        <CWEBFAIcon iconName="faArrowRight" size="sm" />
      </div>
      <span className="line w-0 bg-white rounded h-[2px] absolute -bottom-1 left-1/2 transform -translate-x-1/2 transition-all"></span>
    </Link>
  );
}

export default NextArrowLabel;

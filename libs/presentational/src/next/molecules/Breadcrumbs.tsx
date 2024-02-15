import { IBreadcrumb } from '@business-layer/services/entities';
import Link from 'next/link';

function Breadcrumbs({ bcList }: { bcList: IBreadcrumb[] }) {
  return (
    <div className="flex flex-row justify-start items-center gap-2">
      {bcList.map((bc, index) => (
        <span key={`breadcrumb@${index}`}>
          <Link
            href={bc.href}
            className={`text-[0.6rem] font-semibold opacity-60 whitespace-nowrap hover:opacity-100 ${
              bc.isCurrent ? '!opacity-100' : ''
            }`}
          >
            {bc.label}
          </Link>
          {index < bcList.length - 1 ? (
            <i className="fi fi-sr-caret-right text-[0.6rem] font-semibold opacity-60 "></i>
          ) : (
            <></>
          )}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumbs;

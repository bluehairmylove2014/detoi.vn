'use client';
import { ITermPolicy } from '@business-layer/services/entities/termPolicy';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { TERMS_AND_SERVICES_PAGES } from '../../../constants/termsAndServicesPage';

import PrivatePolicy from '@assets/privatePolicy.png';
import TermUse from '@assets/termUse.png';

function TermsAndServicesList({
  termsPoliciesList,
}: {
  termsPoliciesList: ITermPolicy[];
}) {
  const imageUrl = [PrivatePolicy, TermUse];
  const pathUrl = [
    TERMS_AND_SERVICES_PAGES.PRIVATE_POLICY,
    TERMS_AND_SERVICES_PAGES.TERMS_OF_USE,
    TERMS_AND_SERVICES_PAGES.CONDUCT_OF_DETOI_EMPLOYEES,
    TERMS_AND_SERVICES_PAGES.REFUND_AND_REPORTS_POLICY,
    TERMS_AND_SERVICES_PAGES.DETOICHAT_COMMUNITY_PRINCIPLES,
    TERMS_AND_SERVICES_PAGES.CONDUCT_OF_CUSTOMERS_WITH_DETOI_EMPLOYEES,
  ];
  const router = useRouter();

  return (
    <main className="w-full h-fit flex flex-col justify-start items-center relative py-28">
      <section className="container">
        <h1 className="font-black drop-shadow-md text-[2.5rem] border-b-2 border-gray pb-6">
          ĐIỀU KHOẢN & CHÍNH SÁCH
        </h1>
      </section>
      <section className="w-full container flex justify-center">
        <div className="grid grid-cols-4 gap-10 mt-10">
          {termsPoliciesList.map((termsPolicies, index) => (
            <div
              className="w-full bg-primary rounded flex items-start justify-center cursor-pointer"
              key={termsPolicies.title}
              onClick={() => router.push(pathUrl[index])}
            >
              <div className="w-full p-2">
                <div className="w-full flex justify-center items-center bg-white hover:bg-lightYellow">
                  <Image
                    src={imageUrl[index < imageUrl.length ? index : 0]}
                    alt={termsPolicies.title}
                    className="h-[min(100vh,10rem)] w-[min(100vh,10rem)] p-2"
                  ></Image>
                </div>
                <p className="text-center text-lg font-bold px-5 pt-3 mb-1">
                  {termsPolicies.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
export default TermsAndServicesList;

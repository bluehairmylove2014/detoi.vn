'use client';
import { ITermPolicy } from '@business-layer/services/entities/termPolicy';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { TERMS_AND_SERVICES_PAGES } from '@constants/termsAndServicesPage';

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
    <main className="w-full h-fit container mx-auto flex justify-center items-center py-12 px-12 md:px-0 xl:px-5">
      <div>
        <section>
          <h1 className="font-black drop-shadow-md text-[2.5rem] border-b-2 border-gray/60 pb-6">
            ĐIỀU KHOẢN & CHÍNH SÁCH
          </h1>
        </section>
        <section className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 xl:gap-10 mt-10">
            {termsPoliciesList.map((termsPolicies, index) => (
              <div
                className="w-full bg-secondary rounded cursor-pointer block"
                key={termsPolicies.title}
                onClick={() => router.push(pathUrl[index])}
              >
                <div className="w-full p-2">
                  <div className="w-full flex justify-center items-center bg-white hover:bg-lightYellow">
                    <Image
                      src={imageUrl[index < imageUrl.length ? index : 0]}
                      alt={termsPolicies.title}
                      className="h-[min(100vh,15rem)] w-[min(100vh,15rem)] md:h-[min(100vh,10rem)] md:w-[min(100vh,10rem)] p-2"
                    ></Image>
                  </div>
                  <p className="text-center text-xl xl:text-lg md:text-base font-bold px-5 xl:px-5 md:px-3 pt-3 mb-1">
                    {termsPolicies.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
export default TermsAndServicesList;

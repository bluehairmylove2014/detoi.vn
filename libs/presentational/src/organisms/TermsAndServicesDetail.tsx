'use client';
import { ITermPolicy } from '@business-layer/services/entities/termPolicy';
import TemplateContent from '@presentational/atoms/TemplateContent';
import { useEffect, useState } from 'react';

function TermPolicy({ termPolicy }: { termPolicy: ITermPolicy }) {
  const [subTitleList, setSubTitleList] =
    useState<NodeListOf<HTMLHeadingElement> | null>(null);
  const [selectedTitleIndex, setSelectedTitleIndex] = useState<number | 0>(0);

  useEffect(() => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = termPolicy.content;

    const titleElements = tempDiv.querySelectorAll('h1');
    titleElements.forEach((title, index) => {
      const id = `section-${index + 1}`;
      title.setAttribute('id', id);
    });

    termPolicy.content = tempDiv.innerHTML;

    setSubTitleList(titleElements);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Iterate through title elements to find the one in view
      titleElements.forEach((title, index) => {
        const id = `section-${index + 1}`;
        const element = document.getElementById(id);
        if (element) {
          const elementTop =
            element.getBoundingClientRect().top + window.scrollY;

          // Adjust this value according to your desired margin in rem
          const marginRem = 10;
          const remToPixels = parseFloat(
            getComputedStyle(document.documentElement).fontSize
          );
          const marginPixels = marginRem * remToPixels;

          // Check if the title is in view
          if (elementTop - marginPixels <= scrollPosition) {
            setSelectedTitleIndex(index);
          }
        }
      });
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const smoothScrollTo = (id: string, index: number) => {
    const element = document.getElementById(id);

    if (element) {
      const remToPixels = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );

      const marginRem = 5;
      const marginPixels = marginRem * remToPixels;
      const offsetTop = element.getBoundingClientRect().top;

      window.scroll({
        top: window.scrollY + offsetTop - marginPixels,
        behavior: 'auto',
      });
    }
  };

  return (
    <div className="bg-white container mx-auto relative w-full px-12 md:px-0 xl:px-5">
      <section className=" pt-8">
        <h1 className="font-black drop-shadow-md text-[2.5rem]">
          {termPolicy.title}
        </h1>
        <p className="text-sm text-gray">
          Có hiệu lực từ ngày 24 tháng 01 năm 2024
        </p>
      </section>

      <section className="flex items-start mt-10 pb-14">
        {/* Sidebar */}
        <aside className="hidden md:block w-3/6 xl:w-2/5 sticky top-20 z-10 h-[65vh] overflow-y-auto">
          {subTitleList &&
            Array.from(subTitleList).map((title, index) => (
              <div
                key={index}
                className={`py-2 px-3 rounded text-black cursor-pointer ${
                  selectedTitleIndex === index ? 'bg-yellow' : 'bg-white'
                }`}
                onClick={() => smoothScrollTo(`section-${index + 1}`, index)}
              >
                <span className="text-xs text-black font-semibold text-start">
                  {title.innerText}
                </span>
              </div>
            ))}
        </aside>

        {/* Content Right */}
        <main className="md:ml-8 flex-grow">
          <TemplateContent content={termPolicy.content} />
        </main>
      </section>
    </div>
  );
}

export default TermPolicy;

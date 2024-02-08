'use client';
import { ITermPolicy } from '@business-layer/services/entities/termPolicy';
import { useEffect, useState } from 'react';

function TermPolicy({ termPolicy }: { termPolicy: ITermPolicy }) {
  const [subTitleList, setSubTitleList] =
    useState<NodeListOf<HTMLHeadingElement> | null>(null);
  const [selectedTitleIndex, setSelectedTitleIndex] = useState<number | null>(
    null
  );

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
          const marginRem = 15;
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

      const marginRem = 15;
      const marginPixels = marginRem * remToPixels;
      const offsetTop = element.getBoundingClientRect().top;
      setSelectedTitleIndex(index);

      window.scroll({
        top: window.scrollY + offsetTop - marginPixels,
        behavior: 'smooth',
      });

      return;
    }
  };

  return (
    <main className="w-full h-full flex flex-col justify-start items-center bg-white relative">
      <section className="container mx-auto w-full h-fit fixed bg-white py-28 pb-8">
        <h1 className="font-black drop-shadow-md text-[2.5rem]">
          {termPolicy.title}
        </h1>
        <p className="text-sm text-gray">
          Có hiệu lực từ ngày 24 tháng 01 năm 2024
        </p>
      </section>
      <section className="container mx-auto flex flex-row mt-56 h-full mb-20">
        <div className="w-1/5 fixed h-screen overflow-y-auto">
          {subTitleList &&
            Array.from(subTitleList).map((title, index) => (
              <div
                key={index}
                className={`py-2 px-4 rounded text-black cursor-pointer ${
                  selectedTitleIndex === index ? 'bg-yellow' : 'bg-white'
                }`}
                onClick={() => smoothScrollTo(`section-${index + 1}`, index)}
              >
                <span className="text-sm text-black font-semibold text-start">
                  {title.innerText}
                </span>
              </div>
            ))}
        </div>
        <div
          className="pl-8 pr-20 ml-[25%]"
          dangerouslySetInnerHTML={{ __html: termPolicy.content }}
        />
      </section>
    </main>
  );
}

export default TermPolicy;

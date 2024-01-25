'use client';
import React from 'react';
import { Text } from '@presentational/atoms';
import IconButton from '@presentational/atoms/IconButton';

interface IAccordionProps {
  idx: number;
  title: string;
  content: string;
}

interface IFaqListContentProps {
  faqListContent?: {
    title: string;
    content: string;
  }[];
}

const Accordion: React.FC<IAccordionProps> = ({ idx, title, content }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleToggle = () => {
    return isOpen ? { maxHeight: '100%' } : { maxHeight: '0' };
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
      >
        <Text left style="font-bold">
          {title}
        </Text>
        <IconButton
          iconName={isOpen ? 'minus' : 'plus'}
          color="black"
          className="h-4 w-4 md:h-3 md:w-3 xl:h-4 xl:w-4"
        />
      </div>
      <div
        className={`border-l-2 border-purple-600 overflow-hidden max-h-0  ${
          isOpen && 'border-t border-gray-400'
        }`}
        style={handleToggle()}
      >
        <Text left size="xSmall" style="p-3 text-gray">
          {content}
        </Text>
      </div>
    </>
  );
};

const FAQ: React.FC<IFaqListContentProps> = ({ faqListContent = [] }) => {
  return (
    <main className="p-5">
      <div className="flex justify-center items-start my-2 ">
        <div className="w-full sm:w-10/12 md:w-1/2 my-1">
          <ul
            className="flex flex-col border-collapse border-solid border-gray rounded-md"
            style={{ borderWidth: '1px' }}
          >
            {faqListContent?.map((faqItem, index) => {
              return (
                <li
                  className={`my-2 ${
                    index !== faqListContent.length - 1 &&
                    'border-b border-gray-400'
                  }`}
                  key={index}
                >
                  <Accordion
                    idx={index}
                    title={faqItem.title}
                    content={faqItem.content}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default FAQ;

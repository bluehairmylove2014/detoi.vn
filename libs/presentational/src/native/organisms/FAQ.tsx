import React, { useCallback, useState } from 'react';
import { Text } from '@presentational/next/atoms';
import IconButton from '@presentational/next/atoms/IconButton';

type TAccordionProps = {
  idx: number;
  title: string;
  content: string;
  onClick: () => void;
  isOpen: Boolean;
};

type TFaqListContentProps = {
  faqListContent?: {
    title: string;
    content: string;
  }[];
};

const Accordion: React.FC<TAccordionProps> = React.memo(
  ({ idx, title, content, onClick, isOpen = false }) => {
    return (
      <>
        <div
          onClick={onClick}
          className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
        >
          <Text align="left" style="font-bold">
            {title}
          </Text>
          <IconButton
            iconName={isOpen ? 'minus' : 'plus'}
            color="black"
            className="h-4 w-4 md:h-3 md:w-3 xl:h-4 xl:w-4"
          />
        </div>
        <div
          className={`border-l-2 border-purple-600 overflow-hidden max-h ${
            isOpen ? 'border-t border-gray-400 max-h-full' : 'max-h-0'
          }`}
        >
          <Text align="left" size="sm" style="p-3 text-gray">
            {content}
          </Text>
        </div>
      </>
    );
  }
);

const FAQ: React.FC<TFaqListContentProps> = React.memo(
  ({ faqListContent = [] }) => {
    const [openItemWithIndex, setOpenItemWithIndex] = useState<number>(-1); // Corrected the type to 'number'
    const handleClick = useCallback(
      (index: number) => {
        if (index === openItemWithIndex) {
          setOpenItemWithIndex(-1);
        } else {
          setOpenItemWithIndex(index);
        }
      },
      [openItemWithIndex]
    );

    return (
      <main className="p-5">
        <div className="flex justify-center items-start my-2">
          <div className="w-full sm:w-10/12 md:w-1/2 my-1">
            <ul
              className="flex flex-col border-collapse border-solid border-gray rounded-md"
              style={{ borderWidth: '1px' }}
            >
              {faqListContent.map((faqItem, index) => (
                <li
                  className={`my-2 ${
                    index !== faqListContent.length - 1 &&
                    'border-b border-gray-400'
                  }`}
                  key={index}
                >
                  <Accordion
                    isOpen={index === openItemWithIndex}
                    idx={index}
                    title={faqItem.title}
                    content={faqItem.content}
                    onClick={() => handleClick(index)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    );
  }
);

export default FAQ;

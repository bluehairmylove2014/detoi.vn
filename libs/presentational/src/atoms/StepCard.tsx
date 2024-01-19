'use client';
import CircleImage from '@presentational/atoms/CircleImage';
import NextArrowLabel from '@presentational/atoms/NextArrowLabel';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

type stepCardProps = {
  step: string;
  defaultStep: string;
  stepImgSrc: StaticImageData;
  title: string;
  description: string;
  href: string;
  isActive: boolean;
  setActiveCard: Dispatch<SetStateAction<string>>;
};
function StepCard({
  step,
  defaultStep,
  stepImgSrc,
  title,
  description,
  href,
  isActive,
  setActiveCard,
}: stepCardProps) {
  return (
    <div
      id={`step${step}`}
      className={`step-card px-8 py-10 h-[80%] flex flex-col justify-start relative overflow-hidden text-white cursor-pointer ${
        isActive ? '!bg-cyan-800 !h-full active' : ''
      } bg-stone-800 showAllChildWhenActive transition-all`}
      // onMouseEnter={() => setActiveCard(step)}
      // onMouseLeave={() => setActiveCard(defaultStep)}
      onClick={() => setActiveCard(step)}
    >
      <div className="w-full select-none flex-shrink">
        <strong className="font-medium text-3xl opacity-60">{step}</strong>
        <h3 className="text-3xl max-w-[60%] mb-8">{title}</h3>
      </div>
      <p className="opacity-0 invisible select-none flex-shrink">
        {description}
      </p>
      <div className="flex-grow opacity-0 invisible flex flex-col justify-end items-start">
        <NextArrowLabel label="Bấm để xem hướng dẫn" href={href} style="none" />
      </div>
      <div className="absolute top-[-1rem] right-[-1.5rem] opacity-0 invisible select-none">
        <CircleImage src={stepImgSrc} alt={title} size="8rem" />
      </div>
    </div>
  );
}

export default StepCard;

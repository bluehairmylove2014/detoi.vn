'use client';
import StepCard from '@presentational/next/atoms/StepCard';
import { StaticImageData } from 'next/image';
import { useState } from 'react';
import CardController from './NavigateSteps';

function StepCardList({
  steps,
}: {
  steps: {
    step: string;
    stepImgSrc: StaticImageData;
    title: string;
    description: string;
    href: string;
  }[];
}) {
  const [activeCard, setActiveCard] = useState<string>(steps[0].step);
  const getNextStep = () => {
    const index = steps.findIndex((s) => s.step === activeCard);
    return index === steps.length - 1 ? steps[0].step : steps[index + 1].step;
  };
  const getPrevStep = () => {
    const index = steps.findIndex((s) => s.step === activeCard);
    return index === 0 ? steps[steps.length - 1].step : steps[index - 1].step;
  };
  return (
    <>
      <div className="flex flex-row justify-end items-start w-full h-10">
        <CardController
          nextCardId={getNextStep()}
          prevCardId={getPrevStep()}
          setCardId={setActiveCard}
        />
      </div>
      <div className="w-full flex flex-row gap-0 items-end h-4/5">
        {steps.map((s) => (
          <StepCard
            {...s}
            key={s.step}
            defaultStep={steps[0].step}
            isActive={activeCard === s.step}
            setActiveCard={setActiveCard}
          />
        ))}
      </div>
    </>
  );
}

export default StepCardList;

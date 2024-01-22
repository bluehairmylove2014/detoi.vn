import IconButton from '@presentational/atoms/IconButton';
import { Dispatch, SetStateAction } from 'react';

function NavigateSteps({
  nextStep,
  prevStep,
  setActiveCard,
}: {
  nextStep: string;
  prevStep: string;
  setActiveCard: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="flex flex-row gap-4">
      <IconButton
        iconName="faArrowLeft"
        onClick={() => {}}
        size="lg"
        buttonStyle={'opacityIncrease'}
        onButtonClick={() => {
          setActiveCard(prevStep);
        }}
      />
      <IconButton
        iconName="faArrowRight"
        onClick={() => {}}
        size="lg"
        buttonStyle={'opacityIncrease'}
        onButtonClick={() => {
          setActiveCard(nextStep);
        }}
      />
    </div>
  );
}

export default NavigateSteps;

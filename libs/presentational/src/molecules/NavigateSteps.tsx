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
        color="white"
        size="lg"
        opacity={0.6}
        onClickCapture={() => {
          setActiveCard(prevStep);
        }}
      />
      <IconButton
        iconName="faArrowRight"
        onClick={() => {}}
        color="white"
        size="lg"
        opacity={0.6}
        onClickCapture={() => {
          setActiveCard(nextStep);
        }}
      />
    </div>
  );
}

export default NavigateSteps;

import IconButton from '@presentational/atoms/IconButton';
import { Dispatch, SetStateAction } from 'react';

function CardController({
  nextCardId: nextStep,
  prevCardId: prevStep,
  setCardId: setActiveCard,
  theme,
}: {
  nextCardId: string;
  prevCardId: string;
  setCardId: Dispatch<SetStateAction<string>>;
  theme: 'whiteIncrease' | 'blackIncrease';
}) {
  return (
    <div className="flex flex-row gap-4">
      <IconButton
        iconName="faArrowLeft"
        onClick={() => {}}
        size="lg"
        buttonStyle={theme ?? 'whiteIncrease'}
        onButtonClick={() => {
          setActiveCard(prevStep);
        }}
      />
      <IconButton
        iconName="faArrowRight"
        onClick={() => {}}
        size="lg"
        buttonStyle={theme ?? 'whiteIncrease'}
        onButtonClick={() => {
          setActiveCard(nextStep);
        }}
      />
    </div>
  );
}

export default CardController;

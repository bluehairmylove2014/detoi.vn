import IconButton from '@presentational/atoms/IconButton';
import { Dispatch, SetStateAction } from 'react';

function CardController({
  nextCardId: nextStep,
  prevCardId: prevStep,
  setCardId: setActiveCard,
  theme = 'whiteIncrease',
}: {
  nextCardId: any;
  prevCardId: any;
  setCardId: Dispatch<SetStateAction<any>>;
  theme?: 'whiteIncrease' | 'blackIncrease';
}) {
  return (
    <div className="flex flex-row gap-4">
      <IconButton
        iconName="faArrowLeft"
        onClick={() => {}}
        size="lg"
        buttonStyle={theme}
        onButtonClick={() => {
          setActiveCard(prevStep);
        }}
      />
      <IconButton
        iconName="faArrowRight"
        onClick={() => {}}
        size="lg"
        buttonStyle={theme}
        onButtonClick={() => {
          setActiveCard(nextStep);
        }}
      />
    </div>
  );
}

export default CardController;

import { FAIcon } from '@present-native/atoms/icon';
import { Paragraph } from '@present-native/atoms/text';
import { COLOR_PALETTE } from '@present-native/styles';
import { TouchableOpacity, View } from 'react-native';
import { commonButtonStyles } from './styles';
import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { HorizontalSpacer } from '@present-native/atoms/spacer';

export enum statusAnswer {
  normal,
  correct,
  wrong,
  noneSelect,
}

const statusMapper = {
  normal: {
    colorBackground: COLOR_PALETTE.transparent,
    colorBorder: COLOR_PALETTE.gray,
    icon: null,
  },
  correct: {
    colorBackground: COLOR_PALETTE.green,
    colorBorder: COLOR_PALETTE.white,
    icon: 'faCheck',
  },
  wrong: {
    colorBackground: COLOR_PALETTE.rose,
    colorBorder: COLOR_PALETTE.white,
    icon: 'faX',
  },
  noneSelect: {
    colorBackground: COLOR_PALETTE.white,
    colorBorder: COLOR_PALETTE.gray,
    icon: null,
  },
};

const AnswerButton = ({
  answer,
  index,
  status,
  onPress,
}: {
  answer: string;
  index: number;
  status: statusAnswer;
  onPress: () => void;
}) => {
  const statusKey = statusAnswer[status] as keyof typeof statusMapper;

  return (
    <TouchableOpacity
      disabled={status !== statusAnswer.normal}
      onPress={onPress}
      style={{
        ...commonButtonStyles.answerBtn,
        backgroundColor: statusMapper[statusKey].colorBackground,
      }}
    >
      <Paragraph
        theme="baseSemibold"
        color={
          status === statusAnswer.correct || status === statusAnswer.wrong
            ? 'white'
            : 'black'
        }
      >
        {String.fromCharCode(65 + index)}. {answer}
      </Paragraph>
      <HorizontalSpacer size="xl" />
      <View
        style={{
          ...commonButtonStyles.answerIconContainer,
          borderColor: statusMapper[statusKey].colorBorder,
        }}
      >
        {statusMapper[statusKey].icon ? (
          <FAIcon
            iconName={statusMapper[statusKey].icon as nativeIconNameType}
            color={COLOR_PALETTE.white}
            size={12}
          />
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
};

export { AnswerButton };

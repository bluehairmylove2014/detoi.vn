import { FAIcon } from '@present-native/atoms/icon';
import { Paragraph } from '@present-native/atoms/text';
import { COLOR_PALETTE } from '@present-native/styles';
import { TouchableOpacity, View } from 'react-native';
import { commonButtonStyles } from './styles';
import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';

export type statusAnswerType = 'normal' | 'correct' | 'wrong' | 'noneSelect';

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
  status: statusAnswerType;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      disabled={status !== 'normal' ? true : false}
      onPress={onPress}
      style={{
        ...commonButtonStyles.answerBtn,
        backgroundColor: statusMapper[status].colorBackground,
      }}
    >
      <Paragraph
        theme="baseSemibold"
        color={status === 'correct' || status === 'wrong' ? 'white' : 'black'}
      >
        {String.fromCharCode(65 + index)}. {answer}
      </Paragraph>
      <View
        style={{
          ...commonButtonStyles.answerIconContainer,
          borderColor: statusMapper[status].colorBorder,
        }}
      >
        {statusMapper[status].icon ? (
          <FAIcon
            iconName={statusMapper[status].icon as nativeIconNameType}
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

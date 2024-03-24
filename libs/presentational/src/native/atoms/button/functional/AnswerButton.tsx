import { FAIcon } from '@present-native/atoms/icon';
import { Paragraph } from '@present-native/atoms/text';
import { COLOR_PALETTE } from '@present-native/styles';
import { TouchableOpacity, View } from 'react-native';
import { commonButtonStyles } from './styles';

export type statusAnswerType = 'normal' | 'correct' | 'wrong' | 'noneSelect';

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
      disabled={
        status === 'correct' || status === 'noneSelect' || status === 'wrong'
          ? true
          : false
      }
      onPress={onPress}
      style={{
        ...commonButtonStyles.answerBtn,
        backgroundColor:
          status === 'wrong'
            ? COLOR_PALETTE.rose
            : status === 'correct'
            ? COLOR_PALETTE.green
            : COLOR_PALETTE.white,
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
          borderColor:
            status === 'wrong' || status === 'correct'
              ? COLOR_PALETTE.white
              : COLOR_PALETTE.gray,
        }}
      >
        {status === 'correct' ? (
          <FAIcon iconName="faCheck" color={COLOR_PALETTE.white} size={12} />
        ) : (
          <></>
        )}

        {status === 'wrong' ? (
          <FAIcon iconName="faX" color={COLOR_PALETTE.white} size={12} />
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
};

export { AnswerButton };

import { COLOR_PALETTE } from '@styles/color';
import { TextInput } from 'react-native';
import { reviewTextareaStyles } from './styles';

export const ReviewTextarea = ({
  placeholder,
  setTextInput,
  textInput,
}: {
  placeholder: string;
  setTextInput: (value: string) => void;
  textInput: string;
}) => {
  return (
    <TextInput
      editable
      multiline={true}
      numberOfLines={6}
      placeholder={placeholder}
      maxLength={40}
      onChangeText={setTextInput}
      value={textInput}
      placeholderTextColor={COLOR_PALETTE.black}
      style={reviewTextareaStyles.input}
    />
  );
};

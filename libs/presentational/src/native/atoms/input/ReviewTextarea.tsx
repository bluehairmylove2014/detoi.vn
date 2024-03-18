import { COLOR_PALETTE } from '@styles/color';
import { TextInput } from 'react-native';

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
      style={{ 
        padding:15,
        borderColor: COLOR_PALETTE.black,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
      }}
    />
  );
};

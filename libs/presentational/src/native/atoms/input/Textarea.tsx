import { COLOR_PALETTE } from '@styles/color';
import {
  Control,
  Controller,
  FieldValues,
  UseFormSetValue,
} from 'react-hook-form';
import { TextInput } from 'react-native';
import { textAreaStyles } from './styles';

export const RoseTextarea = ({
  placeholder,
  control,
  setValue,
  inputName,
}: {
  placeholder: string;
  control: Control<FieldValues, any, FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  inputName: string;
}) => {
  return (
    <Controller
      name={inputName}
      control={control}
      render={({ field }) => (
        <TextInput
          style={textAreaStyles.input}
          placeholder={placeholder}
          placeholderTextColor={COLOR_PALETTE.gray}
          selectionColor={COLOR_PALETTE.black}
          numberOfLines={4}
          multiline={true}
          {...field}
          onChangeText={(value) => {
            field.onChange(value);
            setValue(inputName, value);
          }}
        />
      )}
    />
  );
};

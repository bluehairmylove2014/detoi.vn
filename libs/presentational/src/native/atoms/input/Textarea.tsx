import { colors, textAreaStyles } from '@present-native/styles';
import {
  Control,
  Controller,
  FieldValues,
  UseFormSetValue,
} from 'react-hook-form';
import { TextInput } from 'react-native';

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
          placeholderTextColor={colors.gray}
          selectionColor={colors.black}
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

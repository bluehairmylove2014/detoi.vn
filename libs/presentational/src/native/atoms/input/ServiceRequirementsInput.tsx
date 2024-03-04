import {
  Control,
  Controller,
  FieldValues,
  UseFormSetValue,
} from 'react-hook-form';
import { TextInput, View } from 'react-native';
import { FAIcon } from '../icon';
import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { ServiceRequirementsInputStyle, colors } from '@present-native/styles';
import { BlackParagraph, RoseParagraph } from '../text';

const ServiceRequirementsInput = ({
  type,
  label,
  labelIcon,
  placeholder,
  control,
  setValue,
  inputName,
}: {
  type: 'text' | 'number';
  label: string;
  labelIcon: nativeIconNameType | null;
  placeholder: string;
  control: Control<FieldValues, any, FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  inputName: string;
}) => {
  return (
    <View style={ServiceRequirementsInputStyle.container}>
      <View style={ServiceRequirementsInputStyle.labelContainer}>
        {labelIcon ? (
          <View style={{ marginRight: 5 }}>
            <FAIcon
              iconName={labelIcon as nativeIconNameType}
              color={colors.black}
              size={15}
            />
          </View>
        ) : (
          <></>
        )}

        <View>
          <BlackParagraph theme="baseBold">
            {labelIcon ? ' | ' : ''} {label}
            <RoseParagraph theme="largeMedium"> *</RoseParagraph>
          </BlackParagraph>
        </View>
      </View>
      <Controller
        name={inputName}
        control={control}
        render={({ field }) => (
          <TextInput
            style={ServiceRequirementsInputStyle.input}
            placeholder={placeholder}
            placeholderTextColor={colors.gray}
            selectionColor={colors.black}
            keyboardType={type === 'number' ? 'numeric' : 'default'}
            maxLength={type === 'number' ? 4 : 255}
            {...field}
            onChangeText={(value) => {
              field.onChange(value);
              setValue(inputName, value);
            }}
          />
        )}
      />
    </View>
  );
};
export { ServiceRequirementsInput };

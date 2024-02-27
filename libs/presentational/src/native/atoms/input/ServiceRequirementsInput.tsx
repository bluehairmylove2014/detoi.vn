import { Control, Controller, UseFormSetValue } from 'react-hook-form';
import { TextInput, View } from 'react-native';
import { FAIcon } from '../icon';
import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { ServiceRequirementsInputStyle, colors } from '@present-native/styles';
import { BlackParagraph, RoseParagraph } from '../text';

type inputFormServiceRequirementsType = {
  input: string;
};

const ServiceRequirementsInput = ({
  type,
  label,
  labelIcon,
  placeholder,
  control,
  setValue,
}: {
  type: 'text' | 'number';
  label: string;
  labelIcon?: string;
  placeholder: string;
  control: Control<
    inputFormServiceRequirementsType,
    any,
    inputFormServiceRequirementsType
  >;
  setValue: UseFormSetValue<inputFormServiceRequirementsType>;
}) => {
  return (
    <View style={ServiceRequirementsInputStyle.container}>
      <View style={ServiceRequirementsInputStyle.labelContainer}>
        {labelIcon ? (
          <FAIcon
            iconName={labelIcon as nativeIconNameType}
            color={colors.black}
            size={15}
          />
        ) : (
          <></>
        )}

        <View style={{ marginLeft: 5 }}>
          <BlackParagraph theme="normalBold">
            {labelIcon ? ' | ' : ''} {label}
            <RoseParagraph theme="largeMedium"> *</RoseParagraph>
          </BlackParagraph>
        </View>
      </View>
      <Controller
        name="input"
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
              setValue('input', value);
            }}
          />
        )}
      />
    </View>
  );
};
export { ServiceRequirementsInput };

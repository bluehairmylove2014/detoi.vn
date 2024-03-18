import {
  Control,
  Controller,
  FieldValues,
  UseFormSetValue,
} from 'react-hook-form';
import { TextInput, View } from 'react-native';
import { FAIcon } from '../icon';
import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { COLOR_PALETTE } from '@styles/color';
import { Paragraph } from '../text';
import { ServiceRequirementsInputStyle } from './styles';

export const ServiceRequirementsInput = ({
  type,
  label,
  labelIcon,
  placeholder,
  control,
  inputName,
  isError,
}: {
  type: 'text' | 'number';
  label: string;
  labelIcon: nativeIconNameType | null;
  placeholder: string;
  control: Control<FieldValues, any, FieldValues>;
  inputName: string;
  isError: boolean;
}) => {
  const themeColor = isError ? COLOR_PALETTE.rose : COLOR_PALETTE.black;
  return (
    <View style={ServiceRequirementsInputStyle.container}>
      <View style={ServiceRequirementsInputStyle.labelContainer}>
        {labelIcon ? (
          <View style={{ marginRight: 5 }}>
            <FAIcon
              iconName={labelIcon as nativeIconNameType}
              color={themeColor}
              size={15}
            />
          </View>
        ) : (
          <></>
        )}

        <View>
          <Paragraph theme="baseBold" color={isError ? 'rose' : 'black'}>
            {labelIcon ? ' | ' : ''} {label} *
          </Paragraph>
        </View>
      </View>
      <Controller
        name={inputName}
        control={control}
        render={({ field }) => (
          <TextInput
            style={[
              ServiceRequirementsInputStyle.input,
              { borderColor: themeColor },
            ]}
            placeholder={placeholder}
            placeholderTextColor={
              isError ? COLOR_PALETTE.rose : COLOR_PALETTE.gray
            }
            selectionColor={themeColor}
            keyboardType={type === 'number' ? 'numeric' : 'default'}
            maxLength={type === 'number' ? 4 : 255}
            {...field}
            onChangeText={(value) => {
              field.onChange(value);
            }}
          />
        )}
      />
    </View>
  );
};

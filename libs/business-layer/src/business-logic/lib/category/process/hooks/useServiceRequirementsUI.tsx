import { IUIServiceRequirement } from '@business-layer/services/entities';
import { FieldValues, UseFormHandleSubmit, useForm } from 'react-hook-form';
import { View } from 'react-native';
import {
  HorizontalSpacer,
  ServiceRequirementsInput,
  ServiceRequirementsSelect,
} from '@present-native/atoms';

type useServiceRequirementsUIType = {
  onGenerateUI: ({
    requirements,
  }: {
    requirements: IUIServiceRequirement[];
  }) => JSX.Element;
  getForm: () => {
    handleSubmit: UseFormHandleSubmit<FieldValues, FieldValues>;
  };
};
export const useServiceRequirementsUI = (): useServiceRequirementsUIType => {
  const { control, handleSubmit, setValue } = useForm();

  const onGenerateUI = ({
    requirements,
  }: {
    requirements: IUIServiceRequirement[];
  }): JSX.Element => {
    return (
      <>
        {requirements.map((r, i) => (
          <View key={`requirement@${i}`}>
            {r.inputMethod.method.name === 'input' ? (
              <>
                <ServiceRequirementsInput
                  type={r.inputMethod.dataType}
                  label={r.label}
                  labelIcon={r.labelIcon}
                  placeholder={r.placeholder}
                  control={control}
                  setValue={setValue}
                  inputName={r.id}
                />
                <HorizontalSpacer size="m" />
              </>
            ) : r.inputMethod.method.name === 'select' ? (
              <>
                <ServiceRequirementsSelect
                  label={r.label}
                  labelIcon={r.labelIcon}
                  placeholder={r.placeholder}
                  options={r.inputMethod.method.options}
                  control={control}
                  setValue={setValue}
                  selectName={r.id}
                />
                <HorizontalSpacer size="m" />
              </>
            ) : (
              <></>
            )}
          </View>
        ))}
      </>
    );
  };

  const getForm = () => ({
    handleSubmit,
  });

  return {
    onGenerateUI,
    getForm,
  };
};

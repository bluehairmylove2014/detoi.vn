import {
  IUIAdditionServiceRequirement,
  IUIServiceRequirement,
} from '@business-layer/services/entities';
import { FieldValues, UseFormHandleSubmit, useForm } from 'react-hook-form';
import { View } from 'react-native';
import {
  AdditionServiceRequirement,
  Paragraph,
  HorizontalSpacer,
  ServiceRequirementsInput,
  ServiceRequirementsSelect,
  VerticalSpacer,
} from '@present-native/atoms';

type useServiceRequirementsUIType = {
  onGenerateUI: ({
    requirements,
    additionalRequirements,
  }: {
    requirements: IUIServiceRequirement[];
    additionalRequirements?: IUIAdditionServiceRequirement[];
  }) => JSX.Element;
  getForm: () => {
    handleSubmit: UseFormHandleSubmit<FieldValues, FieldValues>;
  };
};
export const useServiceRequirementsUI = (): useServiceRequirementsUIType => {
  const { control, handleSubmit, setValue } = useForm();

  const onGenerateUI = ({
    requirements,
    additionalRequirements,
  }: {
    requirements: IUIServiceRequirement[];
    additionalRequirements?: IUIAdditionServiceRequirement[];
  }): JSX.Element => {
    return (
      <>
        {requirements.map((r, i) => (
          <View key={`requirement@${i}`}>
            <VerticalSpacer size="xxl"></VerticalSpacer>

            {r.inputMethod.method.name === 'input' ? (
              <ServiceRequirementsInput
                type={r.inputMethod.dataType}
                label={r.label}
                labelIcon={r.labelIcon}
                placeholder={r.placeholder}
                control={control}
                setValue={setValue}
                inputName={r.id}
              />
            ) : r.inputMethod.method.name === 'select' ? (
              <ServiceRequirementsSelect
                label={r.label}
                labelIcon={r.labelIcon}
                placeholder={r.placeholder}
                options={r.inputMethod.method.options}
                control={control}
                setValue={setValue}
                selectName={`requirement@${r.id}`}
              />
            ) : (
              <></>
            )}
            <HorizontalSpacer size="m" />
          </View>
        ))}
        {Array.isArray(additionalRequirements) ? (
          <>
            <VerticalSpacer size="xxxl"></VerticalSpacer>

            <Paragraph theme="baseBold">Yêu cầu thêm cho nhân viên?</Paragraph>
            {additionalRequirements.map((ar, i) => (
              <View key={`ar@${i}`}>
                <View key={`additionalRequirement@${i}`}>
                  <VerticalSpacer size="l"></VerticalSpacer>
                  <AdditionServiceRequirement
                    icon={ar.icon}
                    label={ar.label}
                    autoSelect={ar.autoSelect}
                    control={control}
                    setValue={setValue}
                    selectName={`additionalRequirement@${ar.id}`}
                  />
                  <HorizontalSpacer size="m" />
                </View>
              </View>
            ))}
          </>
        ) : (
          <></>
        )}
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

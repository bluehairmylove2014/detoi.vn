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
import {
  useGenerateSchema,
  useYupValidationResolver,
} from '@utils/validators/yup';

type useServiceRequirementsUIType = {
  onGenerateUI: () => JSX.Element;
  getForm: () => {
    handleSubmit: (
      callback: (requirements: any, additionalRequirements: any) => void
    ) => () => void;
  };
};
export const useServiceRequirementsUI = ({
  requirements,
  additionalRequirements,
}: {
  requirements: IUIServiceRequirement[];
  additionalRequirements: IUIAdditionServiceRequirement[];
}): useServiceRequirementsUIType => {
  const schema = useGenerateSchema(requirements);
  const {
    control: requirementControl,
    handleSubmit: requirementHandleSubmit,
    formState: { errors: requirementErrors },
  } = useForm({
    defaultValues: {
      ...Object.fromEntries(
        requirements.map((r) => [
          r.key,
          r.inputMethod.dataType === 'number' ? 0 : '',
        ])
      ),
    },
    resolver: useYupValidationResolver(schema),
  });
  const {
    control: additionalRequirementControl,
    handleSubmit: additionalRequirementHandleSubmit,
    setValue: additionalRequirementSetValue,
  } = useForm({
    defaultValues: {
      ...Object.fromEntries(
        additionalRequirements.map((ar) => [ar.key, ar.autoSelect])
      ),
    },
  });

  const onGenerateUI = (): JSX.Element => {
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
                control={requirementControl}
                inputName={r.key}
                isError={!!requirementErrors[r.key]}
              />
            ) : r.inputMethod.method.name === 'select' ? (
              <ServiceRequirementsSelect
                label={r.label}
                labelIcon={r.labelIcon}
                placeholder={r.placeholder}
                options={r.inputMethod.method.options}
                control={requirementControl}
                selectName={r.key}
                isError={!!requirementErrors[r.key]}
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
                    control={additionalRequirementControl}
                    setValue={additionalRequirementSetValue}
                    selectName={ar.key}
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
    handleSubmit: (callback: any) =>
      requirementHandleSubmit((requirementsData) => {
        additionalRequirementHandleSubmit((additionRequirementsData) => {
          callback({ requirementsData, additionRequirementsData });
        })();
      }),
  });

  return {
    onGenerateUI,
    getForm,
  };
};

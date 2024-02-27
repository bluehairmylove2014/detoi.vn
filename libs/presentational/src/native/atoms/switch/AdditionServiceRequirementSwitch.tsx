import { Control, FieldValues, UseFormSetValue } from 'react-hook-form';

const AdditionServiceRequirement = ({
  icon,
  label,
  autoSelect,
  additionFee,
  control,
  setValue,
  selectName,
}: {
  icon: string;
  label: string;
  autoSelect: boolean;
  additionFee?: number;
  control: Control<FieldValues, any, FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  selectName: string;
}) => {
  return <></>;
};

export { AdditionServiceRequirement };

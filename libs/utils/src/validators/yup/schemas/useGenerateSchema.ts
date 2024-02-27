import * as y from 'yup';
import { validationType } from './type';

export const useGenerateSchema = ({
  validations,
  inputType,
}: {
  validations: validationType[];
  inputType: 'string' | 'number';
}) => {
  let base = y[inputType]();
  validations.forEach((v) => {
    base =
      v.name === 'required'
        ? base[v.name](v.message)
        : base[v.name](v.value, v.message);
  });
  return base;
};

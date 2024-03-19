import * as y from 'yup';
import { IUIServiceRequirement } from '@business-layer/services/entities';

export const dataTypeMapper: { [key: string]: 'number' | 'string' } = {
  number: 'number',
  text: 'string',
};

export const useGenerateSchema = (requirements: IUIServiceRequirement[]) => {
  const resultSchema: {
    [key: string]:
      | y.StringSchema<string | undefined, y.AnyObject, undefined, ''>
      | y.NumberSchema<number | undefined, y.AnyObject, undefined, ''>;
  } = {};

  requirements.map((r) => {
    let base = y[dataTypeMapper[r.inputMethod.dataType]]();
    r.inputMethod.validation.forEach((v) => {
      base =
        v.name === 'required'
          ? base[v.name](v.message)
          : base[v.name](v.value, v.message);
    });
    resultSchema[r.key] = base;
  });

  return y.object().shape(resultSchema);
};

import { nativeIconNameType } from '@business-layer/business-logic/non-service-lib/fontawesome';
import { IOption, OptionSchema } from './option';
import { ValidationTypeSchema, validationType } from '@utils/validators/yup';
import { z } from 'zod';

// inputMethod
type inputMethodType =
  | { name: 'input' }
  | {
      name: 'select';
      options?: IOption[];
    };

const InputMethodSchema = z.union([
  z.object({
    name: z.literal('input'),
  }),
  z.object({
    name: z.literal('select'),
    options: z.array(OptionSchema).optional(),
  }),
]);

export interface IUIServiceRequirement {
  id: string;
  inputMethod: {
    dataType: 'number' | 'text';
    method: inputMethodType;
    validation: ({ id: string } & validationType)[];
  };
  label: string;
  labelIcon: nativeIconNameType | null;
  placeholder: string;
  key: string;
}
export const UIServiceRequirementSchema = z.object({
  id: z.string(),
  inputMethod: z.object({
    dataType: z.enum(['number', 'text']),
    method: InputMethodSchema,
    validation: z.array(
      z.union([
        z.object({
          id: z.string(),
          name: z.literal('required'),
          value: z.null(),
          message: z.string(),
        }),
        z.object({
          id: z.string(),
          name: z.literal('min'),
          value: z.number(),
          message: z.string(),
        }),
        z.object({
          id: z.string(),
          name: z.literal('max'),
          value: z.number(),
          message: z.string(),
        }),
      ])
    ),
  }),
  label: z.string(),
  labelIcon: z.string().nullable(),
  placeholder: z.string(),
  key: z.string(),
});

export interface IUIAdditionServiceRequirement {
  id: string;
  icon: string;
  label: string;
  autoSelect: boolean;
  key: string;
}
export const UIAdditionServiceRequirementSchema = z.object({
  id: z.string(),
  icon: z.string(),
  label: z.string(),
  autoSelect: z.boolean(),
  key: z.string(),
});

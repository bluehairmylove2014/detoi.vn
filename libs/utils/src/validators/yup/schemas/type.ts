export type validationType =
  | { name: 'required'; message: string }
  | { name: 'min'; value: number; message: string }
  | { name: 'max'; value: number; message: string };
import { z } from 'zod';

const RequiredValidationSchema = z.object({
  name: z.literal('required'),
  message: z.string(),
});

const MinValidationSchema = z.object({
  name: z.literal('min'),
  value: z.number(),
  message: z.string(),
});

const MaxValidationSchema = z.object({
  name: z.literal('max'),
  value: z.number(),
  message: z.string(),
});

export const ValidationTypeSchema = z.union([
  RequiredValidationSchema,
  MinValidationSchema,
  MaxValidationSchema,
]);

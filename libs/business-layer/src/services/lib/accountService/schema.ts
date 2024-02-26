import z from 'zod';

const getAccountInfoResponseSchema = z.object({
  id: z.string(),
  email: z.string(),
  fullName: z.string(),
  dateOfBirth: z.string(),
  phone: z.string(),
  role: z.string(),
  unitUnderManagement: z.string(),
});
const modifyAccountInfoResponseSchema = z.object({
  message: z.string(),
});

const getAllAccountResponseSchema = z.array(getAccountInfoResponseSchema);
const unitModifyAccountResponseSchema = z.object({
  message: z.string(),
});
export {
  getAccountInfoResponseSchema,
  modifyAccountInfoResponseSchema,
  getAllAccountResponseSchema,
  unitModifyAccountResponseSchema,
};

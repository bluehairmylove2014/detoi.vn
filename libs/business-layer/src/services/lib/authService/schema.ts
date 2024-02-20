import z from 'zod';

const loginResponseSchema = z.object({
  message: z.string(),
});
const verifyOtpResponseSchema = z.object({
  message: z.string(),
  token: z.string(),
  refreshToken: z.string(),
});
const refreshTokenResponseSchema = z.object({
  message: z.string(),
  token: z.string(),
});
const messageResponseSchema = z.object({
  message: z.string(),
});
const registerResponseSchema = z.object({
  message: z.string(),
});

export {
  loginResponseSchema,
  verifyOtpResponseSchema,
  refreshTokenResponseSchema,
  messageResponseSchema,
  registerResponseSchema,
};

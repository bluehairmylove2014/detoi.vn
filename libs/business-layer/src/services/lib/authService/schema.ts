import { TokenSchema } from '@business-layer/services/entities';
import z from 'zod';

const loginResponseSchema = z.object({
  message: z.string(),
});
const verifyOtpResponseSchema = z.object({
  message: z.string(),
  token: TokenSchema,
  refreshToken: TokenSchema,
});
const resendOtpResponseSchema = z.object({
  message: z.string(),
});
const refreshTokenResponseSchema = z.object({
  message: z.string(),
  token: z.string(),
});

export {
  loginResponseSchema,
  verifyOtpResponseSchema,
  resendOtpResponseSchema,
  refreshTokenResponseSchema,
};

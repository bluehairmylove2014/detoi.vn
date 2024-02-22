import z from 'zod';

const loginResponseSchema = z.object({
  message: z.string(),
});
const verifyOtpResponseSchema = z.object({
  message: z.string(),
  token: z.object({
    value: z.string(),
    created: z.string(),
    expires: z.string(),
  }),
  refreshToken: z.object({
    value: z.string(),
    created: z.string(),
    expires: z.string(),
  }),
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

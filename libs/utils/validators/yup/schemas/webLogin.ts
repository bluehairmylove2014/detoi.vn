import * as y from 'yup';

export const loginSchema = y.object({
  email: y_email,
  password: y_password,
});
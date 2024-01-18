import * as y from 'yup';
import { y_email, y_password } from '.';

export const loginSchema = y.object({
  email: y_email,
  password: y_password,
});

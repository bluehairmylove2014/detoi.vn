import * as y from 'yup';
import { y_phone } from './default';

export const loginByPhoneNumberSchema = y.object({
  phone: y_phone,
});

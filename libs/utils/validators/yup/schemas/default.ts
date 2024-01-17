import * as y from 'yup';
import { vietnamPhoneNumber } from '../../regex';

const y_email = y
  .string()
  .email('Email không hợp lệ')
  .required('Cần điền email');
const y_fullName = y.string().max(255, 'Không để tên quá 255 ký tự');
const y_dateOfBirth = y.string().required('Không được để trống ngày sinh');
const y_phone = y
  .string()
  .matches(vietnamPhoneNumber, 'Số điện thoại không hợp lệ');
const y_password = y
  .string()
  .required('Không được để trống mật khẩu')
  .max(255, 'Mật khẩu tối đa 255 ký tự')
  .min(6, 'Mật khẩu tối thiểu 6 ký tự');
const y_textArea = y
  .string()
  .required('Không được để trống nội dung')
  .max(1000, 'Nội dung tối đa 1000 ký tự');

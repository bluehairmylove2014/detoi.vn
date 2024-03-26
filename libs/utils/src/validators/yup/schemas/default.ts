import * as y from 'yup';
import { generalPhoneNumberWithoutCountryCodeRegex } from '../../regex';

export const y_email = y
  .string()
  .typeError('Định dạng không hợp lệ')
  .email('Email không hợp lệ')
  .required('Cần điền email');
export const y_fullName = y
  .string()
  .typeError('Định dạng không hợp lệ')
  .max(255, 'Không để tên quá 255 ký tự');
export const y_dateOfBirth = y
  .string()
  .typeError('Định dạng không hợp lệ')
  .required('Không được để trống ngày sinh');
export const y_phone = y
  .string()
  .typeError('Định dạng không hợp lệ')
  .matches(
    generalPhoneNumberWithoutCountryCodeRegex,
    'Số điện thoại không hợp lệ'
  );
export const y_password = y
  .string()
  .typeError('Định dạng không hợp lệ')
  .required('Không được để trống mật khẩu')
  .max(255, 'Mật khẩu tối đa 255 ký tự')
  .min(6, 'Mật khẩu tối thiểu 6 ký tự');
export const y_textArea = y
  .string()
  .typeError('Định dạng không hợp lệ')
  .required('Không được để trống nội dung')
  .max(1000, 'Nội dung tối đa 1000 ký tự');

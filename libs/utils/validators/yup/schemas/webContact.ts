import * as yup from 'yup';
import { y_email, y_fullName } from '.';

export const contactSchema = yup.object().shape({
    fullName: yup.string().required('Vui lòng nhập họ và tên'),
    email: y_email,
    topic: yup.string().required('Vui lòng nhập chủ đề'),
    content: yup.string().required('Vui lòng nhập nội dung'),
});

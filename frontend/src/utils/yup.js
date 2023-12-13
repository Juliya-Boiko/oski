import * as Yup from 'yup';

export const authSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('invalid email')
    .min(6, 'min 6 characters')
    .max(50, 'max 50 characters')
    .required('required'),
  password: Yup.string()
    .min(5, 'min 5 characters')
    .max(10, 'max 10 characters')
    .required('required')
});
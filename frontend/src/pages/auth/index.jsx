import { Formik, Field, Form } from 'formik';
import { authSchema } from '../../utils/yup';
import { useLogin } from '../../services/auth/useLogin';
// import { loginUser } from '../../utils/axios';

const AuthPage = () => {
  const login = useLogin();

  const submitHandler = async (values) => {
    login(values);
    // await loginUser(values);
  };
  
  return (
    <Formik
      initialValues={{ email: 'mmm@gmail.com', password: 'mmmmm' }}
      validationSchema={authSchema}
      onSubmit={submitHandler}
     >
       {({ values, errors, touched, dirty, isValid }) => (
         <Form>
          <label htmlFor="email">
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            {errors.email && touched.email && <p>{errors.email}</p>}
          </label>
          <br />
          <label htmlFor="password">
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            {errors.password && touched.password && <p>{errors.password}</p>}
          </label>
          <br />
          <button type="submit" disabled={!isValid}>Login</button>
        </Form>
       )}
     </Formik>
  );
};

export default AuthPage;
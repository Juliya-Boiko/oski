import { Formik } from "formik";
import { authSchema } from "../../../utils/yup";
import { useSign } from "../../../services/auth/useSign";
import { InputField } from "../../inputs/inputField/InputField";
import { AuthFormStyled } from "./AuthForm.styled";
import { ButtonPrimary } from "../../buttons/buttonPrimary/ButtonPrimary";

// { email: 'mmm@gmail.com', password: 'mmmmm' }

export const AuthForm = () => {
  const sign = useSign();

  const submitHandler = async (values) => {
    sign(values);
  };
  
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={authSchema}
      onSubmit={submitHandler}
    >
      {({ values, errors, touched, dirty, isValid }) => (
        <AuthFormStyled>
          <InputField
            id="email"
            placeholder="example@gmail.com"
            errors={errors.email}
            touched={touched.email}
          />
          
          <InputField
            id="password"
            placeholder="password"
            errors={errors.password}
            touched={touched.password}
          />
          <ButtonPrimary type="submit" disabled={!isValid || !dirty} label="Enter" />
        </AuthFormStyled>
      )}
    </Formik>
  );
};
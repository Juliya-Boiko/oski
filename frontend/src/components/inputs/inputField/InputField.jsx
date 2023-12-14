import { InputFieldLabel, InputFieldTitle, InputFieldWrapper, InputFieldIcon, InputFieldInput, InputFieldError } from './InputField.styled';
import { MdOutlineAlternateEmail, MdOutlineLockOpen } from "react-icons/md";

export const InputField = ({ id, placeholder, errors, touched }) => (
  <InputFieldLabel htmlFor={id}>
    <InputFieldTitle>{id}</InputFieldTitle>
    <InputFieldWrapper>
      <InputFieldIcon>
        {id === "email"
          ? <MdOutlineAlternateEmail fill='inherit' />
          : <MdOutlineLockOpen fill='inherit' />
        }
      </InputFieldIcon>
      <InputFieldInput
        id={id}
        name={id}
        placeholder={placeholder}
        type={id}
      />
      {errors && touched && <InputFieldError>{errors}</InputFieldError>}
    </InputFieldWrapper>
  </InputFieldLabel>
);
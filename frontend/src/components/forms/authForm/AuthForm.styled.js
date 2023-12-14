import { Form } from "formik";
import styled from "styled-components";

export const AuthFormStyled = styled(Form)`
  width: 100%;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 500px) {
    width: 348px;
  }
`;
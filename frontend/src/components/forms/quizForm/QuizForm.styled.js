import { Form } from "formik";
import styled from "styled-components";

export const QuizFormStyled = styled(Form)`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const QuizFormName = styled.h2`
  margin: 0 0 12px 0;
  color: ${({ theme }) => theme.colors.brand.cyanDark};
`;

export const QuizFormCounter = styled.p`
  margin: 0 0 48px 0;
  font-size: 12px;
`;

export const QuizFormLabel = styled.p`
  margin: 0 0 32px 0;
`;
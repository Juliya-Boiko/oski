import { Field } from "formik";
import styled from "styled-components";

export const RadioGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 0 24px 0;
`;

export const RadioGroupLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  text-align: start;
  font-size: 12px;
  cursor: pointer;
`;

export const RadioGroupInput = styled(Field)`
  &:checked + span {
    color: ${({ theme }) => theme.colors.brand.cyanDark};
  }
`;
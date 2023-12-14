import styled from "styled-components";
import { Field } from "formik";

export const InputFieldLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 0 12px 0;
  padding: 0 0 12px 0;
`;

export const InputFieldTitle = styled.span`
  text-transform: capitalize;
  margin: 0 0 8px 0;
`;

export const InputFieldWrapper = styled.div`
  position: relative;
  border-radius: 4px;
  outline: 1px solid ${({ theme }) => theme.colors.grayScale.gray50};
`;

export const InputFieldIcon = styled.div`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.colors.grayScale.gray50};
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const InputFieldInput = styled(Field)`
  width: 100%;
  height: 48px;
  padding: 0 0 0 36px;
  border: none;
  outline: none;
  color: inherit;
  background-color: transparent;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale.gray20};
  }
`;

export const InputFieldError = styled.span`
  position: absolute;
  left: 0;
  bottom: -12px;
  text-transform: lowercase;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.semantic.error};
`;
import styled from "styled-components";

export const ButtonPrimaryStyled = styled.button`
  height: 48px;
  text-align: center;
  border: none;
  outline: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.brand.cyanDark};
  background-color: ${({ theme }) => theme.colors.brand.cyanLight};
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 8px 0px rgba(11, 31, 77, 0.10);
    color: ${({ theme }) => theme.colors.brand.cyanLight};
    background-color: ${({ theme }) => theme.colors.brand.cyanDark};
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.grayScale.gray50};
    background-color: ${({ theme }) => theme.colors.grayScale.gray20};
    cursor: not-allowed;
  }
`;
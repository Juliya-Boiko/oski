import styled from "styled-components";

export const ButtonSecondaryStyled = styled.button`
  width: ${({ $width }) => $width ? $width : "auto"};
  height: 36px;
  padding: 0 16px;
  text-align: center;
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.brand.cyanDark};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.brand.cyanDark};
  background-color: transparent;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 8px 0px rgba(11, 31, 77, 0.10);
    color: ${({ theme }) => theme.colors.brand.cyanLight};
    background-color: ${({ theme }) => theme.colors.brand.cyanDark};
  }
`;
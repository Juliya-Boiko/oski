import styled from "styled-components";

export const ButtonIconStyled = styled.button`
  height: 36px;
  width: 148px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  border: none;
  outline: none;
  border-radius: 4px;
  fill: ${({ theme }) => theme.colors.brand.cyanLight};
  color: ${({ theme }) => theme.colors.brand.cyanLight};
  background-color: ${({ theme }) => theme.colors.brand.cyanDark};
  transition: all 250ms ease-in-out;
  cursor: pointer;
  span {
    margin: 0 8px 0 0;
  }
  &:hover {
    box-shadow: 0px 4px 8px 0px rgba(11, 31, 77, 0.10);
  }
  &:disabled {
    box-shadow: none;
    fill: ${({ theme }) => theme.colors.grayScale.gray50};
    color: ${({ theme }) => theme.colors.grayScale.gray50};
    background-color: ${({ theme }) => theme.colors.grayScale.gray20};
    cursor: not-allowed;
  }
`;
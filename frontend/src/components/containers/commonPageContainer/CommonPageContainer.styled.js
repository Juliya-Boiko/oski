import styled from "styled-components";

export const CommonPageContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommonPageTitle = styled.h1`
  margin: 0 0 48px 0;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
`;
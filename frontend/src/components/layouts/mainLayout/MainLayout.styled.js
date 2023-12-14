import styled from "styled-components";

export const MainLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const MainLayoutMain = styled.main`
  padding: 24px;
  flex-grow: 1;
`;


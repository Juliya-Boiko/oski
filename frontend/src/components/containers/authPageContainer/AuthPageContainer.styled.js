import styled from "styled-components";
import bgiUrl from "../../../assets/auth/main.svg";

export const AuthPageContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const AuthPageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 50%;
    align-self: stretch;
  }
`;

export const AuthPageTitle = styled.h1`
  margin: 0 0 48px 0;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
`;

export const AuthPageImage = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    width: 50%;
    align-self: stretch;
    background-image: url(${bgiUrl});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }
`;
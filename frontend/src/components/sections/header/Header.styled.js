import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  box-shadow: 0px -1px 0px 0px #E0E0E0 inset;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`;

export const HeaderNav = styled.nav`
  display: flex;
`;

export const HeaderLink = styled(NavLink)`
  width: 100%;
  padding: 12px;
  text-align: center;
  border-radius: 4px 4px 0 0;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.brand.cyanDark};
  transition: all 250ms ease-in-out;
  &.active {
    background-color: ${({ theme }) => theme.colors.brand.cyanLight};
  }
`;
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const DashboardStyled = styled.aside`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 200px;
    padding: 48px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: -1px 0px 0px 0px #E0E0E0 inset;
  }
`;

export const DashboardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DashboardNav = styled.nav`
  width: 100%;
  margin: 48px 0;
  display: flex;
  flex-direction: column;
`;

export const DashboardLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.brand.cyanDark};
  transition: all 250ms ease-in-out;
  span {
    margin: 0 0 0 12px;
  }
  svg {
    width: 48px;
    height: 48px;
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.brand.cyanLight};
  }
`;
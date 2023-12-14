import { ROUTE_KEYS } from "../../../constants";
import { useLogout } from "../../../services/auth/useLogout";
import { Logo } from "../../logo/Logo";
import { ButtonSecondary } from "../../buttons/buttonSecondary/ButtonSecondary";
import {
  HeaderStyled,
  HeaderWrapper,
  HeaderNav,
  HeaderLink
} from "./Header.styled";

export const Header = () => {
  const logout = useLogout();

  return (
    <HeaderStyled>
      <HeaderWrapper>
        <Logo size="36px" />
        <ButtonSecondary buttonType="button" label="Logout" onClick={logout} />
      </HeaderWrapper>
      <HeaderNav>
        <HeaderLink to={ROUTE_KEYS.HOME}>Home</HeaderLink>
        <HeaderLink to={ROUTE_KEYS.SCORE}>Scores</HeaderLink>
      </HeaderNav>
    </HeaderStyled>
  );
};
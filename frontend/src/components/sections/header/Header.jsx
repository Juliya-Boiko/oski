import { HeaderStyled, HeaderWrapper, HeaderNav, HeaderLink } from "./Header.styled";
import { ROUTE_KEYS } from "../../../constants";
import { useLogout } from "../../../services/auth/useLogout";
import { Logo } from "../../logo/Logo";
import { ButtonSecondary } from "../../buttons/buttonSecondary/ButtonSecondary";

export const Header = () => {
  const logout = useLogout();

  return (
    <HeaderStyled>
      <HeaderWrapper>
        <Logo />
        <ButtonSecondary buttonType="button" label="Logout" onClick={logout} />
      </HeaderWrapper>
      <HeaderNav>
        <HeaderLink to={ROUTE_KEYS.HOME}>Home</HeaderLink>
        <HeaderLink to={ROUTE_KEYS.SCORE}>Scores</HeaderLink>
      </HeaderNav>
    </HeaderStyled>
  );
};
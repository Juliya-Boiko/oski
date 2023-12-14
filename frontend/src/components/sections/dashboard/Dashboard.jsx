import { ROUTE_KEYS } from "../../../constants";
import { useLogout } from "../../../services/auth/useLogout";
import { Logo } from "../../logo/Logo";
import { ButtonSecondary } from "../../buttons/buttonSecondary/ButtonSecondary";
import { ReactComponent as DashIcon } from "../../../assets/thumbs/game.svg";
import { ReactComponent as ScoresIcon } from "../../../assets/thumbs/scores.svg";
import {
  DashboardStyled,
  DashboardWrapper,
  DashboardNav,
  DashboardLink
} from "./Dashboard.styled";

export const Dashboard = () => {
  const logout = useLogout();

  return (
    <DashboardStyled>
      <DashboardWrapper>
        <Logo size="100px" />
        {/* <Logotype /> */}
        <DashboardNav>
          <DashboardLink to={ROUTE_KEYS.HOME}>
            <DashIcon />
            <span>Home</span>
          </DashboardLink>
          <DashboardLink to={ROUTE_KEYS.SCORE}>
            <ScoresIcon />
            <span>Scores</span>
          </DashboardLink>
        </DashboardNav>
      </DashboardWrapper>
      <ButtonSecondary buttonType="button" label="Logout" onClick={logout} width="160px" />
    </DashboardStyled>
  );
};

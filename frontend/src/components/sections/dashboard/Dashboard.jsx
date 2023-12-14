import { DashboardStyled, DashboardWrapper, DashboardNav, DashboardLink } from "./Dashboard.styled";
import { ROUTE_KEYS } from "../../../constants";
import { useLogout } from "../../../services/auth/useLogout";
import { ButtonSecondary } from "../../buttons/buttonSecondary/ButtonSecondary";
import { Logo } from "../../logo/Logo";
import { ReactComponent as DashIcon } from "../../../assets/thumbs/game.svg";
import { ReactComponent as QuizIcon } from "../../../assets/thumbs/shoes.svg";
import { ReactComponent as ScoresIcon } from "../../../assets/thumbs/scores.svg";

export const Dashboard = () => {
  const logout = useLogout();

  return (
    <DashboardStyled>
      <DashboardWrapper>
        <Logo />
        <DashboardNav>
          <DashboardLink to={ROUTE_KEYS.HOME}>
            <DashIcon />
            <span>Home</span>
          </DashboardLink>
          <DashboardLink to={ROUTE_KEYS.QUIZ}>
            <QuizIcon />
            <span>Quiz</span>
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

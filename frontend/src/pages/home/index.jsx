import { QuizList } from "../../components/sections/quizList/QuizList";
import { CommonPageContainer } from "../../components/containers/commonPageContainer/CommonPageContainer";

const HomePage = () => (
  <CommonPageContainer title="Quizzes">
    <QuizList />
  </CommonPageContainer>
);

export default HomePage;
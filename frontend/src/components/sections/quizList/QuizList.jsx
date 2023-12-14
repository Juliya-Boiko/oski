import { useAssigned } from "../../../services/quiz/useAssigned";
import { QuizListSection, QuizListStyled, QuizListItem } from "./QuizList.styled";
import { Loader } from "../../loaders/Loader";
import { useNavigate } from "react-router-dom";
import { sortByScore } from "../../../utils/helpers";

export const QuizList = () => {
  const { data, isLoading } = useAssigned();
  const navigate = useNavigate();

  const navHandler = (id, score) => {
    if (!score) {
      navigate(`/quiz/${id}`)
    }
  }

  const sorted = sortByScore(data);

  return (
    <QuizListSection>
      {isLoading && <Loader />}
      <QuizListStyled>
        {data && sorted.map(({ name, quizId, score }) => {
          return (
            <QuizListItem
              key={quizId}
              $active={score}
              onClick={() => navHandler(quizId, score)}
            >
              {name}
            </QuizListItem>
          )
        })}
      </QuizListStyled>
    </QuizListSection>
  );
};
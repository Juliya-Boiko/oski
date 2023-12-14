import { useNavigate } from "react-router-dom";
import { useAssigned } from "../../../services/quiz/useAssigned";
import { Loader } from "../../loaders/Loader";
import { sortByScoreNull } from "../../../utils/helpers";
import {
  QuizListSection,
  QuizListStyled,
  QuizListItem
} from "./QuizList.styled";

export const QuizList = () => {
  const { data, isLoading } = useAssigned();
  const navigate = useNavigate();

  const navHandler = (id, score) => {
    if (!score) {
      navigate(`/quiz/${id}`);
    }
  };

  const sorted = sortByScoreNull(data);

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
import { useAssigned } from "../../../services/quiz/useAssigned";
import { filterByScorePassed } from "../../../utils/helpers";
import { Loader } from "../../loaders/Loader";
import {
  ScoresSection,
  ScoresList,
  ScoresItem,
  ScoresName,
  ScoresAmount
} from "./Scores.styled";

export const Scores = () => {
  const { data } = useAssigned();

  const scores = filterByScorePassed(data);

  return (
    <ScoresSection>
      <ScoresList>
        {data ? (
          <>
            <ScoresItem>
              <ScoresName>Name</ScoresName>
              <ScoresAmount>Score</ScoresAmount>
            </ScoresItem>
            {scores.map(({ name, quizId, score }) => {
              return (
                <ScoresItem key={quizId}>
                  <ScoresName>{name}</ScoresName>
                  <ScoresAmount>{score}</ScoresAmount>
                </ScoresItem>
              )
            })}
          </>
        ) : <Loader />
        }
      </ScoresList>
    </ScoresSection>
  );
};
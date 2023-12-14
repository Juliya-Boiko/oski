import { useQuiz } from "../../services/quiz/useQuiz";
import { CommonPageContainer } from "../../components/containers/commonPageContainer/CommonPageContainer";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/loaders/Loader";
import { QuizForm } from "../../components/forms/quizForm/QuizForm";

const QuizPage = () => {
  const {id: quizId} = useParams();
  const { data } = useQuiz(quizId);

  return (
    <CommonPageContainer title="Quiz">
      {data
        ? (
          <>
            <h2>{data.name}</h2>
            <QuizForm data={data.questions} quizId={quizId} />
          </>
        )
        : <Loader />
      }
    </CommonPageContainer>
  );
};

export default QuizPage;
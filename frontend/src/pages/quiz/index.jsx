import { useQuiz } from "../../services/quiz/useQuiz";
const id = '6578d54380642282008fc19d';

const QuizPage = () => {
  const data = useQuiz(id);

  console.log(data);

  return (
    <div>QuizPage page</div>
  );
};

export default QuizPage;
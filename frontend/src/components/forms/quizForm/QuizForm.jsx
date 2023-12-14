import { useState } from "react";
import { useParams } from "react-router-dom";
import { useScore } from "../../../services/user/useScore";
import { useQuiz } from "../../../services/quiz/useQuiz";
import { Formik } from "formik";
import { Loader } from "../../loaders/Loader";
import { RadioGroup } from "../../inputs/radioGroup/RadioGroup";
import { ButtonIcon } from "../../buttons/buttonIcon/ButtonIcon";
import {
  QuizFormStyled,
  QuizFormName,
  QuizFormCounter,
  QuizFormLabel
} from "./QuizForm.styled";
import {
  formatFormValues,
  getLastIdx,
  getQuestionsAmount,
  getCurrentItem
} from "../../../utils/helpers";

export const QuizForm = () => {
  const [current, setCurrent] = useState(0);
  const { id: quizId } = useParams();
  const { data } = useQuiz(quizId);
  const postResult = useScore();
  
  const initialValues = formatFormValues(data);
  const lastElemIdx = getLastIdx(data);
  const totalAmount = getQuestionsAmount(data);
  const question = getCurrentItem(data, current);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => postResult({ quizId, values })}
    >
      {({ values }) => (
        <>
          {data ? (
            <QuizFormStyled>
              <QuizFormName>{data.name}</QuizFormName>
              <QuizFormCounter>Question: {current + 1} of {totalAmount}</QuizFormCounter>
              <QuizFormLabel>{question.label}</QuizFormLabel>
              <RadioGroup data={question.answers} name={question._id} />

              {current !== lastElemIdx && (
                <ButtonIcon
                  label="Next"
                  disabled={!values[question._id]}
                  onClick={() => setCurrent(prev => prev + 1)}
                />
              )}
              {current === lastElemIdx && (
                <button
                  type="submit"
                  disabled={values[question._id] === ''}
                >
                  Submit
                </button>
              )}
            </QuizFormStyled>) : (
            <Loader />
          )}
        </>
      )}
    </Formik>
  );
};
import { useState } from "react";
import { Formik, Form } from "formik";
import { RadioGroup } from "../../inputs/radioGroup/radioGroup";
import { sendResults } from "../../../utils/axios";

export const QuizForm = ({ data, quizId }) => {
  const [current, setCurrent] = useState(0);
  const initialValues = data.reduce((acc, v) => ({ ...acc, [v._id]: ''}), {});
  const lastElemIdx = data.length - 1;

  console.log(quizId);

  const submitHandler = (values) => {
    sendResults({ quizId, values});
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
    >
      {({ values, errors, touched, dirty, isValid }) => (
        <Form>
          <h6>{data[current].label}</h6>
          <RadioGroup data={data[current].answers} name={data[current]._id} />

          {current !== lastElemIdx && (
            <button
              type="button"
              disabled={values[data[current]._id] === ''}
              onClick={() => setCurrent(prev => prev + 1)}
            >
              Next
            </button>
          )}
          {current === lastElemIdx && (<button type="submit" disabled={values[data[current]._id] === ''}>Submit</button>)}
        </Form>
      )}
    </Formik>
  );
};
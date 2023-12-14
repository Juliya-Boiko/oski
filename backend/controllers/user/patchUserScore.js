import User from '../../models/User.js';
import Answer from '../../models/Answer.js';

export const patchUserScore = async (req, res) => {
  // GET VALUES FROM REQUEST
  const { _id: userId } = req.user;
  const { quizId, values } = req.body;

  const { marks } = await User.findById(userId);
  const { answers: correct } = await Answer.findOne({ quizId });

  // CALCULATE SCORE
  const formattedValues = Object.entries(values).map((el) => {
    return { answerId: el[0], answer: el[1] }
  });
  const formattedAnswers = correct.reduce((acc, v) => ({ ...acc, [v.answerId]: v.answer}), {});
  const score = formattedValues.reduce((ac, el) => {
    return el.answer === formattedAnswers[el.answerId] ? ac + 1 : ac
  }, 0);

  // UPDATE USER 
  const passedQuizIdx = marks.findIndex(el => el.quizId.toString() === quizId.toString());
  marks[passedQuizIdx].score = score;
  const updatedUser = await User.findByIdAndUpdate(userId, { marks }, { new: true });

  // GENERATE RESPONSE
  res.status(201).json({
    updatedUser
  });
};


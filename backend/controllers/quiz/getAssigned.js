import Quiz from '../../models/Quiz.js';
import User from '../../models/User.js';

export const getAssigned = async (req, res) => {
  // GET VALUES FROM REQUEST
  const { _id: userId } = req.user;

  // FORM NECESSARY VALUES
  const { marks } = await User.findById(userId);
  const quizzes = await Quiz.find();
  const filteredByScore = marks.filter(el => el.score === null);
  const formattedValues = filteredByScore.map(({ quizId }) => {
    const { name } = quizzes.find((el) => el._id.toString() === quizId.toString());
    return { quizId, name }
  });

  // GENERATE RESPONSE
  res.status(200).json({
    data: formattedValues
  });
};
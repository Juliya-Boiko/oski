import Quiz from '../../models/Quiz.js';

export const getQuizById = async (req, res) => {
  // GET VALUES FROM REQUEST
  const { id } = req.params;

  const data = await Quiz.findById(id);

  // GENERATE RESPONSE
  res.status(200).json({
    data
  });
};
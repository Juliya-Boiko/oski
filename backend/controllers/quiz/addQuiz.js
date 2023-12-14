import Quiz from '../../models/Quiz.js';

export const addQuiz = async (req, res) => {
  // CREATE NEW
  await Quiz.create(req.body);

  // GENERATE RESPONSE
  res.status(201).json({
    message: 'Quiz created successfully',
  });
};
import User from '../../models/User.js';

export const patchUserScore = async (req, res) => {
  // GET VALUES FROM REQUEST
  const { _id: userId } = req.user;
  const { quizId, score } = req.body;

  const { marks } = await User.findById(userId);
  const idx = marks.findIndex((el) => el.quizId.toString() === quizId.toString());
  if (idx === -1) {
    res.status(404).json({
      message: 'Not found quiz'
    });
  } else {
    // UPDATE SCORE
    marks[idx].score = score;
    await User.findByIdAndUpdate(userId, { marks }, { new: true });

    // GENERATE RESPONSE
    res.status(201).json({
      message: 'Updated successfully',
    });
  }
};
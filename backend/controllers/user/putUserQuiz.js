import User from '../../models/User.js';

export const putUserQuiz = async (req, res) => {
  // GET VALUES FROM REQUEST
  const { _id } = req.user;
  const { quizId } = req.body;

  const user = await User.findById(_id);

  // CHECK IF ALREADY ASSIGNED
  const isAssigned = user.marks.findIndex(el => el.quizId === quizId);

  if (isAssigned === -1) {
    // UPDATE MARKS
    const marksSet = {
      marks: [...user.marks, { quizId, score: null }]
    };
    await User.findByIdAndUpdate(_id, marksSet, { new: true });

    // GENERATE RESPONSE
    res.status(201).json({
      message: 'Updated successfully',
    });
  } else {
    res.status(409).json({
      message: 'Already assigned'
    });
  }
};
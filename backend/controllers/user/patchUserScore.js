import User from '../../models/User.js';
import Answer from '../../models/Answer.js';
import { strict as assert } from 'node:assert';

export const patchUserScore = async (req, res) => {
  // GET VALUES FROM REQUEST
  const { _id: userId } = req.user;
  const { quizId, values } = req.body;
  const formattedValues = Object.entries(values).map((el) => {
    return { [el[0]]: el[1] }
  });

  const { answers } = await Answer.findOne({ quizId });
  
  res.status(201).json({
    formattedValues, answers
  });
  // }
  // 
  // const correct = answers.reduce((acc, v) => ({ ...acc, [v.answerId]: v.answer}), {});
  
  // const { quizId, score } = req.body;

  // const { marks } = await User.findById(userId);
  // const idx = marks.findIndex((el) => el.quizId.toString() === quizId.toString());
  // if (idx === -1) {
  //   res.status(404).json({
  //     message: 'Not found quiz'
  //   });
  // } else {
  //   // UPDATE SCORE
  //   marks[idx].score = score;
  //   await User.findByIdAndUpdate(userId, { marks }, { new: true });

  //   // GENERATE RESPONSE
  //   res.status(201).json({
  //     message: 'Updated successfully',
  //   });
  // }
};


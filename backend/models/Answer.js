import { Schema, model } from 'mongoose';

const keySchema = Schema({
  answerId: {
    type: String,
    required: [true, 'answerId is required']
  },
  answer: {
    type: String,
    required: [true, 'answers is required']
  }
});

const answerSchema = Schema({
  quizId: {
    type: String,
    required: [true, 'testId is required'],
  },
  answers: {
    type: [keySchema],
    required: [true, 'questions [] is required'],
  }
}, { versionKey: false });

const Answer = model('answer', answerSchema);

export default Answer;
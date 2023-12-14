import { Schema, model } from 'mongoose';

const questionSchema = Schema({
  label: {
    type: String,
    required: [true, 'question is required']
  },
  answers: {
    type: [String],
    required: [true, 'answers [] is required']
  }
});

const quizSchema = Schema({
  name: {
    type: String,
    required: [true, 'Email is required'],
  },
  questions: {
    type: [questionSchema],
    required: [true, 'questions [] is required'],
  }
}, { versionKey: false });

const Quiz = model('quiz', quizSchema);

export default Quiz;
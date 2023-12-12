import { Schema, model } from 'mongoose';

const quizSchema = Schema({
  name: {
    type: String,
    required: [true, 'Email is required'],
  },
}, { versionKey: false });

const Quiz = model('quiz', quizSchema);

export default Quiz;
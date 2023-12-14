import { Schema, model } from 'mongoose';

const marksSchema = Schema({
  quizId: {
    type: Schema.Types.ObjectId,
  },
  score: {
    type: Number,
  }
}, { versionKey: false });

const userSchema = Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  token: {
    type: String,
  },
  marks: {
    type: [marksSchema]
  }
}, { versionKey: false });

const User = model('user', userSchema);

export default User;
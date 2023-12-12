import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRouter from '../../routes/auth.js'
import quizRouter from '../../routes/quiz.js';
import userRouter from '../../routes/user.js';
import 'dotenv/config';

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/oski/auth', authRouter);
app.use('/oski/quiz', quizRouter);
app.use('/oski/user', userRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
});

app.use((err, req, res) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message })
});

export default app;
import { Router } from 'express';
import { auth } from '../middlewares/auth.js';
import { handler } from '../middlewares/handler.js';
import { addQuiz } from '../controllers/quiz/addQuiz.js';
import { getAssigned } from '../controllers/quiz/getAssigned.js';
import { getQuizById } from '../controllers/quiz/getQuizById.js';

const router = Router();

router.get('/', auth, handler(getAssigned));

router.get('/:id', auth, handler(getQuizById));

router.post('/', handler(addQuiz));

export default router;
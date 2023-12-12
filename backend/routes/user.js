import { Router } from 'express';
import { auth } from '../middlewares/auth.js';
import { getUserInfo } from '../controllers/user/getUserInfo.js';
import { putUserQuiz } from '../controllers/user/putUserQuiz.js';
import { patchUserScore } from '../controllers/user/patchUserScore.js';
import { handler } from '../middlewares/handler.js';

const router = Router();

router.get('/', auth, handler(getUserInfo));

router.put('/', auth, handler(putUserQuiz));

router.patch('/', auth, handler(patchUserScore));

export default router;
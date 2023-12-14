import { Router } from 'express';
import { handler } from '../middlewares/handler.js';
import { validation } from '../middlewares/validation.js';
import { sign } from '../controllers/auth/sign.js';
import { logout } from '../controllers/auth/logout.js';
import { authSchema } from '../utils/joi.js';
import { auth } from '../middlewares/auth.js';

const router = Router();

router.post('/sign', validation(authSchema), handler(sign));

router.post('/logout', auth, handler(logout));

export default router;
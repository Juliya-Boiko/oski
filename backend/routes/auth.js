import { Router } from 'express';
import { handler } from '../middlewares/handler.js';
import { validation } from '../middlewares/validation.js';
import { register } from '../controllers/auth/register.js';
import { login } from '../controllers/auth/login.js';
import { authSchema } from '../utils/joi.js';

const router = Router();

router.post('/register', validation(authSchema), handler(register));

router.post('/login', validation(authSchema), handler(login));

export default router;
import { Router } from 'express';
const router = Router();

import { signin, profile } from '../controllers/auth.controller'
import { TokenValidation } from '../libs/verifyToken'

router.post('/signin', signin)
      .get('/profile', TokenValidation, profile);

export default router;
import { Router } from 'express'
import { getUsuarios } from '../controllers/usuarios.controller';
import { TokenValidation } from '../libs/verifyToken'

const router = Router();

router.route('/')
    .get(TokenValidation, getUsuarios)


export default router;
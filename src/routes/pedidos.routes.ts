
import { reservarMenu } from '../controllers/pedidos.controller';
import { Router } from 'express'
import { TokenValidation } from '../libs/verifyToken'

const router = Router();

router.route('/reservar')
    .post(TokenValidation, reservarMenu)


export default router;
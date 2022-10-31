import { getMenuByDate } from '../controllers/menu.controller';
import { Router } from 'express'
import { TokenValidation } from '../libs/verifyToken'

const router = Router();

router.route('/menuByDate/:fecha_menu')
    .get(TokenValidation, getMenuByDate)


export default router;
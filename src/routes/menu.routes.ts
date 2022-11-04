import { getMenuByDate, getParametrosMenu} from '../controllers/menu.controller';
import { Router } from 'express'
import { TokenValidation } from '../libs/verifyToken'

const router = Router();

router
    .get('/menuByDate/:fecha_menu', TokenValidation, getMenuByDate)
    .get('/parametrosMenu', TokenValidation, getParametrosMenu)



export default router;
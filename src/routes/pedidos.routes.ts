
import { getReservas, reservarMenu } from '../controllers/pedidos.controller';
import { Router } from 'express'
import { TokenValidation } from '../libs/verifyToken'

const router = Router();

router
    .post('/reservar',TokenValidation, reservarMenu)
    .get('/get-reservas',TokenValidation, getReservas)


export default router;

import { eliminarReserva, getReservas, reservarMenu } from '../controllers/pedidos.controller';
import { Router } from 'express'
import { TokenValidation } from '../libs/verifyToken'

const router = Router();

router
    .post('/reservar',TokenValidation, reservarMenu)
    .delete('/eliminar',TokenValidation, eliminarReserva)
    .get('/get-reservas',TokenValidation, getReservas)


export default router;
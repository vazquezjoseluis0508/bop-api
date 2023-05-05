
import { eliminarReserva, getReservas, pedidoCancelado, pedidoRealizado, reservarMenu } from '../controllers/reservas.controller';
import { Router } from 'express'
import { TokenValidation } from '../libs/verifyToken'

const router = Router();

router
    .post('/reservar',TokenValidation, reservarMenu)
    .delete('/eliminar',TokenValidation, eliminarReserva)
    .get('/get-reservas',TokenValidation, getReservas)
    .put('/pedido-realizado',TokenValidation, pedidoRealizado)
    .put('/pedido-cancelado',TokenValidation, pedidoCancelado)


export default router;
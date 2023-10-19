
import { 
    eliminarReserva, 
    getPedidosMonitor, 
    getReservas, 
    pedidoCalificado, 
    pedidoCancelado, 
    pedidoRealizado, 
    pedidoReservado, 
    pedidoRetirado 
} from '../controllers/reservas.controller';

import { Router } from 'express'
import { TokenValidation } from '../libs/verifyToken'

const router = Router();

router
    .delete('/eliminar',TokenValidation, eliminarReserva)
    .get('/get-reservas',TokenValidation, getReservas)
    .get('/get-pedidos-monitor',TokenValidation, getPedidosMonitor)
    .post('/pedido-reservado',TokenValidation, pedidoReservado)
    .put('/pedido-realizado',TokenValidation, pedidoRealizado)
    .put('/pedido-retirado',TokenValidation, pedidoRetirado)
    .put('/pedido-cancelado',TokenValidation, pedidoCancelado)
    .put('/pedido-calificado', TokenValidation, pedidoCalificado)
    


export default router;


import { Router } from 'express'
import { TokenValidation } from '../libs/verifyToken'
import { createPreferencia, getPreferenciaByUser } from '../controllers/preferencia_menu_usuario.controller';

const router = Router();

router
    // .delete('/delete',TokenValidation, eliminarReserva)
    .get('/getByUser',TokenValidation, getPreferenciaByUser)
    .post('/create',TokenValidation, createPreferencia)
    // .put('/update',TokenValidation, pedidoRealizado)
  
    


export default router;
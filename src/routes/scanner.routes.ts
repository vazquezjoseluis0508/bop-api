
import {  escanearCliente, getHistorial } from '../controllers/scanner.controller';
import { Router } from 'express'
import { TokenValidation } from '../libs/verifyToken'

const router = Router();

router
    .get('/historial',TokenValidation, getHistorial )
    .post('/historial',TokenValidation, escanearCliente)


export default router;
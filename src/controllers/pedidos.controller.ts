import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { reservaValidation } from '../dtos/pedidos.dto';


const prisma = new PrismaClient()


export async function reservarMenu(req: Request, res: Response): Promise<Response | void> {
    console.log('reservarMenu')

    // Validation
    const { error } = reservaValidation(req.body);
    if (error) return res.status(400).json(error.message);

    try {
        
        const { idMenu, turno, usuario } = req.body
        
        const pedido = await prisma.pedido.create({
            data: {
                idMenu: idMenu,
                turno: turno,
                usuario: usuario
            }
        })

        return res.json(pedido);
    }
    catch (e) {
        console.log(e)
    }
}

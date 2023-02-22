import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { reservaValidation } from '../dtos/pedidos.dto';
import { date } from 'joi';


const prisma = new PrismaClient()


export async function reservarMenu(req: Request, res: Response): Promise<Response | void> {

    // Validation
    const { error } = reservaValidation(req.body);
    if (error) return res.status(400).json(error.message);

    try {
        
        const { idMenu, turno, usuario } = req.body
        // get user
        const user = await prisma.usuarios.findUnique({
            where: {
                idUsuarios: usuario
            }
        });
        if (!user) return res.status(400).json('Usuario no encontrado');

        // get menu
        const menu = await prisma.menu_personal.findUnique({
            where: {
                idMenuPersonal: idMenu
            }
        });
        if (!menu) return res.status(400).json('Menu no encontrado');

        // save reserva menu 
        const calendario_menu = await prisma.calendariomenu.create({
            data: {
                legajo: user.legajo,
                persona_str: user.nombre,
                title: menu.descripcion,
                descripcion: 'Reserva de menu',
                start: new Date(),
                color: '#FF0000',
                textColor: '#FFFFFF',
                end: new Date(),
                idMenu: idMenu,
                idMenuBingo: 0,
                turno: turno,
                estado: 2, // 1: pendiente, 2: reservado, 3: cancelado
                f_registro: new Date(),

            }



        })

        return res.json(calendario_menu);
    }
    catch (e) {
        console.log("🚀 ~ file: pedidos.controller.ts ~ line 30 ~ reservarMenu ~ e", e)
    }
}

export async function getReservas (req: Request, res: Response): Promise<Response | void> {
    try {

        const pedidos = await prisma.calendariomenu.findMany({
            where: { estado: 2 }
        })
        return res.json(pedidos);
    }
    catch (e) {
        console.log("🚀 ~ file: pedidos.controller.ts ~ line 30 ~ reservarMenu ~ e", e)
    }
}

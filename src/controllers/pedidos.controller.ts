import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { deleteReservaValidation, getReservaValidation, reservaValidation } from '../dtos/pedidos.dto';
import { Server as SocketServer } from 'socket.io'




const prisma = new PrismaClient({
    // log: [
    //   {
    //     emit: 'event',
    //     level: 'query',
    //   },
    //   {
    //     emit: 'stdout',
    //     level: 'error',
    //   },
    //   {
    //     emit: 'stdout',
    //     level: 'info',
    //   },
    //   {
    //     emit: 'stdout',
    //     level: 'warn',
    //   },
    // ],
  })
  
//   prisma.$on('query', (e) => {
//     console.log('Query: ' + e.query)
//     console.log('Params: ' + e.params)
//     console.log('Duration: ' + e.duration + 'ms')
//   })



    

export async function getPedidos (req: Request, res: Response): Promise<Response | void> {

    // Validation
    const { error } = getReservaValidation(req.query);
    if (error) throw new Error(error.message);

    try {
        const { legajo } = req.query

        const date = new Date();

        const after30Days = new Date(date.getTime() + 30 * 24 * 60 * 60 * 1000);

        let where
        if(legajo) {
            where = {
                estado: 2,
                legajo: String(legajo),
                start: {
                    gte: date,
                    lte: after30Days
                }
            }
        } else {
            where = {
                estado: 2,
                start: {
                    gte: date,
                    lte: after30Days
                }
            }
        }


        const reservas = await prisma.calendariomenu.findMany({
            where: where,
        })

        return res.json(reservas);
    }
    catch (e:any) {
        console.log("🚀 ~ file: pedidos.controller.ts ~ line 75 ~ getReservas ~ e", e)
        return res.status(400).json(e.message);
    }
}

export async function addPedido(req: Request, res: Response): Promise<Response | void> {

    // Validation
    // const { error } = reservaValidation(req.body);
    // if (error) throw new Error(error.message);

    // try {
    //     const { legajo, start, end, menu, estado } = req.body

    //     const reserva = await prisma.calendariomenu.create({
    //         data: {
    //             legajo: legajo,
    //             start: start,
    //             end: end,
    //             menu: menu,
    //             estado: estado
    //         }
    //     })

    //     return res.json(reserva);
    // }
    // catch (e:any) {
    //     console.log("🚀 ~ file: pedidos.controller.ts ~ line 75 ~ getReservas ~ e", e)
    //     return res.status(400).json(e.message);
    // }
}



import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { deleteReservaValidation, getReservaValidation, reservaValidation } from '../dtos/pedidos.dto';


const prisma = new PrismaClient({
    log: [
      {
        emit: 'event',
        level: 'query',
      },
      {
        emit: 'stdout',
        level: 'error',
      },
      {
        emit: 'stdout',
        level: 'info',
      },
      {
        emit: 'stdout',
        level: 'warn',
      },
    ],
  })
  
  prisma.$on('query', (e) => {
    console.log('Query: ' + e.query)
    console.log('Params: ' + e.params)
    console.log('Duration: ' + e.duration + 'ms')
  })




export async function reservarMenu(req: Request, res: Response): Promise<Response | void> {

    // Validation
    const { error } = reservaValidation(req.body);
    if (error) return res.status(400).json(error.message);

    try {

        
        const { idMenu, turno, usuario, fecha } = req.body
        // get user
        const user = await prisma.usuarios.findUnique({
            where: {
                idUsuarios: parseInt(usuario)
            }
        });

        if (!user) return res.status(400).json('Usuario no encontrado');

        // get menu
        const menu = await prisma.menu_personal.findUnique({
            where: {
                idMenuPersonal: parseInt(idMenu)
            }
        });
        if (!menu) return res.status(400).json('Menu no encontrado');

        console.log("servidor: ",  new Date(fecha))

        // save reserva menu 
        const calendario_menu = await prisma.calendariomenu.create({
            data: {
                legajo: user.legajo,
                persona_str: user.nombre,
                title: menu.descripcion,
                descripcion: 'Reserva de menu',
                start: new Date(fecha),
                color: '#FF0000',
                textColor: '#FFFFFF',
                end: new Date(fecha),
                idMenu: parseInt(idMenu),
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

    // Validation
    const { error } = getReservaValidation(req.query);
    if (error) throw new Error(error.message);

    try {
        const { legajo } = req.query

        const date = new Date();

        const after30Days = new Date(date.getTime() + 30 * 24 * 60 * 60 * 1000);


        const pedidos = await prisma.calendariomenu.findMany({
            where: { 
                estado: 2,
                legajo: String(legajo),
                // start: {
                //     gte: date,
                //     lte: after30Days
                // }
             }
        })

        return res.json(pedidos);
    }
    catch (e) {
        console.log("🚀 ~ file: pedidos.controller.ts ~ line 75 ~ getReservas ~ e", e)
    }
}

export async function eliminarReserva (req: Request, res: Response): Promise<Response | void> {
  
      // Validation
      const { error } = deleteReservaValidation(req.query);
      if (error) return res.status(400).json(error.message);

      try {
          const { idCalendarioMenu } = req.query

          const pedido = await prisma.calendariomenu.update({
              where: {
                  idCalendarioMenu: parseInt(idCalendarioMenu as string)
              },
              data: {
                  estado: 3
              }
          })

          return res.json(pedido);
      } catch (e) {
          console.log("🚀 ~ file: pedidos.controller.ts ~ line 75 ~ getReservas ~ e", e)
      }
  }

  

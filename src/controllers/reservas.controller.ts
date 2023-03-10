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

        // busca un menu reservado en el mismo dia y turno
        const menuReservado = await prisma.calendariomenu.findMany({
            where: {
                legajo: user.legajo,
                start: new Date(fecha),
                estado: 2
            }
        });
        let calendario_menu: any;

        if (menuReservado.length > 0){
            // modificar el menu reservado
            calendario_menu = await prisma.calendariomenu.update({
                where: {
                    idCalendarioMenu: menuReservado[0].idCalendarioMenu
                },
                data: {
                    idMenu: parseInt(idMenu),
                    title: menu.descripcion,
                    descripcion: 'Menu modificado',
                    color: '#FF0000',
                    textColor: '#FFFFFF',
                    idMenuBingo: 0,
                    estado: 2, // 1: pendiente, 2: reservado, 3: cancelado
                    f_registro: new Date(),
                    turno: turno
                }
            })


        } else {
            // crear reserva
            calendario_menu = await prisma.calendariomenu.create({
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
    
        }

        const io: SocketServer = req.app.get('io');
        io.emit('nueva-reserva', calendario_menu);

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

        const io: SocketServer = req.app.get('io');
        io.emit('elimina-reserva', pedido);

          return res.json(pedido);
      } catch (e) {
          console.log("🚀 ~ file: pedidos.controller.ts ~ line 75 ~ getReservas ~ e", e)
      }
  }

  

import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { deleteReservaValidation, getReservaValidation, pedidoCanceladoValidation, pedidoRealizadoValidation, reservaValidation } from '../dtos/pedidos.dto';
import { Server as SocketServer } from 'socket.io'

const prisma = new PrismaClient({})

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

        // TODO: Falta obtener el id de persona y la persona_str por medio del legajo

        if (!user) return res.status(400).json('Usuario no encontrado');

        // get menu
        const menu = await prisma.menu_personal.findUnique({
            where: {
                idMenuPersonal: parseInt(idMenu)
            }
        });
        if (!menu) return res.status(400).json('Menu no encontrado');


        // primero obtengo el valor del menu externo con el id mas alto
        const valor_menu = await prisma.valormenu.findMany({
            orderBy: {
                idValorMenu: 'desc'
            },
            take: 1
        });


        // busca un menu reservado en el mismo dia y turno
        const menuReservado = await prisma.calendariomenu.findMany({
            where: {
                legajo: user.legajo,
                start: new Date(fecha),
                estado: {
                    in: [2, 3, 4]
                }
            }
        });
        let calendario_menu: any;
        let pedido: any;

        if (menuReservado.length > 0) {

            if (menuReservado[0].estado === 3 || menuReservado[0].estado === 4) {
                return res.status(400).json('No es posible realizar la reserva en la misma fecha con un pedido en estado 3, realizado');
            }

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
                    estado: 2, // 1: pendiente, 2: reservado, 3: retirado, 4: cancelado
                    f_registro: new Date(),
                    turno: turno
                }
            })

            pedido = await prisma.pedido.findMany({
                where: {
                    usuario: parseInt(usuario),
                    idCalendarioMenu: menuReservado[0].idCalendarioMenu,
                    estado: 2

                }
            })

            if (pedido.length > 0) {

                pedido = await prisma.pedido.update({
                    where: {
                        idPedido: pedido[0].idPedido
                    },
                    data: {
                        idMenu: parseInt(idMenu),
                        idMenuBingo: null,
                        importe_externo: valor_menu[0].importe_externo,
                        importe_interno: null,
                        turno: turno,
                        estado: 2,
                        f_registro: new Date(),
                    }
                })
            }


        } else {
            // crear reserva en calendario menu
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
                    estado: 2, // 1: pendiente, 2: reservado, 3: retirado, 4: cancelado
                    f_registro: new Date(),

                }

            })

            // crear pedido en tabla pedido

            pedido = await prisma.pedido.create({
                data: {
                    legajo: user.legajo,
                    persona: null,
                    persona_str: user.nombre,
                    descripcion: '',
                    idMenu: parseInt(idMenu),
                    idMenuBingo: null,
                    usuario: user.idUsuarios,
                    importe_externo: valor_menu[0].importe_externo,
                    importe_interno: null,
                    turno: turno,
                    estado: 2,
                    f_registro: new Date(),
                    idCalendarioMenu: calendario_menu.idCalendarioMenu
                }
            })


        }

        // agregar el pedido al calendario_menu
        calendario_menu.idPedido = pedido.idPedido;

        const io: SocketServer = req.app.get('io');
        io.emit('nueva-reserva', calendario_menu);

        return res.json(calendario_menu);
    }
    catch (e) {
        console.log("🚀 ~ file: pedidos.controller.ts ~ line 30 ~ reservarMenu ~ e", e)
    }
}

export async function getReservas(req: Request, res: Response): Promise<Response | void> {

    // Validation
    const { error } = getReservaValidation(req.query);
    if (error) throw new Error(error.message);

    try {
        const { legajo } = req.query
        // ayer
        const yesterday = new Date(new Date().setDate(new Date().getDate() -2))

        const date = new Date();

        const after30Days = new Date(date.getTime() + 30 * 24 * 60 * 60 * 1000);

        let where
        if (legajo) {
            where = {
                estado: {
                    in: [2, 3, 4]
                },
                legajo: String(legajo),
                start: {
                    gte: yesterday,
                    lte: after30Days
                }
            }
        } else {
            where = {
                estado: 2,
                start: {
                    gte: yesterday,
                    lte: after30Days
                }
            }
        }


        let reservas: any = await prisma.calendariomenu.findMany({
            where: where,
        })



        return res.json(reservas);
    }
    catch (e: any) {
        console.log("🚀 ~ file: pedidos.controller.ts ~ line 75 ~ getReservas ~ e", e)
        return res.status(400).json(e.message);
    }
}

export async function eliminarReserva(req: Request, res: Response): Promise<Response | void> {

    // Validation
    const { error } = deleteReservaValidation(req.query);
    if (error) return res.status(400).json(error.message);

    try {
        const { idCalendarioMenu } = req.query


        const calendarioMenu = await prisma.calendariomenu.delete({
            where: {
                idCalendarioMenu: parseInt(idCalendarioMenu as string),
            }
        })

        const pedido = await prisma.pedido.findFirst({
            where: {
                idCalendarioMenu: parseInt(idCalendarioMenu as string)
            }
        })

        const delete_pedido = await prisma.pedido.delete(
            {
                where: {
                    idPedido: pedido?.idPedido
                }
            }
        )


        const io: SocketServer = req.app.get('io');
        io.emit('elimina-reserva', calendarioMenu);

        return res.json(calendarioMenu);
    } catch (e) {
        console.log("🚀 ~ file: pedidos.controller.ts ~ line 75 ~ getReservas ~ e", e)
    }
}

export async function pedidoRealizado(req: Request, res: Response): Promise<Response | void> {
    // Validation
    const { error } = pedidoRealizadoValidation(req.body);
    if (error) return res.status(400).json(error.message);

    try {
        const { idCalendarioMenu } = req.body;

        // obtengo el calendario_menu
        let calendarioMenu = await prisma.calendariomenu.findFirst({
            where: {
                idCalendarioMenu: parseInt(idCalendarioMenu)
            }
        });


        let pedido = await prisma.pedido.findFirst({
            where: {
                idCalendarioMenu: parseInt(idCalendarioMenu)
            }
        });

        // Si el pedido no existe, crea uno nuevo con estado 3 (opcional)
        if (!pedido) {
            const usuario = await prisma.usuarios.findFirst({
                where: {
                    legajo: calendarioMenu?.legajo
                }
            })

            const valor_menu = await prisma.valormenu.findMany({
                orderBy: {
                    idValorMenu: 'desc'
                },
                take: 1
            });

            pedido = await prisma.pedido.create({
                data: {
                    idCalendarioMenu: parseInt(idCalendarioMenu),
                    estado: 3,
                    legajo: calendarioMenu?.legajo,
                    persona: null,
                    persona_str: calendarioMenu?.persona_str,
                    descripcion: '',
                    idMenu: calendarioMenu?.idMenu,
                    idMenuBingo: null,
                    usuario: usuario?.idUsuarios,
                    importe_externo: valor_menu[0].importe_externo,
                    importe_interno: null,
                    turno: calendarioMenu?.turno,
                    f_registro: new Date(),

                }
            });
        }
        // Si el pedido existe, actualiza su estado
        else {
            pedido = await prisma.pedido.update({
                where: {
                    idPedido: pedido.idPedido
                },
                data: {
                    estado: 3,
                }
            });
        }

        const calendario_menu = await prisma.calendariomenu.update({
            where: {
                idCalendarioMenu: parseInt(idCalendarioMenu)
            },
            data: {
                estado: 3
            }
        });

        const io: SocketServer = req.app.get('io');
        io.emit('pedido-realizado', { pedido, calendario_menu });

        return res.json(pedido);
    } catch (e) {
        console.log("🚀 ~ file: pedidos.controller.ts ~ line 75 ~ getReservas ~ e", e)
    }
}

export async function pedidoCancelado(req: Request, res: Response): Promise<Response | void> {
    // Validation
    const { error } = pedidoCanceladoValidation(req.body);
    if (error) return res.status(400).json(error.message);

    try {
        const { idCalendarioMenu, motivo } = req.body
        const motivo_cancelacion = motivo ? motivo : ''

        const pedido = await prisma.pedido.findFirst({
            where: {
                idCalendarioMenu: parseInt(idCalendarioMenu)
            }
        })

        const pedido_update = await prisma.pedido.update({
            where: {
                idPedido: pedido?.idPedido
            },
            data: {
                estado: 4,
                descripcion: motivo_cancelacion
            }
        })

        const calendario_menu = await prisma.calendariomenu.update({
            where: {
                idCalendarioMenu: parseInt(idCalendarioMenu)
            },
            data: {
                estado: 4,
                descripcion: motivo_cancelacion
            }
        })

        const io: SocketServer = req.app.get('io');
        io.emit('pedido-cancelado', { pedido, calendario_menu });

        return res.json(pedido);
    } catch (e) {
        console.log("🚀 ~ file: pedidos.controller.ts ~ line 75 ~ getReservas ~ e", e)
    }
}



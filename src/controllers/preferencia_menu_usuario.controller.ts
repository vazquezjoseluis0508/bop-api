import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express'

const prisma = new PrismaClient({})

export async function getPreferenciaByUser ( req: Request, res: Response): Promise<Response | void> {
    try {
        const { legajo }    = req.body

        const preferencia = await prisma.preferencia_menu_usuario.findMany({
            where: {
                legajo: legajo,
                // estado: 1
            },
            orderBy: {
                fecharegistro: 'desc'
            },
            take: 1000
        })


        return res.json(preferencia);
    }
    catch (e: any) {
        console.log("🚀 ~ file: pedidos.controller.ts ~ line 75 ~ getReservas ~ e", e)
        return res.status(400).json(e.message);
    }
}

export async function createPreferencia ( req: Request, res: Response): Promise<Response | void> {
    try {
        const { legajo, sal, idUsuario }    = req.body

        // find if user has a preference
        const preferencia = await prisma.preferencia_menu_usuario.findMany({
            where: {
                legajo: legajo,
                estado: 1
            }
        })

        if (preferencia.length > 0) {
            // update preference
            const update = await prisma.preferencia_menu_usuario.update({
                where: {
                    idPreferencia: preferencia[0].idPreferencia
                },
                data: {
                    estado: 0
                }
            })
        }




        const new_preference = await prisma.preferencia_menu_usuario.create({
            data: {
                legajo: legajo,
                sal: sal,
                idUsuario: idUsuario,
                estado: 1,
                fecharegistro: new Date()

            }
        })

        return res.json(new_preference)
    }
    catch (e: any) {
        console.log("🚀 ~ file: pedidos.controller.ts ~ line 75 ~ getReservas ~ e", e)
        return res.status(500).json(e.message);
    }
}

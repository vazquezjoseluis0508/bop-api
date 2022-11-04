import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { isDate } from 'class-validator'


const prisma = new PrismaClient()


export async function getMenuByDate(req: Request, res: Response): Promise<Response | void> {
    try {
        const { fecha_menu } = req.params
        //convertir fecha_menu a tipo Date
        const fecha = new Date(fecha_menu) // 2021-08-01
        if (!isDate(fecha)) {
            return res.status(400).json({ message: 'La fecha no es valida' })
        }
        const menu = await prisma.menu_personal.findMany({
            where: { fecha_menu: fecha, estado: 1 } // 2021-08-01
        })

        return res.json(menu);
    }
    catch (e) {
        console.log(e)
    }
}


export async function getParametrosMenu(req: Request, res: Response): Promise<Response | void> {
    try {
        const parametrosMenu = await prisma.parametro_menu.findFirst({
            where: { estado: 1 }
        })
        return res.json(parametrosMenu);
    }
    catch (e) {
        console.log("🚀 ~ file: menu.controller.ts ~ line 37 ~ getParametrosMenu ~ e", e)
    }
}

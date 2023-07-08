import { Request, Response } from 'express'
import { isDate } from 'class-validator'
import prismaConfig from '../db/prisma.config'




export async function getMenus(req: Request, res: Response): Promise<Response | void> {
    try {

        // current month
        const currentMonth = new Date().getMonth() + 1
        const yesterday = new Date(new Date().setDate(new Date().getDate() - 1))

        const menus = await prismaConfig.menu_personal.findMany({
            where: { 
                estado: 1, 
                // fecha_menu: { 
                // // gte: new Date(new Date().getFullYear(), currentMonth - 1, 1) } 
                // gte: yesterday }
                
            },
            orderBy: { fecha_menu: 'desc' },
            take: 2000
            
        })
        return res.json(menus);
    }
    catch (e) {
        console.log(e)
    }
}

export async function getMenuByDate(req: Request, res: Response): Promise<Response | void> {
    try {
        const { fecha_menu } = req.params
        //convertir fecha_menu a tipo Date
        const fecha = new Date(fecha_menu) // 2021-08-01
        if (!isDate(fecha)) {
            return res.status(400).json({ message: 'La fecha no es valida' })
        }
        const menu = await prismaConfig.menu_personal.findMany({
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
        const parametrosMenu = await prismaConfig.parametro_menu.findFirst({
            where: { estado: 1 }
        })
        return res.json(parametrosMenu);
    }
    catch (e) {
        console.log("🚀 ~ file: menu.controller.ts ~ line 37 ~ getParametrosMenu ~ e", e)
    }
}

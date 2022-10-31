import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export async function getUsuarios(req: Request, res: Response): Promise<Response | void> {
    try {
        const allUsers = await prisma.usuarios.findMany()
        return res.json(allUsers);
    }
    catch (e) {
        console.log(e)
    }
}


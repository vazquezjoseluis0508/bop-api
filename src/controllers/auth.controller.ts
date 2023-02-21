import { Request, Response } from 'express'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const signin = async (req: Request, res: Response) => {

    try {
        const { usr, password } = req.body;
        const user = await prisma.usuarios.findFirst({
            where: {
                usr
            }
        });



        if (!user) return res.status(401).json({message: 'Usuario o password invalido'});

        const correctPassword = await validationPassword(user.clave, password);
        if (!correctPassword) return res.status(401).json({message: 'Usuario o password invalido'});

        // Create a Token
        const token: string = jwt.sign({ _id: user.idUsuarios }, process.env['TOKEN_SECRET'] || '', {
            expiresIn: 1800 // 30 minutes
            });
        const response = {
            access_token: token,
            legajo: user.legajo,
            usr: user.usr,
            nombre: user.nombre,
            permiso_id: user.permisos_id,
            message: 'Login Successfull'            
        }

        res.header('auth-token', token).json(response);

    } catch (error) {
        console.log({ error })
    }
};

export const profile = async (req: Request, res: Response) => {
    try {

        const user: any = await prisma.usuarios.findUnique({
            where: {
                idUsuarios: parseInt(req.userId),
            },
            // include :  {
            //     permisos : true
            // }
        });
        if (!user) {
            return res.status(404).json('No User found');
        }


        const permisos = JSON.parse(user.permisos.permisos)
        console.log("🚀 ~ file: auth.controller.ts ~ line 51 ~ profile ~ user.permisos.permiso", user.permisos.permisos)
        // console.log("🚀 ~ file: auth.controller.ts ~ line 54 ~ permisos ~ permisos", permisos)

        user.clave = '**********';

        
        
        res.json(user);
        
    } catch (error) {
        console.log("🚀 ~ file: auth.controller.ts ~ line 48 ~ profile ~ error", error)
    }
    
};

const validationPassword = async (hash: string, body_password: string) => {
    try {
        hash = hash.replace(/^\$2y(.+)$/i, '$2a$1');
        return bcrypt.compare(body_password, hash)
    } catch (error) {
        console.log({ error })
        return false
    }

}
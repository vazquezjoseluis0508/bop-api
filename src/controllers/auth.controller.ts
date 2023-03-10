import { Request, Response } from 'express'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prismaConfig from '../db/prisma.config';




export const signin = async (req: Request, res: Response) => {

    try {
        const { usuario, password } = req.body;
        if (!usuario || !password) return res.status(400).json({ message: 'Usuario o password invalido' });

        const user = await prismaConfig.usuarios.findMany(
            {
                where: {
                    usr: usuario
                }
            }
        );


        if (user.length === 0) return res.status(401).json({ message: 'Usuario o password invalido' });

        const correctPassword = await validationPassword(user[0].clave, password);
        if (!correctPassword) return res.status(401).json({ message: 'Usuario o password invalido' });

        // Create a Token
        const token: string = jwt.sign({ _id: user[0].idUsuarios }, process.env['TOKEN_SECRET'] || '', {
            // expiresIn: 1800 // 30 minutes
            expiresIn: 86400 // 24 hours
        });
        const response = {
            idUsuarios: user[0].idUsuarios,
            access_token: token,
            legajo: user[0].legajo,
            usr: user[0].usr,
            nombre: user[0].nombre,
            permiso_id: user[0].permisos_id,
            message: 'Login Successfull'
        }

        res.header('auth-token', token).json(response);

    } catch (error: any) {
        res.status(500).json({ "error": "Server error.", "message": error.message })
        console.log({ error })
    }
};

export const profile = async (req: Request, res: Response) => {
    try {

        const user: any = await prismaConfig.usuarios.findUnique({
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
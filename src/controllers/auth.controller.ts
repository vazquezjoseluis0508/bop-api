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
        if (!user) return res.status(400).json('Email or Password is wrong');

        const correctPassword = await validationPassword(user.clave, password);
        if (!correctPassword) return res.status(400).json('Invalid Password');

        // Create a Token
        const token: string = jwt.sign({ _id: user.idUsuarios }, process.env['TOKEN_SECRET'] || '');
        res.header('Authorization', token).json(token);
        console.log("user logged in: ", user)
    } catch (error) {
        console.log({ error })
    }
};

export const profile = async (req: Request, res: Response) => {
    const user = await prisma.usuarios.findUnique({
        where: {
            idUsuarios: parseInt(req.userId),
        },
    });
    if (!user) {
        return res.status(404).json('No User found');
    }
    res.json(user);
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
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export interface IPayload {
    _id: string;
    iat: number;
} 

export const TokenValidation = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('authorization') || '';
        if (!token)  return res.status(401).json('Access Denied, Authorization header not found.');
        const bearerToken = typeof token !== undefined ? token.split(' ')[1] : '';
        const payload = jwt.verify(bearerToken, process.env['TOKEN_SECRET'] || '') as IPayload;
        req.userId = payload._id;
        next();
    } catch (e) {
        res.status(400).send('Invalid Token');
    }
}
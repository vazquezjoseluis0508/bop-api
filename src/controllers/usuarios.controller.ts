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

// export async function createPost(req: Request, res: Response) {
//     const newPost: Usuarios = req.body;
//     const conn = await connect();
//     await conn.query('INSERT INTO posts SET ?', [newPost]);
//     res.json({
//         message: 'New Post Created'
//     });
// }

// export async function getPost(req: Request, res: Response) {
//     const id = req.params.postId;
//     const conn = await connect();
//     const posts = await conn.query('SELECT * FROM posts WHERE id = ?', [id]);
//     res.json(posts[0]);
// }

// export async function deletePost(req: Request, res: Response) {
//     const id = req.params.postId;
//     const conn = await connect();
//     await conn.query('DELETE FROM posts WHERE id = ?', [id]);
//     res.json({
//         message: 'Post deleted'
//     });
// }

// export async function updatePost(req: Request, res: Response) {
//     const id = req.params.postId;
//     const updatePost: Post = req.body;
//     const conn = await connect();
//     await conn.query('UPDATE posts set ? WHERE id = ?', [updatePost, id]);
//     res.json({
//         message: 'Post Updated'
//     });
// }
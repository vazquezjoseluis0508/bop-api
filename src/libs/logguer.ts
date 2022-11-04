import { PrismaClient } from "@prisma/client"

export const logguer = ( accion: string, accion_id: number, usuario: number, modulo: number ) => {
    const prisma = new PrismaClient()
    
    try {
        const log = prisma.consola.create({
                        data: {
                            accion: accion,
                            accion_id: accion_id,
                            usuario: usuario,
                            modulo: modulo,
                            fecha_registro: new Date(),
                        }
                    })
        return log
                                            
    } catch (error) {
        console.log("🚀 ~ file: logguer.ts ~ line 19 ~ logguer ~ error", error)
    }
}
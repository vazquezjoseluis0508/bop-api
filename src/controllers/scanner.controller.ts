import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({})
  

export async function getHistorial(req: Request, res: Response): Promise<Response | void> {
    try {
        const historial = await prisma.historial_escaneo.findMany({
            include: {
                cliente: true,
                usuario: true,
            },
        });
        
        return res.json(historial);
    } catch (e: any) {
        console.log("Error en getHistorial: ", e);
        return res.status(400).json(e.message);
    }
}
  

export async function escanearCliente(req: Request, res: Response): Promise<Response | void> {
    // Datos del escaneo
    const { codigo, apellido, nombre, sexo, documento, ejemplar, fechaNacimiento, fechaEmision,  } = req.body;
    // Datos del usuario que escanea
    const  idUsuario  = parseInt(req.userId);

    console.log("🚀 ~ file: scanner.controller.ts ~ line 75 ~ escanearCliente ~ req.body", req.headers)
    try {
        // Buscar cliente por documento
        let cliente = await prisma.clientes.findFirst({
            where: {
                documento: documento,
                apellido: apellido,
                nombre: nombre,
            }
        });

        // convert string 05/08/1988 to date for mysql format date 1988-08-05
        const fechaNacimientoDate = new Date(fechaNacimiento.split("/").reverse().join("-"));
        const fechaEmisionDate = new Date(fechaEmision.split("/").reverse().join("-"));


        // Si el cliente no existe, crearlo
        if (!cliente) {
            cliente = await prisma.clientes.create({
                data: {
                    codigo,
                    apellido,
                    nombre,
                    sexo,
                    documento,
                    ejemplar,
                    fecha_nacimiento: fechaNacimientoDate,
                    fecha_emision: fechaEmisionDate,
                },
            });
        }


        // Registrar el historial de escaneo
        const historialEscaneo = await prisma.historial_escaneo.create({
            data: {
                cliente: {
                    connect: {
                        id: cliente.id,
                    },
                },
                usuario: {
                    connect: {
                        idUsuarios: Number(idUsuario),
                    },
                },

                fecha_escaneo: new Date(),
            },
        });

        // Retornar el cliente y el registro del historial
        return res.json({
            cliente,
            historialEscaneo,
        });
    } catch (e) {
        console.log("Error en agregarCliente: ", e);
        return res.status(500).json({ message: "Error al procesar la solicitud" });
    }
}

    



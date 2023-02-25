import Joi from '@hapi/joi';
import { IPedido } from '../interface/Pedidos';



export const reservaValidation = (data: IPedido) => {
    const pedidoSchema = Joi.object({
        idMenu: Joi
            .number()
            .required(),
        turno: Joi
            .string().valid('11:00', '14:00', '20:00')
            .required(),
        usuario: Joi
            .number()
            .required(),
        fecha: Joi
            .date()
            .required(),
            
    });
    return pedidoSchema.validate(data);
};

export const getReservaValidation = (data: any) => {
    const pedidoSchema = Joi.object({
        legajo: Joi
            .string()
            .required(),
    });
    return pedidoSchema.validate(data);
}

export const deleteReservaValidation = (data: any) => {
    const pedidoSchema = Joi.object({
        idCalendarioMenu: Joi
            .string()
            .required(),
    });
    return pedidoSchema.validate(data);
}



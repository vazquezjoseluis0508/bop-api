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
            
    });
    return pedidoSchema.validate(data);
};



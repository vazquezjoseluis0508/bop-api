export interface IPedido {
    idPedido?: number;
    idCalendarioMenu: number;
    idMenu: number;
    usuario: number;
    f_registro: Date;
    f_listo: Date;
    estado: number;
    persona:   number;
    legajo: number;
    persona_str: string;
    descripcion: string;
    importe_externo: number;
    importe_interno: number;
    idMenuBingo: number;
    turno: '11:00' | '13:00' | '20:00';
}
export interface IUsuarios {
    idUsuarios?: number;
    nombre: string;
    usr: string;
    email: string;
    clave?: string;
    permisos?: IPermisos;
    legajo: string;
}

export interface IPermisos {
    idPermisos?: number;
    permiso: string;
}
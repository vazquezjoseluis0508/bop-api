import { IsInt, IsDefined, IsOptional, IsDate } from "class-validator";
import "./";

export class articulos_maquinas {
    @IsDefined()
    @IsInt()
    idArticuloMaquina!: number;

    @IsDefined()
    @IsInt()
    maquina!: number;

    @IsDefined()
    @IsInt()
    articulo!: number;

    @IsDefined()
    @IsInt()
    cantidad!: number;

    @IsOptional()
    @IsInt()
    usuario?: number;

    @IsOptional()
    @IsDate()
    fecha_hora?: Date;

    @IsOptional()
    @IsInt()
    estado?: number;

    @IsOptional()
    @IsDate()
    fecha_salida?: Date;

    @IsOptional()
    @IsInt()
    usuario_salida?: number;
}

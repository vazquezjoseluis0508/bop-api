import { IsInt, IsDefined, IsOptional, IsDate } from "class-validator";
import "./";

export class articulos_laboratorio {
    @IsDefined()
    @IsInt()
    idArticuloLaboratorio!: number;

    @IsDefined()
    @IsInt()
    articulo!: number;

    @IsDefined()
    @IsInt()
    maquina!: number;

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
    asignado?: number;

    @IsOptional()
    @IsInt()
    estado?: number;

    @IsOptional()
    @IsInt()
    reparados?: number;
}

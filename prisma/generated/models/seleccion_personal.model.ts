import { IsInt, IsDefined, IsString, IsOptional, IsDate } from "class-validator";
import "./";

export class seleccion_personal {
    @IsDefined()
    @IsInt()
    idSeleccion_personal!: number;

    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsString()
    apellido?: string;

    @IsOptional()
    @IsString()
    domicilio?: string;

    @IsOptional()
    @IsString()
    contacto?: string;

    @IsOptional()
    @IsString()
    fuente_reclutamiento?: string;

    @IsOptional()
    @IsString()
    descripcion?: string;

    @IsOptional()
    @IsInt()
    estado?: number;

    @IsOptional()
    @IsDate()
    f_proceso?: Date;

    @IsOptional()
    @IsString()
    meta_estado?: string;

    @IsOptional()
    @IsDate()
    fecha_meta_estado?: Date;

    @IsOptional()
    @IsInt()
    sector?: number;
}

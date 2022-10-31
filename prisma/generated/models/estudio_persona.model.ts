import { IsInt, IsDefined, IsOptional, IsString, IsDate } from "class-validator";
import "./";

export class estudio_persona {
    @IsDefined()
    @IsInt()
    idEstudio_persona!: number;

    @IsOptional()
    @IsInt()
    idEstudio?: number;

    @IsOptional()
    @IsInt()
    idPersona?: number;

    @IsOptional()
    @IsString()
    descripcion?: string;

    @IsOptional()
    @IsDate()
    fecha_registro?: Date;

    @IsOptional()
    @IsInt()
    usuario?: number;

    @IsOptional()
    @IsInt()
    estado?: number;

    @IsOptional()
    @IsString()
    estado_str?: string;

    @IsOptional()
    @IsDate()
    fecha_inicio?: Date;

    @IsOptional()
    @IsDate()
    fecha_finalizacion?: Date;
}

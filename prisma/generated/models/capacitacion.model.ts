import { IsInt, IsDefined, IsString, IsOptional, IsDate } from "class-validator";
import "./";

export class capacitacion {
    @IsDefined()
    @IsInt()
    idCapacitacion!: number;

    @IsOptional()
    @IsString()
    descripcion?: string;

    @IsOptional()
    @IsDate()
    f_inicio?: Date;

    @IsOptional()
    @IsDate()
    f_fin?: Date;

    @IsOptional()
    @IsInt()
    estado?: number;

    @IsOptional()
    @IsString()
    tema?: string;

    @IsOptional()
    @IsDate()
    f_registro?: Date;

    @IsOptional()
    @IsInt()
    usuario?: number;

    @IsOptional()
    @IsString()
    capacitador?: string;

    @IsOptional()
    @IsInt()
    cupo?: number;

    @IsOptional()
    @IsString()
    modalidad?: string;

    @IsOptional()
    @IsString()
    evaluacion?: string;

    @IsOptional()
    @IsString()
    institucion?: string;

    @IsOptional()
    @IsString()
    tipo?: string;

    @IsOptional()
    @IsString()
    obligatorio?: string;

    @IsOptional()
    @IsString()
    sector?: string;
}

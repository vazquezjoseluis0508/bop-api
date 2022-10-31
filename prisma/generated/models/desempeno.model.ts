import { IsInt, IsDefined, IsDate, IsOptional, IsString } from "class-validator";
import "./";

export class desempeno {
    @IsDefined()
    @IsInt()
    idDesempeno!: number;

    @IsDefined()
    @IsInt()
    idPersona!: number;

    @IsDefined()
    @IsInt()
    usuario!: number;

    @IsDefined()
    @IsDate()
    f_registro!: Date;

    @IsOptional()
    @IsInt()
    estado?: number;

    @IsOptional()
    @IsString()
    con_tecnico?: string;

    @IsOptional()
    @IsString()
    con_operativo?: string;

    @IsOptional()
    @IsString()
    precencia_prolijidad?: string;

    @IsOptional()
    @IsString()
    puntualidad?: string;

    @IsOptional()
    @IsString()
    cumplimiento_modalidad_trabajo?: string;

    @IsOptional()
    @IsString()
    vocabulario?: string;

    @IsOptional()
    @IsString()
    trabajo_equipo?: string;

    @IsOptional()
    @IsString()
    capacidad_organizacion?: string;

    @IsOptional()
    @IsString()
    vocacion_servicio?: string;

    @IsOptional()
    @IsString()
    capacidad_analisis?: string;

    @IsOptional()
    @IsString()
    obs?: string;

    @IsOptional()
    @IsString()
    cumplimiento_normas?: string;
}

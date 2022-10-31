import { IsInt, IsDefined, IsString, IsOptional, IsBoolean, IsDate } from "class-validator";
import "./";

export class ticket {
    @IsDefined()
    @IsInt()
    idTicket!: number;

    @IsDefined()
    @IsInt()
    solicita!: number;

    @IsDefined()
    @IsInt()
    idAsignado!: number;

    @IsDefined()
    @IsInt()
    referencia!: number;

    @IsOptional()
    @IsString()
    descripcion?: string;

    @IsOptional()
    @IsString()
    prioridad?: string;

    @IsOptional()
    @IsBoolean()
    estado?: boolean;

    @IsOptional()
    @IsDate()
    f_solicitud?: Date;

    @IsOptional()
    @IsDate()
    f_respuesta?: Date;

    @IsOptional()
    @IsString()
    modulo?: string;

    @IsOptional()
    @IsString()
    submodulo?: string;

    @IsOptional()
    @IsString()
    categoria?: string;

    @IsOptional()
    @IsString()
    tipo?: string;

    @IsDefined()
    @IsDate()
    f_cierre!: Date;

    @IsDefined()
    @IsDate()
    f_proceso!: Date;

    @IsDefined()
    @IsDate()
    f_atencion!: Date;

    @IsOptional()
    @IsInt()
    sector?: number;
}

import { IsInt, IsDefined, IsOptional, IsString } from "class-validator";
import "./";

export class maquinas {
    @IsDefined()
    @IsInt()
    idMaquina!: number;

    @IsOptional()
    @IsInt()
    nro_egm?: number;

    @IsOptional()
    @IsString()
    fabricante?: string;

    @IsOptional()
    @IsString()
    modelo?: string;

    @IsOptional()
    @IsString()
    p_pago?: string;

    @IsOptional()
    @IsString()
    denom?: string;

    @IsOptional()
    @IsString()
    juego?: string;

    @IsOptional()
    @IsString()
    nro_serie?: string;

    @IsOptional()
    @IsString()
    programa?: string;

    @IsOptional()
    @IsString()
    credito?: string;

    @IsOptional()
    @IsString()
    estado?: string;

    @IsOptional()
    @IsString()
    img?: string;

    @IsOptional()
    @IsString()
    ap_minima?: string;

    @IsOptional()
    @IsString()
    ap_maxima?: string;

    @IsOptional()
    @IsString()
    cant_lineas?: string;

    @IsOptional()
    @IsString()
    tipo_juego?: string;
}

import { IsInt, IsDefined, IsOptional, IsDate, IsString } from "class-validator";
import "./";

export class desempeno_evol {
    @IsDefined()
    @IsInt()
    idDesempenoEvol!: number;

    @IsOptional()
    @IsInt()
    idEvaluador?: number;

    @IsOptional()
    @IsInt()
    usuario?: number;

    @IsOptional()
    @IsInt()
    idPersona?: number;

    @IsOptional()
    @IsDate()
    f_desempeno?: Date;

    @IsOptional()
    @IsInt()
    escucha?: number;

    @IsOptional()
    @IsInt()
    ayuda_cliente?: number;

    @IsOptional()
    @IsInt()
    empatia?: number;

    @IsOptional()
    @IsInt()
    comparte_informacion?: number;

    @IsOptional()
    @IsInt()
    colabora_pares?: number;

    @IsOptional()
    @IsInt()
    trabajo_positivo?: number;

    @IsOptional()
    @IsInt()
    cumple_objetivos?: number;

    @IsOptional()
    @IsInt()
    acepta_sugerencias?: number;

    @IsOptional()
    @IsInt()
    situacion_adversas?: number;

    @IsOptional()
    @IsInt()
    asistencia_puntualidad?: number;

    @IsOptional()
    @IsInt()
    imagen?: number;

    @IsOptional()
    @IsInt()
    limpieza_instalaciones?: number;

    @IsOptional()
    @IsInt()
    limpieza_vestuarios?: number;

    @IsOptional()
    @IsInt()
    minimiza_perdidas_roturas?: number;

    @IsOptional()
    @IsInt()
    objetivos?: number;

    @IsOptional()
    @IsInt()
    cumplimientos_sector?: number;

    @IsOptional()
    @IsInt()
    estado?: number;

    @IsOptional()
    @IsInt()
    conocimientos_sector?: number;

    @IsOptional()
    @IsString()
    obs?: string;
}

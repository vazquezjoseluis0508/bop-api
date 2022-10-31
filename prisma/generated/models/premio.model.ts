import { IsInt, IsDefined, IsString, IsOptional, IsDate } from "class-validator";
import "./";

export class premio {
    @IsDefined()
    @IsInt()
    idPremio!: number;

    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsString()
    descripcion?: string;

    @IsOptional()
    @IsString()
    img?: string;

    @IsOptional()
    @IsInt()
    estado?: number;

    @IsOptional()
    @IsDate()
    f_premio?: Date;

    @IsOptional()
    @IsDate()
    f_proceso?: Date;

    @IsOptional()
    @IsString()
    tipo?: string;

    @IsOptional()
    @IsInt()
    mes_cumplido?: number;
}

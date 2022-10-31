import { IsInt, IsDefined, IsOptional, IsString, IsDate } from "class-validator";
import "./";

export class estudio {
    @IsDefined()
    @IsInt()
    idEstudio!: number;

    @IsOptional()
    @IsInt()
    institucion?: number;

    @IsOptional()
    @IsString()
    titulo?: string;

    @IsOptional()
    @IsDate()
    fecha?: Date;

    @IsOptional()
    @IsInt()
    estado?: number;

    @IsOptional()
    @IsString()
    tipo?: string;
}

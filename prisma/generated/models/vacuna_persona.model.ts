import { IsInt, IsDefined, IsString, IsOptional, IsDate } from "class-validator";
import "./";

export class vacuna_persona {
    @IsDefined()
    @IsInt()
    idVacunaPersona!: number;

    @IsDefined()
    @IsString()
    idPersona!: string;

    @IsOptional()
    @IsString()
    tipo?: string;

    @IsOptional()
    @IsString()
    dosis?: string;

    @IsOptional()
    @IsInt()
    estado?: number;

    @IsOptional()
    @IsString()
    marca?: string;

    @IsOptional()
    @IsDate()
    fecha_vacuna?: Date;

    @IsOptional()
    @IsDate()
    fecha_registro?: Date;
}

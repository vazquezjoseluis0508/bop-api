import { IsInt, IsDefined, IsString, IsOptional, IsBoolean, IsDate } from "class-validator";
import "./";

export class permisos {
    @IsDefined()
    @IsInt()
    idPermiso!: number;

    @IsDefined()
    @IsString()
    nombre!: string;

    @IsOptional()
    @IsString()
    permisos?: string;

    @IsOptional()
    @IsBoolean()
    estado?: boolean;

    @IsOptional()
    @IsDate()
    fecha_registro?: Date;
}

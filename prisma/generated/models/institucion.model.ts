import { IsInt, IsDefined, IsString, IsOptional } from "class-validator";
import "./";

export class institucion {
    @IsDefined()
    @IsInt()
    idInstitucion!: number;

    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsString()
    direccion?: string;

    @IsOptional()
    @IsString()
    telefono?: string;

    @IsOptional()
    @IsString()
    email?: string;

    @IsOptional()
    @IsString()
    web?: string;

    @IsOptional()
    @IsInt()
    estado?: number;
}

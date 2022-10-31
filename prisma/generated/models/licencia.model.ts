import { IsInt, IsDefined, IsString, IsOptional } from "class-validator";
import "./";

export class licencia {
    @IsDefined()
    @IsInt()
    idLicencia!: number;

    @IsDefined()
    @IsString()
    titulo!: string;

    @IsOptional()
    @IsString()
    descripcion?: string;

    @IsOptional()
    @IsInt()
    dias?: number;

    @IsOptional()
    @IsInt()
    estado?: number;
}

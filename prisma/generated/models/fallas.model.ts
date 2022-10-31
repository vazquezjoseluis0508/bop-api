import { IsInt, IsDefined, IsString, IsOptional } from "class-validator";
import "./";

export class fallas {
    @IsDefined()
    @IsInt()
    idFallas!: number;

    @IsOptional()
    @IsString()
    descripcion?: string;

    @IsOptional()
    @IsString()
    tipo?: string;

    @IsOptional()
    @IsInt()
    estado?: number;

    @IsOptional()
    @IsString()
    gravedad?: string;

    @IsOptional()
    @IsString()
    articulo?: string;
}

import { IsInt, IsDefined, IsString, IsOptional, IsDate } from "class-validator";
import "./";

export class documentos {
    @IsDefined()
    @IsInt()
    idDocumentos!: number;

    @IsOptional()
    @IsString()
    documento?: string;

    @IsOptional()
    @IsString()
    descripcion?: string;

    @IsOptional()
    @IsString()
    file?: string;

    @IsOptional()
    @IsString()
    path?: string;

    @IsOptional()
    @IsString()
    url?: string;

    @IsOptional()
    @IsDate()
    fecha?: Date;

    @IsOptional()
    @IsString()
    categoria?: string;

    @IsOptional()
    @IsString()
    tipo?: string;

    @IsOptional()
    @IsString()
    size?: string;

    @IsOptional()
    @IsInt()
    sector?: number;

    @IsOptional()
    @IsInt()
    referencia?: number;

    @IsOptional()
    @IsString()
    funcionalidad?: string;

    @IsOptional()
    @IsString()
    estado?: string;
}

import { IsInt, IsDefined, IsString, IsOptional } from "class-validator";
import "./";

export class uniforme {
    @IsDefined()
    @IsInt()
    idUniforme!: number;

    @IsOptional()
    @IsString()
    prenda?: string;

    @IsOptional()
    @IsString()
    tipo_prenda?: string;

    @IsOptional()
    @IsString()
    talle?: string;

    @IsOptional()
    @IsInt()
    cantidad?: number;

    @IsOptional()
    @IsInt()
    estado?: number;
}

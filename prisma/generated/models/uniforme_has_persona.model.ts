import { IsInt, IsDefined, IsString, IsDate, IsOptional } from "class-validator";
import "./";

export class uniforme_has_persona {
    @IsDefined()
    @IsInt()
    idUniforme_has_persona!: number;

    @IsDefined()
    @IsString()
    idUniforme!: string;

    @IsDefined()
    @IsInt()
    idPersona!: number;

    @IsOptional()
    @IsDate()
    f_proceso?: Date;

    @IsOptional()
    @IsString()
    detalle?: string;

    @IsOptional()
    @IsString()
    descripcion?: string;

    @IsOptional()
    @IsInt()
    usuario?: number;

    @IsOptional()
    @IsInt()
    estado?: number;
}

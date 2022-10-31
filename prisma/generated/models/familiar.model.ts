import { IsInt, IsDefined, IsOptional, IsString } from "class-validator";
import "./";

export class familiar {
    @IsDefined()
    @IsInt()
    idFamiliar!: number;

    @IsOptional()
    @IsInt()
    idPersona?: number;

    @IsOptional()
    @IsString()
    parentezco?: string;

    @IsOptional()
    @IsString()
    documento?: string;

    @IsOptional()
    @IsInt()
    estado?: number;

    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsString()
    tipo_doc?: string;

    @IsOptional()
    @IsString()
    telefono?: string;
}

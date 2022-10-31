import { IsInt, IsDefined, IsString, IsOptional } from "class-validator";
import "./";

export class conexion_bejerman {
    @IsDefined()
    @IsInt()
    idConexionBejerman!: number;

    @IsOptional()
    @IsString()
    username?: string;

    @IsOptional()
    @IsString()
    pass?: string;

    @IsOptional()
    @IsInt()
    estado?: number;

    @IsOptional()
    @IsInt()
    usuario?: number;
}

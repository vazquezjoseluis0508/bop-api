import { IsInt, IsDefined, IsString, IsOptional } from "class-validator";
import "./";

export class titulo {
    @IsDefined()
    @IsInt()
    idTitulo!: number;

    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsInt()
    estado?: number;
}

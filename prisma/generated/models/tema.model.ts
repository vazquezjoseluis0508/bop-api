import { IsInt, IsDefined, IsString, IsOptional } from "class-validator";
import "./";

export class tema {
    @IsDefined()
    @IsInt()
    idTema!: number;

    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsInt()
    estado?: number;
}

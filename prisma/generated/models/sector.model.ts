import { IsInt, IsDefined, IsString, IsOptional } from "class-validator";
import "./";

export class sector {
    @IsDefined()
    @IsInt()
    idSector!: number;

    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsInt()
    estado?: number;
}

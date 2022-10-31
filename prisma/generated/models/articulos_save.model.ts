import { IsString, IsDefined, IsOptional } from "class-validator";
import "./";

export class articulos_save {
    @IsDefined()
    @IsString()
    nombre!: string;

    @IsOptional()
    @IsString()
    tipo_modelo?: string;
}

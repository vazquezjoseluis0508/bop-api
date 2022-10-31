import { IsInt, IsDefined, IsString, IsOptional } from "class-validator";
import "./";

export class articulo_deposito_importacion {
    @IsDefined()
    @IsInt()
    id_articulo_deposito_importacion!: number;

    @IsOptional()
    @IsString()
    cod_deposito?: string;
}

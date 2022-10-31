import { IsInt, IsDefined } from "class-validator";
import "./";

export class falla_articulo {
    @IsDefined()
    @IsInt()
    idFallasArticulos!: number;

    @IsDefined()
    @IsInt()
    falla!: number;

    @IsDefined()
    @IsInt()
    articulo!: number;
}

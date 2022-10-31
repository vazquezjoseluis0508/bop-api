import { IsInt, IsDefined, IsDate, IsString, IsOptional } from "class-validator";
import "./";

export class movimiento_articulo {
    @IsDefined()
    @IsInt()
    idMovimiento_articulo!: number;

    @IsDefined()
    @IsInt()
    articulo!: number;

    @IsDefined()
    @IsInt()
    cantidad!: number;

    @IsDefined()
    @IsDate()
    fecha_hora!: Date;

    @IsDefined()
    @IsString()
    movimiento!: string;

    @IsDefined()
    @IsInt()
    usuario!: number;

    @IsOptional()
    @IsString()
    locacion?: string;
}

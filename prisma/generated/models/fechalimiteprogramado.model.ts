import { IsInt, IsDefined, IsDate, IsOptional } from "class-validator";
import "./";

export class fechalimiteprogramado {
    @IsDefined()
    @IsInt()
    idFechaLimiteProgramado!: number;

    @IsOptional()
    @IsDate()
    fecha?: Date;

    @IsOptional()
    @IsInt()
    usuario?: number;

    @IsOptional()
    @IsInt()
    estado?: number;

    @IsOptional()
    @IsDate()
    f_registro?: Date;
}

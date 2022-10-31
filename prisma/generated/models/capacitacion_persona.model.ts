import { IsInt, IsDefined, IsDate, IsOptional } from "class-validator";
import "./";

export class capacitacion_persona {
    @IsDefined()
    @IsInt()
    idCapacitacionPersona!: number;

    @IsDefined()
    @IsInt()
    idCapacitacion!: number;

    @IsDefined()
    @IsInt()
    idPersona!: number;

    @IsDefined()
    @IsInt()
    estado!: number;

    @IsOptional()
    @IsDate()
    fecha_registro?: Date;

    @IsOptional()
    @IsInt()
    usuario?: number;
}

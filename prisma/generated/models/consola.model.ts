import { IsInt, IsDefined, IsString, IsDate } from "class-validator";
import "./";

export class consola {
    @IsDefined()
    @IsInt()
    idConsola!: number;

    @IsDefined()
    @IsInt()
    usuario!: number;

    @IsDefined()
    @IsInt()
    accion_id!: number;

    @IsDefined()
    @IsString()
    accion!: string;

    @IsDefined()
    @IsDate()
    fecha_registro!: Date;

    @IsDefined()
    @IsInt()
    modulo!: number;
}

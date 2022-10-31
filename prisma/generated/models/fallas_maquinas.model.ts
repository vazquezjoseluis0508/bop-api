import { IsInt, IsDefined, IsDate, IsOptional } from "class-validator";
import "./";

export class fallas_maquinas {
    @IsDefined()
    @IsInt()
    idFallas_maquinas!: number;

    @IsDefined()
    @IsInt()
    maquina!: number;

    @IsDefined()
    @IsInt()
    falla!: number;

    @IsDefined()
    @IsDate()
    fecha_registro!: Date;

    @IsDefined()
    @IsInt()
    estado!: number;

    @IsDefined()
    @IsInt()
    usuario!: number;

    @IsOptional()
    @IsInt()
    ticket?: number;
}

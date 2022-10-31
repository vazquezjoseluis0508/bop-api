import { IsInt, IsDefined, IsOptional, IsDate, IsString } from "class-validator";
import "./";

export class pedido_old {
    @IsDefined()
    @IsInt()
    idPedido!: number;

    @IsOptional()
    @IsInt()
    idCalendarioMenu?: number;

    @IsOptional()
    @IsInt()
    idMenu?: number;

    @IsOptional()
    @IsInt()
    usuario?: number;

    @IsOptional()
    @IsDate()
    f_registro?: Date;

    @IsOptional()
    @IsDate()
    f_listo?: Date;

    @IsOptional()
    @IsInt()
    estado?: number;

    @IsOptional()
    @IsInt()
    persona?: number;

    @IsOptional()
    @IsString()
    legajo?: string;

    @IsOptional()
    @IsString()
    persona_str?: string;

    @IsOptional()
    @IsString()
    descripcion?: string;
}

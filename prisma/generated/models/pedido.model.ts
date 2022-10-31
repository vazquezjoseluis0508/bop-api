import { Prisma } from "@prisma/client";
import { IsInt, IsDefined, IsOptional, IsDate, IsString } from "class-validator";
import "./";

export class pedido {
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

    @IsOptional()
    importe_externo?: Prisma.Decimal;

    @IsOptional()
    importe_interno?: Prisma.Decimal;

    @IsOptional()
    @IsInt()
    idMenuBingo?: number;

    @IsOptional()
    @IsString()
    turno?: string;
}

import { Prisma } from "@prisma/client";
import { IsInt, IsDefined, IsOptional, IsDate } from "class-validator";
import "./";

export class valormenu {
    @IsDefined()
    @IsInt()
    idValorMenu!: number;

    @IsOptional()
    importe_externo?: Prisma.Decimal;

    @IsOptional()
    @IsDate()
    f_registro?: Date;

    @IsOptional()
    @IsInt()
    usuario?: number;

    @IsOptional()
    @IsInt()
    estado?: number;

    @IsOptional()
    importe_interno?: Prisma.Decimal;
}

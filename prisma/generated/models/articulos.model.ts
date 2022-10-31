import { Prisma } from "@prisma/client";
import { IsInt, IsDefined, IsString, IsOptional, IsBoolean } from "class-validator";
import "./";

export class articulos {
    @IsDefined()
    @IsInt()
    idArticulo!: number;

    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsInt()
    categoria?: number;

    @IsOptional()
    @IsInt()
    stock?: number;

    @IsOptional()
    @IsInt()
    estado?: number;

    @IsOptional()
    precioCompra?: Prisma.Decimal;

    @IsOptional()
    precioVenta?: Prisma.Decimal;

    @IsOptional()
    @IsInt()
    stockMinimo?: number;

    @IsOptional()
    @IsBoolean()
    entrada?: boolean;

    @IsOptional()
    @IsBoolean()
    salida?: boolean;

    @IsOptional()
    @IsString()
    tipo_modelo?: string;

    @IsOptional()
    @IsString()
    descripcion?: string;

    @IsOptional()
    @IsString()
    serie?: string;

    @IsOptional()
    @IsString()
    codigo?: string;
}

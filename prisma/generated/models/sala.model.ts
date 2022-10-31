import { IsInt, IsDefined, IsString, IsOptional, IsDate } from "class-validator";
import "./";

export class sala {
    @IsDefined()
    @IsInt()
    idSala!: number;

    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    descripcion?: string;

    @IsOptional()
    @IsString()
    color?: string;

    @IsOptional()
    @IsString()
    textColor?: string;

    @IsOptional()
    @IsString()
    start?: string;

    @IsOptional()
    @IsString()
    end?: string;

    @IsOptional()
    @IsInt()
    estado?: number;

    @IsOptional()
    @IsDate()
    f_creacion?: Date;

    @IsOptional()
    @IsInt()
    usuario?: number;
}

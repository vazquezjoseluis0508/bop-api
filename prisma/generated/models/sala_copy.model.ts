import { IsInt, IsDefined, IsString, IsOptional, IsDate } from "class-validator";
import "./";

export class sala_copy {
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
    @IsDate()
    start?: Date;

    @IsOptional()
    @IsDate()
    end?: Date;

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

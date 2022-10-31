import { IsInt, IsDefined, IsString, IsOptional, IsDate } from "class-validator";
import "./";

export class calendariomenu_old {
    @IsDefined()
    @IsInt()
    idCalendarioMenu!: number;

    @IsOptional()
    @IsString()
    legajo?: string;

    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    descripcion?: string;

    @IsOptional()
    @IsDate()
    start?: Date;

    @IsOptional()
    @IsString()
    color?: string;

    @IsOptional()
    @IsString()
    textColor?: string;

    @IsOptional()
    @IsDate()
    end?: Date;

    @IsOptional()
    @IsInt()
    idMenu?: number;

    @IsOptional()
    @IsInt()
    estado?: number;

    @IsOptional()
    @IsDate()
    f_registro?: Date;
}

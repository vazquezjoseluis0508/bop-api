import { IsInt, IsDefined, IsString, IsOptional, IsDate } from "class-validator";
import "./";

export class novedades {
    @IsDefined()
    @IsInt()
    idNovedades!: number;

    @IsOptional()
    @IsString()
    texto?: string;

    @IsDefined()
    @IsInt()
    referencia!: number;

    @IsDefined()
    @IsInt()
    estado!: number;

    @IsDefined()
    @IsDate()
    f_proceso!: Date;

    @IsDefined()
    @IsInt()
    usuario!: number;

    @IsDefined()
    @IsString()
    tipo!: string;
}

import { IsInt, IsDefined, IsString, IsDate, IsOptional } from "class-validator";
import "./";

export class parametro_menu {
    @IsDefined()
    @IsInt()
    idParametroMenu!: number;

    @IsDefined()
    @IsString()
    dia!: string;

    @IsDefined()
    @IsString()
    tiempo!: string;

    @IsDefined()
    @IsInt()
    cantidad!: number;

    @IsOptional()
    @IsDate()
    f_proceso?: Date;

    @IsOptional()
    @IsInt()
    usuario_carga?: number;

    @IsOptional()
    @IsInt()
    estado?: number;
}

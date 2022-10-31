import { IsInt, IsDefined, IsOptional, IsDate, IsString } from "class-validator";
import "./";

export class menu_personal_20190904 {
    @IsDefined()
    @IsInt()
    idMenuPersonal!: number;

    @IsOptional()
    @IsInt()
    estado?: number;

    @IsOptional()
    @IsDate()
    f_proceso?: Date;

    @IsOptional()
    @IsString()
    descripcion?: string;

    @IsOptional()
    @IsInt()
    usuario_carga?: number;

    @IsOptional()
    @IsDate()
    fecha_menu?: Date;
}

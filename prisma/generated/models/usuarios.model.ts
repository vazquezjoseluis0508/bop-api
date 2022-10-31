import { IsInt, IsDefined, IsString, IsOptional, IsBoolean, IsDate } from "class-validator";
import "./";

export class usuarios {
    @IsDefined()
    @IsInt()
    idUsuarios!: number;

    @IsDefined()
    @IsString()
    nombre!: string;

    @IsDefined()
    @IsString()
    usr!: string;

    @IsDefined()
    @IsString()
    email!: string;

    @IsDefined()
    @IsString()
    clave!: string;

    @IsOptional()
    @IsString()
    celular?: string;

    @IsDefined()
    @IsBoolean()
    estado!: boolean;

    @IsDefined()
    @IsInt()
    permisos_id!: number;

    @IsDefined()
    @IsDate()
    fecha_registro!: Date;

    @IsOptional()
    @IsString()
    legajo?: string;
}

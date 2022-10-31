import { IsInt, IsDefined, IsDate, IsString, IsOptional } from "class-validator";
import "./";

export class licencia_persona {
    @IsDefined()
    @IsInt()
    idLicenciaPersona!: number;

    @IsDefined()
    @IsInt()
    idLicencia!: number;

    @IsDefined()
    @IsInt()
    idPersona!: number;

    @IsDefined()
    @IsDate()
    fecha_registro!: Date;

    @IsDefined()
    @IsInt()
    usuario!: number;

    @IsDefined()
    @IsInt()
    estado!: number;

    @IsOptional()
    @IsString()
    descripcion?: string;

    @IsDefined()
    @IsString()
    documento!: string;

    @IsDefined()
    @IsInt()
    dias!: number;

    @IsDefined()
    @IsDate()
    f_inicio!: Date;

    @IsDefined()
    @IsDate()
    f_fin!: Date;
}

import { IsInt, IsDefined, IsString, IsOptional, IsDate } from "class-validator";
import "./";

export class premio_persona {
    @IsDefined()
    @IsInt()
    idPremioPersona!: number;

    @IsDefined()
    @IsInt()
    idPremio!: number;

    @IsDefined()
    @IsInt()
    idPersona!: number;

    @IsOptional()
    @IsString()
    descripcion?: string;

    @IsOptional()
    @IsDate()
    fecha_entrega?: Date;

    @IsOptional()
    @IsString()
    tipo?: string;

    @IsDefined()
    @IsInt()
    estado!: number;

    @IsDefined()
    @IsInt()
    usuario!: number;

    @IsDefined()
    @IsDate()
    fecha_registro!: Date;
}

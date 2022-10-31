import { Prisma } from "@prisma/client";
import { IsInt, IsDefined, IsString, IsDate, IsOptional } from "class-validator";
import "./";

export class persona {
    @IsDefined()
    @IsInt()
    id!: number;

    @IsDefined()
    @IsString()
    nombre!: string;

    @IsDefined()
    @IsString()
    apellido!: string;

    @IsDefined()
    @IsDate()
    alta!: Date;

    @IsOptional()
    @IsInt()
    id_tarjeta?: number;

    @IsOptional()
    @IsString()
    legajo?: string;

    @IsDefined()
    preciohora!: Prisma.Decimal;

    @IsDefined()
    @IsInt()
    extras!: number;

    @IsOptional()
    @IsInt()
    id_bioadmin?: number;

    @IsOptional()
    imagen?: Bytes;

    @IsOptional()
    @IsInt()
    inc_reportes?: number;

    @IsOptional()
    @IsDate()
    eliminado?: Date;

    @IsOptional()
    @IsDate()
    fecha_ingreso?: Date;

    @IsOptional()
    @IsString()
    contrasena?: string;

    @IsDefined()
    @IsInt()
    rol!: number;

    @IsOptional()
    @IsString()
    direccion?: string;

    @IsOptional()
    @IsString()
    dni?: string;

    @IsOptional()
    @IsString()
    email?: string;

    @IsOptional()
    @IsString()
    cel?: string;

    @IsOptional()
    @IsString()
    tel?: string;

    @IsOptional()
    @IsString()
    cp?: string;

    @IsOptional()
    @IsString()
    vehiculo?: string;

    @IsOptional()
    @IsString()
    patente?: string;

    @IsOptional()
    @IsInt()
    id_provincia?: number;

    @IsOptional()
    @IsString()
    localidad?: string;

    @IsOptional()
    @IsInt()
    id_calendario?: number;

    @IsOptional()
    @IsString()
    tarjetazk?: string;

    @IsOptional()
    @IsDate()
    fecha_venc?: Date;

    @IsOptional()
    @IsInt()
    id_sector_por_empresa?: number;

    @IsOptional()
    @IsString()
    remoto_password?: string;

    @IsDefined()
    @IsInt()
    envio_tarde!: number;

    @IsOptional()
    @IsDate()
    ultima_fecha_envio_tarde?: Date;

    @IsOptional()
    @IsString()
    email_trabajo?: string;

    @IsOptional()
    @IsString()
    cuil?: string;

    @IsOptional()
    @IsString()
    pass_myweb?: string;

    @IsOptional()
    @IsString()
    modulos_habilitados?: string;

    @IsOptional()
    @IsString()
    IDPHONE?: string;

    @IsOptional()
    @IsInt()
    ES_VISITA?: number;

    @IsOptional()
    @IsString()
    V_EMPRESA_ORIGEN?: string;

    @IsOptional()
    @IsInt()
    V_EMPLEADO_VISITA?: number;

    @IsOptional()
    @IsString()
    V_PERTENENCIAS?: string;

    @IsOptional()
    @IsString()
    V_NRO_ART?: string;

    @IsOptional()
    @IsString()
    V_MOTIVO_VISITA?: string;

    @IsOptional()
    @IsInt()
    V_VENCIDO?: number;

    @IsOptional()
    @IsDate()
    FECHA_NACIMIENTO?: Date;

    @IsOptional()
    @IsString()
    PUESTO_TRABAJO?: string;
}

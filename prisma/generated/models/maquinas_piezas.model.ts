import { IsInt, IsDefined, IsString } from "class-validator";
import "./";

export class maquinas_piezas {
    @IsDefined()
    @IsInt()
    nro_egm!: number;

    @IsDefined()
    @IsString()
    modelo!: string;

    @IsDefined()
    @IsString()
    tipo_aceptbill!: string;

    @IsDefined()
    @IsString()
    tipo_impre!: string;

    @IsDefined()
    @IsString()
    tipo_moni!: string;
}

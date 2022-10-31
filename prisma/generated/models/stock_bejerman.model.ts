import { IsString, IsOptional, IsInt, IsDefined } from "class-validator";
import "./";

export class stock_bejerman {
    @IsOptional()
    @IsString()
    stkart_codgen?: string;

    @IsOptional()
    @IsString()
    skart_codEle1?: string;

    @IsOptional()
    @IsString()
    skart_codEle2?: string;

    @IsOptional()
    @IsString()
    skart_codEle3?: string;

    @IsOptional()
    @IsString()
    deposito?: string;

    @IsOptional()
    @IsString()
    cantidad?: string;

    @IsOptional()
    @IsString()
    f_carga_bejerman?: string;

    @IsOptional()
    @IsString()
    autor?: string;

    @IsDefined()
    @IsInt()
    id_stock_bejerman!: number;
}

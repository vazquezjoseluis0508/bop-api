import { IsString, IsDefined, IsOptional } from "class-validator";
import "./";

export class codificados {
    @IsDefined()
    @IsString()
    gen1!: string;

    @IsDefined()
    @IsString()
    atr1!: string;

    @IsDefined()
    @IsString()
    atr2!: string;

    @IsDefined()
    @IsString()
    atr3!: string;

    @IsOptional()
    @IsString()
    gen1desc?: string;

    @IsOptional()
    @IsString()
    atr1desc?: string;

    @IsOptional()
    @IsString()
    atr2desc?: string;

    @IsOptional()
    @IsString()
    atr3desc?: string;
}

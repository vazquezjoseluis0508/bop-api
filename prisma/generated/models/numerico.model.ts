import { IsInt, IsDefined } from "class-validator";
import "./";

export class numerico {
    @IsDefined()
    @IsInt()
    numericocol!: number;
}

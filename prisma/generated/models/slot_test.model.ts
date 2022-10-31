import { IsInt, IsDefined, IsString, IsDate } from "class-validator";
import "./";

export class slot_test {
    @IsDefined()
    @IsInt()
    tst_id!: number;

    @IsDefined()
    @IsInt()
    tst_egm!: number;

    @IsDefined()
    @IsString()
    tst_srl_acept!: string;

    @IsDefined()
    @IsString()
    tst_srl_impr!: string;

    @IsDefined()
    @IsString()
    tst_srl_monit!: string;

    @IsDefined()
    @IsString()
    tst_srl_bckpln!: string;

    @IsDefined()
    @IsString()
    tst_srl_mother!: string;

    @IsDefined()
    @IsDate()
    tst_hora_fecha!: Date;
}

import type { CalculatorButtonType } from "../types/CalculatorButtonType";
import type { CalculatorButtonProps } from "../types/CalculatorButtonProps";
import type { OperatorType } from "../types/OperatorType";
import { Button } from "reactstrap";
import type { ZerosType } from "../types/ZerosType";
import { useEffect, useState} from "react";
import type { LabelType } from "../types/LabelType";

type buttonVariants = OperatorType | number | ZerosType;

const ButtonCalculator : CalculatorButtonType<buttonVariants> = (
    {label} : CalculatorButtonProps<buttonVariants>
    ) => {

    let classNamesButton : string = "button-";
    let idNameButton : string = "id-";

    let stringBtn : string[][] = [
        ["0", "00", "000"],
        ["+", "-", "/", "*", "."]
    ];
    
    const [btn, setBtn] = useState<LabelType<buttonVariants>>(label);

    if (typeof btn === "number") {
        classNamesButton += "number";
    } else if (typeof label === "string") {
        stringBtn.forEach((l : string[]) => {
            l.forEach((c : string) => {
                if (c.charAt(0) === "0" && btn.charAt(0) === "0" ) {
                    classNamesButton += "zeros-group";
                } else {
                    classNamesButton += "operator";
                }
            })
        })
    } else {
        throw new Error("error className and id button calculator")
    };

    idNameButton += `${classNamesButton}-${btn.toString()}`;

    useEffect(() => {
        setBtn(label);
    }, [label]);

    return (
        <Button id={idNameButton} className={classNamesButton} >
            {btn}
        </Button>
    );
};

export default ButtonCalculator;
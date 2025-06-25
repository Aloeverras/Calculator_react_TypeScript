import type { CalculatorButtonType } from "../types/buttonType/CalculatorButtonType";
import type { CalculatorButtonProps } from "../types/buttonType/CalculatorButtonProps";
import type { OperatorType } from "../types/buttonType/OperatorType";
import { Button } from "reactstrap";
import type { ZerosType } from "../types/buttonType/ZerosType";
import { useEffect, useState } from "react";
import type { LabelType } from "../types/buttonType/LabelType";

type buttonVariants = OperatorType | number | ZerosType;

const ButtonCalculator: CalculatorButtonType<buttonVariants> = (
    { label }: CalculatorButtonProps<buttonVariants>
) => {

    let classNamesButton: string = "button-";
    let idNameButton: string = "id-";


    const [btn, setBtn] = useState<LabelType<buttonVariants>>(label);

    if (typeof btn === "number") {
        classNamesButton += "number";
    } else if (typeof label === "string") {
        if (btn.charAt(0) === "0") {
            classNamesButton += "zero-group"
        } else {
            classNamesButton += "operator"
        }
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
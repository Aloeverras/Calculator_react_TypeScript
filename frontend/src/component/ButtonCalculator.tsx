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
    
    const [btn, setBtn] = useState<LabelType<buttonVariants>>(label);

    const classNamesButton : string[] = ["border-0"];
    const idNameButton : string[] = ["id", label.toString()];
    
    try {
        if (typeof btn === "number") {
            classNamesButton.push("number-button", "bg-warning", "text-dark");
            idNameButton.push("n")
            if (btn !== 0) {
                if (btn % 2 === 0){
                    classNamesButton.push("paire");
                } else {
                    classNamesButton.push("impaire");
                }
            }
        } else {
            idNameButton.push("s")
            if (btn.charAt(0) === "0") {
                classNamesButton.push("zero-group-button")
            } else if (btn !== "AC" && btn !== "C" && btn.length >= 1) {
                classNamesButton.push("operator-button")
            } else if (btn.charAt(0) === "." && btn.charAt(1) === "0") {
                classNamesButton.push("decimal-zero-group-button")
            } else if (btn === "AC" || btn === "C") {
                classNamesButton.push("main-button")
            }
            else {
                classNamesButton.push("operator-button")
            }
        }
    } catch (e : unknown) {
        console.error(e)
    }

    useEffect(() => {
        setBtn(label);
    }, [btn]);

    return (
        <Button id={idNameButton.join("-")} key={`ket-${idNameButton.join("-")}-key`} className={classNamesButton.join(" ")} >
            {btn}
        </Button>
    );
};

export default ButtonCalculator;
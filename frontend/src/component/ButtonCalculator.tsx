import type { ButtonCalculatorType } from "../types/buttonType/ButtonCalculatorType";
import type { ButtonCalculatorProps } from "../types/buttonType/ButtonCalculatorProps";
import {Button} from "reactstrap";
import type { NumberButtonCalculator } from "../types/buttonType/NumberButtonCalculator";
import type { OperatorButtonCalculator } from "../types/buttonType/OperatorButtonCalculator";
import type { MainButtonCalculator } from "../types/buttonType/MainButtonCalculator";

const ButtonCalculator : ButtonCalculatorType<NumberButtonCalculator | OperatorButtonCalculator | MainButtonCalculator> = ({label} : ButtonCalculatorProps<NumberButtonCalculator | OperatorButtonCalculator | MainButtonCalculator> ) => {
    const classNameButton : string[] = ["button-calculator"];
    const idButton : string[] = [label.toString()];


    if (typeof label === "number") {
        classNameButton.push("number-btn");
        idButton.push("n")
    } else {
        idButton.push("s")
        if (label === "AC" || label === "C") {
            classNameButton.push("main-btn");
        } else if (label.charAt(0) === "0") {
            classNameButton.push("zero-team")
        } else {
            classNameButton.push("opérator-btn")
        }
    };

    return (
        <Button id={idButton.join("-")} className={classNameButton.join(" ")} key={`${idButton.join("-")}-key`}>
            {label}
        </Button>
    )
}

export default ButtonCalculator
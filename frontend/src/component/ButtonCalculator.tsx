import type { ButtonCalculatorType } from "../types/buttonType/ButtonCalculatorType";
import type { ButtonCalculatorProps } from "../types/buttonType/ButtonCalculatorProps";
import {Button} from "reactstrap";
import { useState } from "react";
import type { NumberButtonCalculator } from "../types/buttonType/NumberButtonCalculator";
import type { OperatorButtonCalculator } from "../types/buttonType/OperatorButtonCalculator";
import type { MainButtonCalculator } from "../types/buttonType/MainButtonCalculator";

const ButtonCalculator : ButtonCalculatorType = ({id, label} : ButtonCalculatorProps ) => {

    const [btn, setBtn] = useState<NumberButtonCalculator | OperatorButtonCalculator | MainButtonCalculator>(label);

    const classNameButton : string[] = ["button-calculator"];
    const idButton : string[] = [id];

    return (
        <Button id={idButton.join("-")} className={classNameButton.join(" ")}>
            {btn}
        </Button>
    )
}

export default ButtonCalculator